const request = require('request')



const forecast=(latitude,longitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=9394f6c166237f4ee393afe5d46025da&query='+latitude+','+longitude+'&units=f'

request({ url: url, json: true }, (error, response) => {

if(error){
    callback('unable to connect to weather service',undefined)
}
else if(response.body.error){
    callback('unable to find location',undefined)
}

else{
  callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
}


})
}

module.exports=forecast