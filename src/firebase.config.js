import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB3UjvhhRXhMyjNbbM93kfAnLhBoeq6SFE",
    authDomain: "restaurantapp-6983d.firebaseapp.com",
    databaseURL: "https://restaurantapp-6983d-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-6983d",
    storageBucket: "restaurantapp-6983d.appspot.com",
    messagingSenderId: "553437155904",
    appId: "1:553437155904:web:3ecd256f361e7f874545a5"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };