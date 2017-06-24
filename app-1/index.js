/*
 * Grab `path` helper library
 */
const path = require('path')

/*
 * Get a server and router instance from leverage
 */
const { server, router } = require('leverage-js')

/*
 * Set the port to listen on, defaulting to 8080
 */
const port = process.env.PORT || 8080

/*
 * Get an absolute path to the routes directory
 */
const routes = path.resolve(__dirname, 'routes')

/*
 * Tell the server to listen on our port
 */
server.listen(port)

/*
 * Have leverage's router manage routing for the server
 */
router.connect(server)

/*
 * Tell the router to load our routes at the given path
 */
router.add(routes)

/*
 * Got here, so things must be working!
 */
console.log(`Server listening on port [${port}]`);
