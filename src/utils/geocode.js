const request = require('request')
// const geocode = (address, callback) => {

//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXVyYXRkZXZlY2kiLCJhIjoiY2tmdGNyMzJtMWs1aDJ4cGFyc2xzMnIyeSJ9.izCrPj7f-ojm9-u-JuBzyg`

//     request( {url: url, json: true}, (error, response) => {
//         if(error) {
//             callback('bağlantı yok', undefined)
//         }else if(response.body.features.length === 0) {
//             callback('lokasyon yok', undefined)
//         }else {
//             callback(undefined, {
//                 altitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     } )

// }

const geocode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXVyYXRkZXZlY2kiLCJhIjoiY2tmdGNyMzJtMWs1aDJ4cGFyc2xzMnIyeSJ9.izCrPj7f-ojm9-u-JuBzyg`

    request( {url: url, json: true}, (error, response) => {
        if(error) {
            callback('bağlantı yok', undefined)
        }else if(response.body.features.length === 0) {
            callback('lokasyon yok', undefined)
        }else {
            callback(undefined, {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
        })
        }
    } )

}


module.exports = geocode