// Enter Supabase Information
const SUPABASE_URL = 'https://wyotgiskxqtlavlkrzle.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// create

export async function createPost(title, description, contact) {
    await client
        .from('posts')
        .insert([{ title: title, description: description, contact: contact }]);
}

export async function createJournalEntry(entry, id) {
    const response = await client
        .from('january_journal')
        .insert([{ journal_entry: entry, user_id: id }]);
    return response;
}

//read
export async function getPosts() {
    const { data } = await client.from('posts').select('*');
    return data;
}

export async function getPostById(id) {
    const { data } = await client.from('posts').select('*').match({ id: id }).single();
    return data;
}

export async function getJournalEntries(id) {
    const response = await client.from('january_journal').select('*').eq('user_id', id);
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
        location.replace('./board');
    }
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../');
}
