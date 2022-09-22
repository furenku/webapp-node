const moment = require("moment")

const routeController = {
    home: function( req, res ){
        res.send("Hello world")
    },
    time: function(req, res){
        const texto = `La hora es: ${ moment().format('h:mm:ss a') }`  
        res.send( texto )
    },
    date: function(req, res){
        const texto = `La fecha es: ${ moment().format('DD/MM/YYYY') }`  
        res.send( texto )
    }
}

module.exports = routeController