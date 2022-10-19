const express = require("express")

const moment = require("moment")

const routes = require("./routes")

const app = express()

const port = 3000

routes( app )


app.listen( port, function(){
    
    console.log( `Aplicación escuchando en puerto ${port}` )
    console.log( moment().format('h:mm:ss a') )

})
