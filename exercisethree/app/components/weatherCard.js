import styles from "../page.module.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({
  city,
  currentTemp,
  highTemp,
  lowTemp,
  cloudiness,
  humidity,
  windSpeed,
  weatherType,
}) {
  const cloudinessPercentage = 99 - cloudiness;
  const background = `linear-gradient(90deg,white,${cloudinessPercentage}%,grey)`;
  return (
    <div className={styles.weatherCardWrapper} style={{ background }}>
      <div className={styles.weatherCardLeftColomn}>
        <WeatherIcon weatherType={weatherType} />
        <p>{currentTemp}°F</p>
      </div>
      <div className={styles.weatherCardRightColomn}>
        <h2>{city}</h2>
        <h3>{weatherType}</h3>
        <p>High Temperature:{highTemp}°F</p>
        <p>Low Temperature:{lowTemp}°F</p>

        <p>Cloudiness:{cloudiness}%</p>
        <p>Humidity:{humidity}%</p>
        <p>WindSpeed:{windSpeed}mph</p>
      </div>
    </div>
  );
}
