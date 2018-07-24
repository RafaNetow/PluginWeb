import * as firebase from 'firebase';
require('dotenv').config()

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATANASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.TORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
export {
    auth,
    db
};