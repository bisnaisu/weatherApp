const request = require('request')
const geocode = (address, callback)=>{
    const fix = encodeURI(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${fix}.json?access_token=pk.eyJ1IjoibG9sZ3V5cyIsImEiOiJja25sODhzejQwZnNkMnVudjM3ODNqMWVnIn0.cysoHWCCHIW0YbEWpC7CIw`
    request({url : url, json : true}, (error,response)=>{
        if(error){
            callback('Unbale connect to location servcie', null)
        }else if(response.body.features.length === 0){
            callback('Unable to find location',null)
        }else{
            callback(null,{
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode