import React, {useState} from 'react';
import HourlyWeather from './HourlyWeather';

const Weather = () => {
    const [inputValue, setInputValue] = useState('');
    const [currentWeather, setCurrentWeather] = useState();
    const [weather, setWeather] = useState();
    const APIKEY = "bcd33707bfe86abde0c90a0f5b1a14b8";
    
    const Convert = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    }

    const getWeather = (e) => {
        e.preventDefault()
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${APIKEY}`)
        .then(response => response.json())
        .then(response => {
            return setCurrentWeather({temp: Convert(response.main.temp), clouds: response.clouds.all, tampFeelsLike: Convert(response.main.feels_like), pressure: response.main.pressure, humidity: response.main.humidity })
        })
        .catch(err => {
        console.log(err);
        });

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=${APIKEY}`)
        .then(response => response.json())
        .then(response => {
            return setWeather(response.list)
        })
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <form onSubmit={getWeather}>
                <div className="row">
                    <div className="input-field">
                        <input id="weatherInput" value={inputValue} type="text" className="validate" onChange={handleChange}/>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            <i className="material-icons right">send</i>
                        </button>
                        </div>
                </div>
            </form>
            
            { weather ? 
            <table>
                <thead>
                    <tr>
                        <th>Czas</th>
                        <th>Temperatura</th>
                        <th>Temperatura odczuwalna</th>
                        <th>Zachmurzenie</th>
                        <th>Wilgotność powietrza</th>
                        <th>Ciśnienie atmosferyczne</th>
                    </tr>
                </thead>
                <tbody>
                    <HourlyWeather 
                        key="Current" 
                        time="Current" 
                        temp={currentWeather.temp} 
                        feelsLike={currentWeather.tampFeelsLike} 
                        clouds={currentWeather.clouds} 
                        pressure={currentWeather.pressure} 
                        humidity={currentWeather.humidity}/>
                    {weather.map((data) => { 
                    return <HourlyWeather 
                            key={data.dt_txt} 
                            time={data.dt_txt} 
                            temp={Convert(data.main.temp)} 
                            feelsLike={Convert(data.main.feels_like)} 
                            clouds={data.clouds.all} 
                            pressure={data.main.pressure} 
                            humidity={data.main.humidity}/>
                    })}
                </tbody>
            </table>: null}
        </>
    );
};

export default Weather;