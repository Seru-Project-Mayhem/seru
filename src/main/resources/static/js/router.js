import Home from "./views/Home.js";
import {getAllGames} from "./FetchQueries.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */

export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: getAllGames,
        }
    };

    return routes[URI];
}

