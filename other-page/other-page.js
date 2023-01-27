// use checkAuth function to redirect is user not authenticated

import {
    getUser,
    logout,
    createJournalEntry,
    getJournalEntries,
    checkAuth,
} from '../fetch-utils.js';
import { renderJournalEntires } from '../render-utils.js';

const logoutBtn = document.getElementById('logout');
const journalForm = document.querySelector('.journal-form');
const textInputEl = document.querySelector('.text-input');
const journalContainerEl = document.querySelector('.journal-container');
const bulletinBoardButtonEl = document.getElementById('bulletin-board-nav');
const greetingEl = document.querySelector('.greeting');

window.addEventListener('load', async () => {
    const user = await getUser();
    greetingEl.textContent = `Greetings ${user.email}! Welcome to your`;
});

let journalEntriesArray = [];

// add event listener to the logout button and call logout
logoutBtn.addEventListener('click', async () => {
    await logout();
});

bulletinBoardButtonEl.addEventListener('click', () => {
    window.location.replace('../board');
});

//submit form event listener
journalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(journalForm);
    const entryData = formData.get('text');

    const id = await getUser().id;

    textInputEl.value = '';
    await createJournalEntry(entryData, id);

    //put journal entries into state array
    const fetchJournalEntires = await getJournalEntries(id);
    journalEntriesArray = fetchJournalEntires.data;

    //call display/render journal entries
    displayJournalEntries();
});

function displayJournalEntries() {
    //loop through entries array
    journalContainerEl.textContent = '';
    journalEntriesArray.forEach((entry) => {
        const newJournalEl = renderJournalEntires(entry);
        journalContainerEl.append(newJournalEl);
    });
    console.log('journalEntriesArray', journalEntriesArray);
}

checkAuth();
