import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword( auth , email , password )
    }
    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    // observe auth change state
    useEffect( ( ) =>{
        const unSubscribe =  onAuthStateChanged(auth , currentUser  =>{
            console.log("current  value of the current user" , currentUser)
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    })


    const AuthInfo = {
        user ,
        createUser,
        signInUser ,
        logOut,
    }
    

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}