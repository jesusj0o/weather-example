import React, {Fragment, useState, useEffect} from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
function App() {

  const [search, setSearch] = useState({
    city: '', 
    country: ''
  });
  
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false); 

  const {city, country} = search; 
  useEffect(() => {
    const queryAPI = async () => {  
      if(query === true) { 
        const api_key = 'debcaa36d26df67af76d3e9beaedd4f9';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
  
        const response = await fetch(url); 
        const result = await response.json();
  
        setResult(result);
        setQuery(false);

        if(result.cod === '404'){ 
          setError(true); 
        }else{ 
          setError(false);
        }

      }
    }
    queryAPI();
  }, [query])
  
  let Compoenent;
  if(error){ 
    Compoenent = <Error message='No city found'/>
  }else{ 
    Compoenent = <Weather result={result}/>
  }
  
  return (
    <Fragment>
        <Header title='Weather React App'/>

        <div className='contenedor-form'>
          <div className='container'>
            <div className='row'>
              <div className='col m6 s12'>
                <Form 
                  search={search}
                  setSearch={setSearch}
                  setQuery={setQuery}
                />
              </div>
              <div className='col m6 s12'>
                {Compoenent}
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
