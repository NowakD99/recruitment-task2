import React from 'react';

const HourlyWeather = ({time, temp, feelsLike, humidity, pressure, clouds}) => {

    return (
         <tr className={time === "Current" ? "first-row" : null}>
             <td>{time}</td>
             <td>{temp}&deg;C</td>
             <td>{feelsLike}&deg;C</td>
             <td>{clouds}%</td>
             <td>{humidity}%</td>
             <td>{pressure}</td>
        </tr>

    );
};

export default HourlyWeather;