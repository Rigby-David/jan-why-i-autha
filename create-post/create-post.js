import { checkAuth, createPost } from '../fetch-utils.js';

const bulletinBoardForm = document.querySelector('.bulletin-board-form');
const bulletinBoardNavButton = document.getElementById('bulletin-board-nav');

bulletinBoardNavButton.addEventListener('click', () => {
    window.location.replace('../board');
});

bulletinBoardForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    //get form data
    const formData = new FormData(bulletinBoardForm);
    //pass data into createPost
    await createPost(formData.get('title'), formData.get('description'), formData.get('contact'));
});

checkAuth();
//checkAuth if not logged in
