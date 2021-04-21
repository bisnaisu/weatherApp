const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

var loc = ''
var inputData = process.argv
for(let i = 2 ; i < inputData.length ; i ++){
    loc += inputData[i]

    if(i != inputData.length - 1)
        loc += ' '
}

if(loc === ''){
    console.log(chalk.red.inverse('Please  enter location'));
}else{

    geocode(`${loc}`,(error,response)=>{
        
        if(error){
            console.log(error)
        }

        forecast(response.longitude,response.latitude,(error,foreastData)=>{
            if(error){
                console.log(error)
            }
            console.log(chalk.green.inverse(response.location))
            console.log(chalk.cyan.inverse(foreastData));
        })
        
    })
}
