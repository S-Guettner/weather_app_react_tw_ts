import {useState, useEffect} from 'react'

const APIKEY:String = "af64e118fd78251cdaee7869b1decfe1"


const WeatherWidget = () => {
    
    const [weatherData,setWeatherData] = useState({
        temp:"",
        windSpeed:"",
        weatherCondition:"",
        iconId:""
    })
    const [city,setCity] = useState("Berlin")

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
        <main className='w-1/3 mx-auto border-2 border-neutral-200 rounded-lg'>
            <section className='m-4 flex justify-between p-2'>
                <button className='p-2 rounded-lg shadow-md hover:bg-neutral-300 hover:text-white' onClick={() => setCity("Düsseldorf")}>Düsseldorf</button>
                <button className='p-2 rounded-lg shadow-md hover:bg-neutral-300 hover:text-white' onClick={() => setCity("Köln")}>Köln</button>
                <button className='p-2 rounded-lg shadow-md hover:bg-neutral-300 hover:text-white' onClick={() => setCity("Berlin")}>Berlin</button>
                <button className='p-2 rounded-lg shadow-md hover:bg-neutral-300 hover:text-white' onClick={() => setCity("Hamburg")}>Hamburg</button>
            </section>
            <section className='m-4'>
                <div className='flex justify-center items-center rounded-lg shadow-md mb-4 p-2'>
                    <p className='text-lg rounded-lg'>{weatherData.weatherCondition} in {city}</p>
                    <img className='w-[70px] p-2' src={`http://openweathermap.org/img/wn/${weatherData.iconId}@2x.png`} alt="" />
                </div>
                <p className='shadow-md mb-4 p-2 rounded-lg'>Current temp: {(Number(weatherData.temp) - (273.15)).toFixed(0)}  °C</p>
                <p className='shadow-md p-2 rounded-lg'>Wind Speed: {(Number(weatherData.windSpeed) * (1.6934)).toFixed(2)} km/h</p>
            </section>
        </main>
     );
};
 
export default WeatherWidget;