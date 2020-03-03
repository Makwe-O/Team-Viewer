import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  // add firbase config here
};
firebase.initializeApp(config);
export const db = firebase.firestore().collection("members");
