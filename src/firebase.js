import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsI-p7iYbYQyw0fdAshW0zNht5t96dh9o",
    authDomain: "react-disney-plus-clone-de76a.firebaseapp.com",
    projectId: "react-disney-plus-clone-de76a",
    storageBucket: "react-disney-plus-clone-de76a.appspot.com",
    messagingSenderId: "705402133752",
    appId: "1:705402133752:web:6a65fada12b29189fcef0d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
