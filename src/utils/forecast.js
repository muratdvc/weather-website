const request = require('request')


const forecast = ((latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=4979f07b1cf9e2590a77ba1d94c85d89&query=${latitude},${longitude}`

    request( {url: url, json: true}, (error, response) => {

        if(error) {
            callback('unable to connect', undefined)
        }else if (typeof(latitude) === 'string' || typeof(longitude) === 'string') {
            callback('coordinates are somehow wrong', undefined)
        }else {
            const data = response.body.current
            const location = response.body.location
            callback(undefined,{
                forecast: `${location.region}/${location.country}: ${data.weather_descriptions[0]}, It is currently ${data.temperature} degrees . It feels like ${data.feelslike} degrees out.`,
                location: `${location.region}/${location.country}`
            })
        }

    })

})

module.exports = forecast   

