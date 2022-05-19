import type { FirebaseApp } from 'firebase/app'

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, sendSignInLinkToEmail, setPersistence } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


if (
    !import.meta.env.VITE_FIREBASE_API_KEY ||
    !import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    !import.meta.env.VITE_FIREBASE_PROJECT_ID
) {
    throw new Error('Firebase client environment variables not set!')
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};



// Initialize Firebase
export const getClientApp = () => {
    if (getApps().length) return getApp();

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app);
    setPersistence(auth, inMemoryPersistence)

    return app;
}

export const sendMagicLink = (email: string, redirectUrl: string) => {
    const auth = getAuth(getClientApp())
    const actionCodeSettings = {
        url: redirectUrl,
        handleCodeInApp: true,
    }

    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
}