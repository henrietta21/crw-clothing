import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
// import firebase from 'firebase';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAqgl8Q4CuT6fRwo3Tyk9EB2v5dRFAJe-k",
    authDomain: "crw-clothing-e4255.firebaseapp.com",
    projectId: "crw-clothing-e4255",
    storageBucket: "crw-clothing-e4255.appspot.com",
    messagingSenderId: "326033655250",
    appId: "1:326033655250:web:c54f30e6f8877dad66340b",
    measurementId: "G-CWX9F34Y5R"
}

 
const firebaseApp = initializeApp(firebaseConfig);


// export const firestore = firebase.firestore()

const googleProvider = new  GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const database = getFirestore()

export const createUserProfileDocument = async(userAuth, additionalInformation) =>{
    if (!userAuth) return;

    const userRef= doc(database, 'users', userAuth.uid);
    console.log(userRef);

    const userSnapshot = await getDoc(userRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch(error){
            console.log("error creating the user", error.message)
        }
    }
    return userRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
