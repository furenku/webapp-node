const routeController = require("./controllers/routeController")

const routes = function( app ) {

    app.get("/", routeController.home )

    app.get("/time", routeController.time )

    app.get("/date", routeController.date )

    app.get("/hello", routeController.getHello )
    
    app.post("/hello", routeController.postHello )

}


module.exports = routes