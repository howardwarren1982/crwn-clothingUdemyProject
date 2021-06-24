import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMkpaDOiZDvSDLi9qOB8M2eylAmfxaYf4",
  authDomain: "crwn-db-56da8.firebaseapp.com",
  projectId: "crwn-db-56da8",
  storageBucket: "crwn-db-56da8.appspot.com",
  messagingSenderId: "146519584752",
  appId: "1:146519584752:web:f4c81634ae8fd77199b735",
  measurementId: "G-N8FLHQRS0P",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
