import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdPZyUjznohlI8i__mRg64RwGsJSt7wzE",
  authDomain: "authentication-app-8fdda.firebaseapp.com",
  projectId: "authentication-app-8fdda",
  storageBucket: "authentication-app-8fdda.appspot.com",
  messagingSenderId: "855978967841",
  appId: "1:855978967841:web:2a12c5513a5ad47dbdb460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;