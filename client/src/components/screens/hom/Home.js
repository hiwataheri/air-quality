import React, {useState} from 'react'
import "./home.css"
import SearchIcon from '@mui/icons-material/Search';
import { fontWeight } from '@mui/system';

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



  async function clickButton() {
    //request for air quality data
    const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes`
    let res = await fetch(url);
    let result = await res.json();
    console.log(result)
    /* await setStatus({
      temp: result.current.temp_c,
      condition: result.current.condition.text,
      icon: result.current.condition.icon,
      is_day:result.current.condition.is_day,
      lat: result.location.lat,
      lon: result.location.lon,
      airQuality: result.current.air_quality,
      city:city

    }); */

    
  //request for unsplash data
  const us_url = `https://api.unsplash.com/search/photos/?client_id=7N_4Qkb8_eoQjlZzIr_kbIEFlLcTgqd-xhNmTYKJhn0&query=${city}`;
  let us_res = await fetch(us_url);
  let jData = await us_res.json();
  //await setStatus({...status, img: jData.results[0].urls.regular})

  let finalResult = await Promise.all([result, jData, ]);
  setStatus({
    temp: finalResult[0].current.temp_c,
    condition: finalResult[0].current.condition.text,
    icon: finalResult[0].current.condition.icon,
    is_day: finalResult[0].current.condition.is_day,
    lat: finalResult[0].location.lat,
    lon: finalResult[0].location.lon,
    airQuality: finalResult[0].current.air_quality,
    city: city,
    img: finalResult[1].results[0].urls.regular
  });
  console.log(finalResult);

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

      <div className="status" style={{ fontWeight: "bold", color: "black" }}>
        {/* whenever an element should be displayed based on a condition use a turnari and in true statement use a pair of parantheses that includes the element/s. In the false statement use a null */}
        {status.temp ? (
          <div class="result-container">
            <ul>
              <li>
                {status.city} (lat:{status.lat}, lon:{status.lon}){" "}
              </li>
              <li>{status.condition} </li>
              <li> {status.temp}</li>
              <li>{status.is_day}deg </li>
              <img src={status.icon} alt="icon" />
            </ul>
            <div>
              <span style={{ fontWeight: "bold", color: "black" }}>
                {" "}
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
                {status.airQuality["gb-defra-index"] === 1 ? (
                  <div className="green"></div>
                ) : (
                  <div className="red"></div>
                )}
              </span>
            </div>

            <img src={status.img} alt="city" style={{ borderRadius: "5px" }} />
          </div>
        ) : null}

        {/*  {status.airQuality["gb-defra-index"] === 1 ? (
          <div className="yello"></div>
        ) : (
          <div className="yello"></div>
        )} */}
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