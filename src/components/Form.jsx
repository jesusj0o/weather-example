import React, {useState} from "react";

import Error from "./Error";

const Form = ({search, setSearch, setQuery}) => { 

    const [error, setError] = useState(false);
    // get city and country 
    const {city, country} = search; 

    //function to put elements on state 
    const handleChange = e => { 
        //update state 
        setSearch({ 
            ...search, 
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => { 
        e.preventDefault();

        if(city.trim() === '' || country.trim() === ''){ 
            setError(true)
            return
        }
        setError(false)
        setQuery(true)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error ? <Error message='You must fill both inputs'/> : null }
                <div className="input-field col s12">
                    <input type="text" name="city" id="city" value={city} onChange={handleChange}/>
                    <label htmlFor="city">City: </label>
                </div>

                <div className="input-field col s12">
                    <select name="country" id="country" value={country} onChange={handleChange}>
                        <option value="">--Select country--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="country">Country:</label>
                </div>
                <div className="input-field col s12">
                    <input 
                      type="submit" 
                      value='search weather' 
                      className="waves-effect waves-light btn-large btn-block yellow accent-4" />
                </div>
            </form>
        </div>
    );
};

export default Form;
