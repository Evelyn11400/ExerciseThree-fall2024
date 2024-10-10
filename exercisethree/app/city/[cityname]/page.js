import WeatherCard from "../../components/weatherCard";
import styles from "../../page.module.css";
import Header from "../../components/Header";

export default async function name({ params }) {
  const city = params.cityname;
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;

  const request = await fetch(queryURL);
  const weatherData = await request.json();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Weather App</h1>
        <WeatherCard
          className={styles.main}
          city={city}
          currentTemp={weatherData.main.temp}
          highTemp={weatherData.main.temp_max}
          lowTemp={weatherData.main.temp_min}
          weatherType={weatherData.weather[0].main}
          cloudiness={weatherData.clouds.all}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
        />
      </main>
    </div>
  );
}
