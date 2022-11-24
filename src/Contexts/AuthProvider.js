import React, { createContext } from 'react';
import { useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';



export const AuthContext= createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user)
    const [loading, setLoading] = useState(true)


    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password )
    }

    const userSignUp =(email, password) => {
        return createUserWithEmailAndPassword( auth, email, password)
    }


    const logInWithPrvider =(provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const userProfileUpdate = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }

    }, [])


    const authInfo={
        user,
        userLogin,
        userSignUp,
        logInWithPrvider,
        logOut,
        userProfileUpdate,
        loading, setLoading,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;