// use checkAuth function to redirect is user not authenticated

import { redirectIfLoggedIn } from '../fetch-utils.js';

// add event listener to the logout button and call logout
redirectIfLoggedIn();
