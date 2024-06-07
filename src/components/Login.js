import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //checkValidData
    /* console.log(email.current.value);
     console.log(password.current.value);
     console.log(name.current.value);*/

    

    if (!isSignInForm) {

    const message = checkValidData(name.current.value, email.current.value, password.current.value);
    
    setErrorMsg(message);
    if (message) return;

      //Sign Up Form
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(adduser({uid: uid, email : email, displayName: displayName, photoURL: photoURL}));
            
            
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMsg(error.message);
            // ...
          });
          
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
          // ..
        });
    }
    else {
      //Sign In Form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });

    }
  }

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form onClick={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white opacity-80">
        <h1 className="font-bold text-3xl p-2 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />}

        <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <p className="text-red-500 font-bold text-lg py-1">{errorMsg}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
