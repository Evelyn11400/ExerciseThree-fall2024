import {
  faBolt,
  faCloud,
  faCloudRain,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherIcon({ weatherType }) {
  console.log(weatherType);
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Rain":
      return <FontAwesomeIcon icon={faCloudRain} />;
    case "Haze":
      return <FontAwesomeIcon icon={faSmog} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faCloud} />;
  }
}
