import React from "react";

const Weather = ({ result }) => {
    //getting weather values
    const { name, main } = result;
    if (!name) return null;
    
    //kelvin degrees 
    const kelvin = 273.15; 

    return (
        <div className="card-panel white col s12">
            <div className="back-text">
                <h2> Weather from {name} is: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Max temperature: 
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Min temperature: 
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>

                <p className="">
                    Humidity: 
                    {parseFloat(main.humidity)} 
                </p>
            </div>
        </div>
    );
};

export default Weather;
