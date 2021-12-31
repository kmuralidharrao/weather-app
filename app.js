const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    console.log("please provide the address");
} else {
    geocode(address,(error, data) =>{
        if (error) {
            return console.log(error)
        } 
        //console.log(data);
        forecast(data, (error, forecastData)=>{
            if (error) {
                return console.log(error)
            } 
            console.log(data.location);
            console.log(forecastData);
        })
    })
}
