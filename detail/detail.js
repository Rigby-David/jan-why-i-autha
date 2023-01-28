import { getPostById } from '../fetch-utils.js';
import { renderPost } from '../render-utils.js';

const postContainerEl = document.querySelector('.post-container');

//on load fetch id from URL params
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const params = await getPostById(id);

    postContainerEl.append(renderPost(params));
});
