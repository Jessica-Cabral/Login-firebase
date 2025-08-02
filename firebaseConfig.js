// firebaseConfig.js
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVGzzFvI5p4bop57EIoeE8QfDt9KzBYX0",
  authDomain: "com.senac.tela_login_carol",
  projectId: "senac-app-login-carol",
  storageBucket: "senac-app-login-carol.firebasestorage.app",
  messagingSenderId: "740836643336",
  appId: "1:740836643336:android:2a1bd05b3e5fbd598277bd",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
