import { checkAuth, createPost, getUser, logout } from '../fetch-utils.js';

const bulletinBoardForm = document.querySelector('.bulletin-board-form');
const bulletinBoardNavButton = document.getElementById('bulletin-board-nav');
const logoutEl = document.getElementById('logout');
const journalEl = document.getElementById('journal-nav');
const greetingEl = document.querySelector('.greeting');

window.addEventListener('load', async () => {
    const user = await getUser();
    greetingEl.textContent = `Greetings ${user.email}! Let's`;
});

journalEl.addEventListener('click', () => {
    window.location.replace('../other-page');
});

logoutEl.addEventListener('click', async () => {
    await logout();
});

bulletinBoardNavButton.addEventListener('click', () => {
    window.location.replace('../board');
});

bulletinBoardForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    //get form data
    const formData = new FormData(bulletinBoardForm);
    //pass data into createPost
    await createPost(formData.get('title'), formData.get('description'), formData.get('contact'));
    window.location.replace('../board');
});

checkAuth();
//checkAuth if not logged in
