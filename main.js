
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '64eb767855msh849b5edc51f9c7dp104d2cjsnd8bbba391d06',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather=(city)=>{
    cityName.innerHTML=city
async function myFunction() {
   

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
        const result = await response.json();
        console.log(result);

        temp.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees



    } catch (error) {
        console.error(error);
    }
}
myFunction();
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather (city.value)
    })

    getWeather("Sonipat")
