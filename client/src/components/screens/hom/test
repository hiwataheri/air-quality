import React, {useState} from 'react'
import "./home.css"
import SearchIcon from '@mui/icons-material/Search';

function Home() {

//define STATE variable in react
//city is noun and setCity is Metoad ,value for city
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(
    {temp:'',
      condition: '',
      icon: '',
      is_day:'',
      lat:'',
      lan:'',
      city: '', airQuality:{} });



  function clickButton() {
    const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes`
    fetch(url)
      .then((res) => res.json())
      .then(result => {
        console.log(result)
        setStatus({
          temp: result.current.temp_c,
          condition: result.current.condition.text,
          icon: result.current.condition.icon,
          is_day:result.current.condition.is_day,
          lat: result.location.lat,
          lon: result.location.lon,
          airQuality: result.current.air_quality,
          city:city

        })
        //getAirquality(); dont need this
      }
      )
      .catch(err => console.log(err))

  }

  const changeHandler = (event) => { setCity(event.target.value) }
  return (
    <div className="api">
      {/* <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} /> */}
      {/* <button className="btn btn-primary"Get Geolocation onClick={clickButton}>Search</button> */}

      <div className="search-boxx">
        <input
          className="input_text"
          placeholder="City Name"
          style={{
            background: "none",
            border: "none",
            outline: "none",
            color: "white",
            padding: "0px",
            float: "left",
            lineHeight: "40px",
            width: "75px",
          }}
          onChange={changeHandler}
        />
        <span className="a-search">
          <SearchIcon Get Geolocation onClick={clickButton}></SearchIcon>
        </span>
      </div>

      <div className="status">
        {/* whenever an element should be displayed based on a condition use a turnari and in true statement use a pair of parantheses that includes the element/s. In the false statement use a null */}
        {status.temp ? (
          <>
            <ul>
              <li>
                {status.city} (lat:{status.lat}, lon:{status.lon}){" "}
              </li>
              <li>{status.condition} </li>
              <li> {status.temp}</li>
              <li>{status.is_day}deg </li>
              <img src={status.icon} alt="icon" />
            </ul>
            Air Quality:
            <br />
            co: {status.airQuality.co}
            <br />
            gb-defra-index: {status.airQuality["gb-defra-index"]}
            <br />
            no2: {status.airQuality.no2}
            <br />
            no2: {status.airQuality.no2}
            <br />
            o3: {status.airQuality.o3}
            <br />
            pm2_5: {status.airQuality.pm2_5}
            <br />
            pm10: {status.airQuality.pm10}
            <br />
            so2: {status.airQuality.so2}
          </>
        ) : null}

        {status.airQuality["gb-defra-index"] === 1 ? (
          <div className="green"></div>
        ) : (
          <div className="red"></div>
        )}
{/*        

if zou want to add more colors use following approach

        {status.airQuality["gb-defra-index"] === 3 ? (
          <div className="orange"></div>
        ) : null}
        
        {status.airQuality["gb-defra-index"] === 1 ? (
          <div className="green"></div>
        ) : null} */}
      </div>
    </div>
  );


}

export default Home