const moment = require("moment")


const routeController = {
    home: function( req, res ){
        res.send("Home")
    },
    time: function( req, res ){
        const text = `La hora es: ${ moment().format('h:mm:ss a') }`  
        res.send( text )
    },
    date: function( req, res ){
        const text = `La fecha es: ${ moment().format('DD/MM/YYYY') }`  
        res.send( text )
    },
    getHello: function( req, res ) {        

        let name = "World"

        if( req.query.name ) {

            name = req.query.name

        }

        if( req.body.name ) {

            name = req.body.name

        }

        const text = "Hello " + name

        res.send(text)

    },

    postHello: function( req, res ) {        

        let name = "World"

        if( req.body.name ) {

            name = req.body.name

        }

        const text = "Hello " + name

        res.send(text)

    }

}

module.exports = routeController