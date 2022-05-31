import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmvl0CDEUt7Nk6XQgyde0V6IfBOijc03g",

  authDomain: "react-clienthub.firebaseapp.com",

  projectId: "react-clienthub",

  storageBucket: "react-clienthub.appspot.com",

  messagingSenderId: "1074336492337",

  appId: "1:1074336492337:web:8f90c13fe7f0edebb01e10",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
