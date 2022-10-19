const moment = require("moment")

const routeController = {
    home: function( req, res ){
        res.send("Hello world")
    },
    time: function(req, res){
        const text = `La hora es: ${ moment().format('h:mm:ss a') }`  
        res.send( text )
    },
    date: function(req, res){
        const text = `La fecha es: ${ moment().format('DD/MM/YYYY') }`  
        res.send( text )
    }
}

module.exports = routeController