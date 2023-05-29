import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const GooglProvider = new GoogleAuthProvider()

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    const GProvider =()=>{
        setLoading(true)
        return signInWithPopup(auth, GooglProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser,
        GProvider
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;