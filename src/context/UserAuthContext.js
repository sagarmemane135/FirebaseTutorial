import { createContext, useContext, useEffect,useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail} from "firebase/auth"
const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setuser] = useState("")
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email,password){
        // console.log("Email : ",email);
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    function passwordReset(email){
        return sendPasswordResetEmail(auth,email);
    }

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setuser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    },[]);
    return <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn,passwordReset}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}