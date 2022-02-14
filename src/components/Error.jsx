import React from 'react';


const Error = ({message}) => {
    return ( 
        <p className='red error darken-4'>{message}</p>
     );
}
 
export default Error;