import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <h1>Weather Forecast</h1>
              <br />
              <form className="Search mb-3" id="search-form">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input type="submit" value="Search" className="btn w-100" />
                  </div>
                </div>
              </form>
              <h2 id="city">Atlanta</h2>
              <ul className="timeamp-current-condition">
                <div>
                  <li>
                    <span id="date">Thursday</span>
                    <br />
                    <span id="timestamp">10:00am </span>
                  </li>
                  <li
                    id="description"
                    className="current-temperature-condition"
                  >
                    Clear
                  </li>
                </div>
              </ul>
            </div>

            <div className="row current-weather">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={"../images/01d.png"}
                    alt="Weather Icon"
                    className="float-left weather-icon"
                    id="icon"
                  />
                  <div className="float-left">
                    <strong id="temperature">75</strong>
                    <span className="units">°F </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul className="current-conditions">
                <li>
                  Humidity: <span id="humidity">10</span>%
                </li>
                <li>
                  Wind: <span id="wind">2</span> mph
                </li>
                <li>
                  Feels Like: <span id="feels-like">80</span>°F
                </li>
              </ul>
            </div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/krhuber/weather-app-final-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
          by Kathryn Huber
        </small>
        <br />
        <small>
          Weather icons by
          <a
            href="https://www.flaticon.com/packs/weather-765?word=weather%20forecast"
            className="href"
          >
            Kanamaizu - Flaticon
          </a>
        </small>
      </div>
    </div>
  );
}
