import { getPosts } from '../fetch-utils.js';

import { renderPost } from '../render-utils.js';

const bulletinBoardEl = document.querySelector('.bulletin-board-container');

let posts = [];

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

//displayPosts loops through posts and calls renderPosts
