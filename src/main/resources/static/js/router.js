import Home from "./views/Home.js";
import {
    cheapSharkTenToTwentyGet,
    cheapSharkTwentyToThirtyGet,
    cheapSharkZeroToTenGet,
    freeToGameGet,
    getAllGames
} from "./FetchQueries.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import FreeToPlayView from "./views/FreeToPlay.js";
import ZeroToTenView from "./views/ZeroToTen.js";
import TenToTwentyView from "./views/TenToTwenty.js";
import TwentyToThirtyView from "./views/TwentyToThirty.js";


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
        '/0to10' : {
            returnView: ZeroToTenView,
            state: {},
            uri: '/0to10',
            viewEvent: cheapSharkZeroToTenGet
        },
        '/10to20' : {
            returnView: TenToTwentyView,
            state: {},
            uri: '/10to20',
            viewEvent: cheapSharkTenToTwentyGet
        },
        '/20to30' : {
            returnView: TwentyToThirtyView,
            state: {},
            uri: '/20to30',
            viewEvent: cheapSharkTwentyToThirtyGet
        }
    };

    return routes[URI];
}

