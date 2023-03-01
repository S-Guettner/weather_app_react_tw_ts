import {useState, useEffect} from 'react'

const APIKEY:String = "af64e118fd78251cdaee7869b1decfe1"
/* http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */
/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */

const WeatherWidget = () => {
    
    const [weatherData,setWeatherData] = useState({
        temp:"",
        windSpeed:"",
        weatherCondition:"",
        iconId:""
    })
    const [city,setCity] = useState("berlin")

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            setWeatherData({
                temp:(data.main.temp),
                windSpeed:(data.wind.speed),
                weatherCondition:(data.weather[0].description),
                iconId:(data.weather[0].icon)
            })
            console.log(data.weather[0].icon)
            /* console.log(data.weather[0].description) */
        })
    },[city])

    /* console.log(weatherData) */

http://openweathermap.org/img/wn/10d@2x.png


    return ( 
        <main className='w-1/2 mx-auto border-2'>
            <section className='m-4 flex justify-between border-2 p-2'>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("düsseldorf")}>Düsseldorf</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("köln")}>Köln</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("berlin")}>Berlin</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("hamburg")}>Hamburg</button>
            </section>
            <section className='m-4'>
                <div className='flex items-center'>
                    <p>{weatherData.weatherCondition}</p>
                    <img className='w-[50px]' src={`http://openweathermap.org/img/wn/${weatherData.iconId}@2x.png`} alt="" />
                </div>
                <p>Current: {((weatherData.temp) - (273.15)).toFixed(0)}  °C</p>
                <p>Wind Speed: {((weatherData.windSpeed) * (1.6934)).toFixed(2)} km/h</p>
            </section>
        </main>
     );
}
 
export default WeatherWidget;