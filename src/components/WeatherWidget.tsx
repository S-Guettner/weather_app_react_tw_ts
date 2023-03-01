import {useState, useEffect} from 'react'

const APIKEY:String = "af64e118fd78251cdaee7869b1decfe1"


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
        })
    },[city])

    return ( 
        <main className='w-1/2 mx-auto border-2'>
            <section className='m-4 flex justify-between p-2'>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("düsseldorf")}>Düsseldorf</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("köln")}>Köln</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("berlin")}>Berlin</button>
                <button className='shadow-lg hover:bg-neutral-300 hover:text-white' onClick={() => setCity("hamburg")}>Hamburg</button>
            </section>
            <section className='m-4'>
                <div className='flex items-center shadow-lg mb-4 p-2'>
                    <p>{weatherData.weatherCondition}</p>
                    <img className='w-[50px] p-2' src={`http://openweathermap.org/img/wn/${weatherData.iconId}@2x.png`} alt="" />
                </div>
                <p className='shadow-sm mb-4 p-2'>Current temp: {(Number(weatherData.temp) - (273.15)).toFixed(0)}  °C</p>
                <p className='shadow-sm p-2'>Wind Speed: {(Number(weatherData.windSpeed) * (1.6934)).toFixed(2)} km/h</p>
            </section>
        </main>
     );
}
 
export default WeatherWidget;