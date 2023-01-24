// use checkAuth function to redirect is user not authenticated

import { checkAuth, logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');

// add event listener to the logout button and call logout
logoutBtn.addEventListener('click', async () => {
    await logout();
});

checkAuth();
