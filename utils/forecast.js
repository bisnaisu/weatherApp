const request = require('request')
const  forecast = (longitude, latitude , callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=5a665ba83713202dc81e65416e6ac36c&query=${latitude},${longitude}&units=m`
    request({url : url, json : true},(error,response)=>{
            if(error){
                callback('Unable connect to service', null)
            }else{
                const data = response.body.current
                callback(null,`The Temperature is ${data.temperature}'C with ${data.precip}% of rain`)
            }
    })
}

module.exports = forecast