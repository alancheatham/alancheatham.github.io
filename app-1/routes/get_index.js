/*
 * Get the base route definition from leverage
 */
const { Route } = require('leverage-js')

/*
 * Create our own route extending the base definition
 */
class R extends Route {
    constructor () {
        super()

        /*
         * Set the route's name (key)
         */
        this.name = 'get_index'

        /*
         * Set the route's path
         */
        this.path = '/'

        /*
         * Set the route's http method
         */
        this.method = 'get'

        /*
         * Specify any dependencies (if needed)
         */
        this.dependencies = {}
    }

    /*
     * Callback on http requests
     */
    callback (req, res) {
        /*
         * Respond with a "Hello World"
         */
        res.send('Hello world')
    }
}

/*
 * Export our route as a plain object
 */
module.exports = new R()
