import { signupUser, getUser, redirectIfLoggedIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const email = formData.get('email');
    const password = formData.get('password');

    await signupUser(email, password);
    // Redirect to /other-page on successful auth
    redirect();
});

async function redirect() {
    // if auth
    const user = await getUser();
    if (user) {
        redirectIfLoggedIn();
    }
}

redirect();
// Redirect to /other-page when page loads if user is authenticated
