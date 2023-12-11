import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByuX-mnpHrdyJ93U25ViuO0IrEcku9z3I",
  authDomain: "homeyum-1f00a.firebaseapp.com",
  projectId: "homeyum-1f00a",
  storageBucket: "homeyum-1f00a.appspot.com",
  messagingSenderId: "14881531648",
  appId: "1:14881531648:web:cf89544174e45bd14e75e5",
  measurementId: "G-WP0Y7XPR3T"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore(app);
const auth = firebase.auth(app);

export { firebase };
export { firestore };
export { auth };