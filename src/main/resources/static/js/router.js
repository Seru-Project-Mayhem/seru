import Home from "./views/Home.js";
import {
    freeToGameGet,
    getAllGames
} from "./FetchQueries.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import FreeToPlayView from "./views/FreeToPlay.js";
import Review, {reviewEvent} from "./views/Review.js";
import Browse, {cheapSharkBrowseGet} from "./views/Browse.js";

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
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: "Register",
            viewEvent: RegisterEvent
        },
        '/freetoplay': {
            returnView: FreeToPlayView,
            state: {},
            uri: '/freetoplay',
            viewEvent: freeToGameGet
        },
        '/review': {
            returnView: Review,
            state: {},
            uri: '/Review',
            viewEvent: reviewEvent
        },
        '/browse': {
            returnView: Browse,
            state: {},
            uri: '/browse',
            viewEvent: cheapSharkBrowseGet
        }



    };

    return routes[URI];
}

