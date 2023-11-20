import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';
import { useState } from 'react';

const WeatherBox = () => {

  const [state, setState] = useState('');

  const handleCityChange = useCallback(city => {
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2b6cbef2642e3b913648d8b7e5344bd&units=metric`)
      .then(res => res.json())
      .then(data => {
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main
        };
        setState(weatherData);
      });
  }, []);


  if (!state) return (
    <PickCity handleCityChange={handleCityChange} />
  )
  else
    return (
      <section>
        <PickCity handleCityChange={handleCityChange} />
        <WeatherSummary city={state.city} temp={state.temp} icon={state.icon} description={state.description} />
        <Loader />
      </section>
    )
};

export default WeatherBox;