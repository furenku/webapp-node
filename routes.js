const routeController = require("./controllers/routeController")

const routes = function( app ) {

    app.get("/", routeController.home )

    app.get("/time", routeController.time )

    app.get("/date", routeController.date )

}


module.exports = routes