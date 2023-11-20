import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useCallback } from 'react';
import { useState } from 'react';

const WeatherBox = () => {

  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleCityChange = useCallback(city => {
    setError('');
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2b6cbef2642e3b913648d8b7e5344bd&units=metric`)
      .then(res => res.json())
      .then(data => {
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main
        };
        setWeather(weatherData);
        setPending(false);
      });
  }, []);

  return (
    <section>
      <PickCity handleCityChange={handleCityChange} />
      {(weather && !pending && !error) && <WeatherSummary {...weather} />}
      {pending && <Loader />}
      {error && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;