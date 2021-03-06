const request = require('postman-request');
const forecast = ({latitude, longitude}, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=76ae79214fa480455fe8415963676fb4&query="+latitude+","+longitude;
    request({url, json: true}, (error, response)=>{
        //const data = JSON.parse(response.body);
        if(error){
            //console.log("Unable to connect to weather service!");
            callback("Unable to connect to weather service!");
        } else if(response.body.error) {
            console.log("unable to find location")
            callback("unable to find location")
        } else {
            const data = response.body;
            //console.log(data.current.weather_descriptions[0],". It is currently ",data.current.temperature," degrees out. It feels like ",data.current.feelslike," degrees out.");
            const finalData = data.current.weather_descriptions[0]+". It is currently "+data.current.temperature+" degrees out. It feels like "+data.current.feelslike+" degrees out."
            callback(undefined, finalData)
        }
    });
}

 module.exports = forecast;