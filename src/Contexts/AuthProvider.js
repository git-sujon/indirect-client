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
    const [emailData,setEmailData] = useState({})
    const [hostedPhotoUrl,setHostedPhotoUrl] =useState('')


    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password )
    }

    const userSignUp =(email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }


    const logInWithPrvider =(provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userProfileUpdate = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    
 
    

    const userEmailQueryData = (email) => {
        setLoading(true)
  // axios
    // .post(`http://localhost:5000/users?email=${event?.email}`)
    fetch(`http://localhost:5000/users?email=${email}`, {
      method: "GET",
      // headers: {
      //   "content-type": "application/json",
      // authorization: `bearer ${localStorage.setItem('IndirectToken')}`
      // },
    })
    .then((res) => res.json())
    .then((data) => {
      setEmailData(data[0]);

    });
    }

    const ImageHosting = (photoFilePath) => {
    
        setLoading(true)
        const formData = new FormData();
        formData.append("image", photoFilePath);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_host_API}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
        .then((res) => res.json())
          .then((imageData) => {
            const photoUrl= imageData?.data?.display_url;
            if(photoUrl){
                setLoading(true)
               setHostedPhotoUrl(photoUrl)    
            }

          })
        
    };




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
        loading, setLoading,userEmailQueryData, emailData,
        ImageHosting, hostedPhotoUrl,   
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;