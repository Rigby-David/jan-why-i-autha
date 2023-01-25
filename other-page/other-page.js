// use checkAuth function to redirect is user not authenticated

import { getUser, logout, createJournalEntry, getJournalEntries } from '../fetch-utils.js';

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

    const formData = new FormData(journalForm);
    const entryData = formData.get('text');

    const id = await getUser().id;

    textInputEl.value = '';
    await createJournalEntry(entryData, id);

    const fetchJournalEntires = await getJournalEntries(id);
    journalEntriesArray = fetchJournalEntires.data;
    console.log('journalEntriesArray', journalEntriesArray);
});

//put journal entries into state array
//call display/render journal entries
//loop through entries array
