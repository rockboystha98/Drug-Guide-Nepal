import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // You could save professional role details to Firestore here if needed.
    return result.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export const logoutUser = async () => {
  await signOut(auth);
}

export type { FirebaseUser };
export { onAuthStateChanged };
