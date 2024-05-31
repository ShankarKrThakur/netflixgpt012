import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { adduser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
 // console.log(user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
      
    }).catch((error) => {
      // An error happened.
    });
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(adduser({uid: uid, email : email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
          // ...
        } else {
          dispatch(removeUser()); 
          navigate("/");
          // User is signed out
          // ...
        }
      });
      //unsubscribe when component unmount 
      return () => unsubscribe();

    }, [])
    
  

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"/>
      {user && <div className='flex p-2'>
        <img className="w-12 h-12 "alt="usericon" src={user.photoURL}/>
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
      {/* https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg*/}
    </div>
  )
}

export default Header
