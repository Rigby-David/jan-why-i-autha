// use checkAuth function to redirect is user not authenticated

import { checkAuth, logout, createJournalEntry, getJournalEntries } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');
const journalForm = document.querySelector('.journal-form');
const textInputEl = document.querySelector('.text-input');

let journalEntriesArray = [];

// add event listener to the logout button and call logout
logoutBtn.addEventListener('click', async () => {
    await logout();
});

//submit form event listener
journalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    textInputEl.value = '';

    const formData = new FormData(journalForm);
    const entryData = formData.get('text');

    const whatever = await createJournalEntry(entryData);

    journalEntriesArray = whatever;
});

//put journal entries into state array
//call display/render journal entries
//loop through entries array

checkAuth();
