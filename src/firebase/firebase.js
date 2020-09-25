import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC6xB0dSv3q-MavJ9hkXwXsvNlWz1zYE0c",
    authDomain: "practice-react-ecommerce.firebaseapp.com",
    databaseURL: "https://practice-react-ecommerce.firebaseio.com",
    projectId: "practice-react-ecommerce",
    storageBucket: "practice-react-ecommerce.appspot.com",
    messagingSenderId: "380491149850",
    appId: "1:380491149850:web:162f818557a1396ebd97a3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export default firebase;
