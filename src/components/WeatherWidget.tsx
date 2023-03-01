import {useState, useEffect} from 'react'

const APIKEY:string = "af64e118fd78251cdaee7869b1decfe1"
/* http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */
/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */

const WeatherWidget = () => {
    
    const [weatherData,setWeatherData] = useState({})
    const [city,setCity] = useState("berlin")
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)
        })
    },[city])


    return ( 
        <main>
            <h1>Weatherwidget</h1>
            <button onClick={() => setCity("düsseldorf")}>Düsseldorf</button>
            <button onClick={() => setCity("köln")}>Köln</button>
            <button onClick={() => setCity("berlin")}>Berlin</button>
            <button onClick={() => setCity("hamburg")}>Hamburg</button>
        </main>
     );
}
 
export default WeatherWidget;