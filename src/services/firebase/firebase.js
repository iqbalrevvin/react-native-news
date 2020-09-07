import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDb9ydYBjO4AqM6X3NpIYJd675n5dwuthI",
    authDomain: "iqbal-news.firebaseapp.com",
    databaseURL: "https://iqbal-news.firebaseio.com",
    projectId: "iqbal-news",
    storageBucket: "iqbal-news.appspot.com",
    messagingSenderId: "874042464597",
    appId: "1:874042464597:web:720cbb67ce3c43ca74f7dc"
}
firebase.initializeApp(firebaseConfig);

export default firebase;