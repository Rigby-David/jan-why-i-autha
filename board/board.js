import { checkAuth, getPosts, getUser, logout } from '../fetch-utils.js';

import { renderPost } from '../render-utils.js';

const bulletinBoardEl = document.querySelector('.bulletin-board-container');
const bulletinBoardButtonEl = document.getElementById('bulletin-board-nav');
const logoutEl = document.getElementById('logout');
const journalEl = document.getElementById('journal-nav');
const greetingEl = document.querySelector('.greeting');

window.addEventListener('load', async () => {
    const user = await getUser();
    greetingEl.textContent = `Greetings ${user.email}! Welcome to the`;
});

journalEl.addEventListener('click', () => {
    window.location.replace('../other-page');
});

logoutEl.addEventListener('click', async () => {
    await logout();
});

let posts = [];

bulletinBoardButtonEl.addEventListener('click', () => {
    window.location.replace('../create-post');
});

window.addEventListener('load', async () => {
    //get posts onLoad
    const postData = await getPosts();
    posts = postData;

    displayPosts();
});

function displayPosts() {
    bulletinBoardEl.textContent = '';

    posts.forEach((post) => {
        const postEl = renderPost(post);
        bulletinBoardEl.append(postEl);
    });
}

checkAuth();

//displayPosts loops through posts and calls renderPosts
