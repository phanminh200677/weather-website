const request = require('request')

const forecast = (latitude, longitude, callback) => {    
    const url = 'http://api.weatherstack.com/current?access_key=8b9d23a687df257495d3b0d8b8dffcf9&query=' + latitude + ',' + longitude + '&units=m'    
    
    request({ url, json: true }, (error, { body }) =>{
        if (error){
            callback('Forecast Service: Unable to connect to weather service!', undefined)            
        }else if (body.error)
            callback('Forecast Service: Unable to find location.', undefined)
        else{            
            callback (undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degree out. It feels like " + body.current.feelslike + " degree out. The humidity is " + body.current.humidity + "% period.")            
        }
    })    
}

module.exports = forecast