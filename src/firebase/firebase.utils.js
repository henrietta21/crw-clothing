import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAqgl8Q4CuT6fRwo3Tyk9EB2v5dRFAJe-k",
    authDomain: "crw-clothing-e4255.firebaseapp.com",
    projectId: "crw-clothing-e4255",
    storageBucket: "crw-clothing-e4255.appspot.com",
    messagingSenderId: "326033655250",
    appId: "1:326033655250:web:c54f30e6f8877dad66340b",
    measurementId: "G-CWX9F34Y5R"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
