// googleAuth.js
import { auth } from "./firebase"; // your firebase.js config
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Optionally store extra data to Firestore here
    console.log("Google user:", user.displayName, user.email);

    return user;
  } catch (error) {
    console.error("Google Sign-in error:", error.message);
  }
};
