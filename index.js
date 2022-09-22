const express = require("express")

const moment = require("moment")


const app = express()

const routes = require("./routes")


routes( app )


app.listen( 3000, function(){
    
    console.log( "Aplicación escuchando en puerto 3000" )
    console.log( moment().format('h:mm:ss a') )

})
