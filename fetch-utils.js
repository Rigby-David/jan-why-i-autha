// Enter Supabase Information
const SUPABASE_URL = 'https://wyotgiskxqtlavlkrzle.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// get journal entries takes in id

// export async function getJournalEntriesById(id) {}
// create

export async function createJournalEntry(entry) {
    const response = await client.from('january_journal').insert([{ journal_entry: entry }]);
    return response;
}

//read
export async function getJournalEntries() {
    const response = await client.from('january_journal').select('*');
    return response;
}

// update

// delete

//Auth

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email: email, password: password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {
    if (!getUser()) {
        location.replace('../');
    }
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../');
}
