import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import Login from './Login'
import { useDispatch } from 'react-redux';
import { adduser, removeUser } from '../utils/userSlice';
const Body = () => {

    const dispatch = useDispatch();  
   
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/> 
        }
    ]);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(adduser({uid: uid, email : email, displayName: displayName, photoURL: photoURL}));
          
          // ...
        } else {
          dispatch(removeUser()); 
          
          // User is signed out
          // ...
        }
      });
    }, [])

  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
