const express = require("express")


const moment = require("moment")

const routes = require("./routes")

const api = require("./routes/api")

const app = express()

const port = 3000


app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

routes( app )

app.use( "/api", api )



app.listen( port, function(){
    
    console.log( `Aplicación escuchando en puerto ${port}` )
    console.log( moment().format('h:mm:ss a') )

})
