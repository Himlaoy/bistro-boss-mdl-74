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
            setUser(currentUser)
            console.log('current user', currentUser)

            if(currentUser){
                const info = {email:currentUser?.email,}
                
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(info)
                })
                .then(res=>res.json())
                .then(data=>{

                    localStorage.setItem('jwt-token', data.token)
                    console.log( 'token',data)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('jwt-token')
            }


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