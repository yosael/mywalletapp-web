import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    /*
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    */
    apiKey: 'AIzaSyCK9o9WAaax9IJfL1GtyUNdefTqjy8UPZA',
    authDomain: 'mywallet-app-12c03.firebaseapp.com',
    projectId: 'mywallet-app-12c03',
    appId: '1:135616418526:web:630a6103a3c9211b6ce84f'
});

export const auth = getAuth();
export default app;