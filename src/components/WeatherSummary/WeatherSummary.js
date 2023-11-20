import styles from './WeatherSummary.module.scss';

const WeatherSummary = (state) => {

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={`${state.description}`}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${state.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{state.city}</h2>
        <p>
          <strong>Temp:</strong> {state.temp}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;