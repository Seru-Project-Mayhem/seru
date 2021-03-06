import Home from "./views/Home.js";
import {
    freeToGameGet,
    getAllGames
} from "./FetchQueries.js";
import Login from "./views/Login.js";
import LoginEvent, {LogoutEvent} from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import FreeToPlayView from "./views/FreeToPlay.js";
import Review, {reviewEvent} from "./views/Review.js";
import Browse, {initBrowse} from "./views/Browse.js";
import {User, userEvent} from "./views/User.js";

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
            title: "Free to Play",
            viewEvent: freeToGameGet
        },
        '/review': {
            returnView: Review,
            state: {
                users: "/api/users/authUser"
            },
            uri: '/review',
            title: "Review Page",
            viewEvent: reviewEvent
        },
        '/browse': {
            returnView: Browse,
            state: {
                games: "/api/games",
            },
            uri: '/browse',
            title: "Browse",
            viewEvent: initBrowse
        },
        '/user': {
            returnView: User,
            state: {},
            uri: '/user',
            title: "Profile",
            viewEvent: userEvent
        },

        '/logout': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: LogoutEvent
        },

    };

    return routes[URI];
}

