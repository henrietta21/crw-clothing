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

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)
        }

        return userRef;
    }
}
 
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
