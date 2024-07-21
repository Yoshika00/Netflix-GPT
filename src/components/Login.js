import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
      //validate the form data
      //console.log(email.current.value);
      //console.log(password.current.value);

      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);

      if(message) return;

      //Sign Up Logic
      if(!isSignIn) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
      }

      //Sign In Logic
      else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      }

  };

  function toggleSignInForm() {
     setIsSignIn(!isSignIn);
  };


  return (
    <div>
      <Header className='' />

      <div className='absolute'>
          <img
             src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg'
             alt='bg_img' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-8 my-36 bg-black  mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80' >
        <h1 className='text-bold text-3xl py-4' >{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignIn && <input
           type='text'
           placeholder='Full Name'
           className='p-3 my-3 w-full bg-gray-700 rounded-md' />}

        <input 
            ref={email}
            type='text'  
            placeholder='Email Address' 
            className='p-3 my-3 w-full bg-gray-700 rounded-md' />

        <input 
            ref={password}
            type='password' 
            placeholder='Password' 
            className='p-3 my-3 w-full bg-gray-700 rounded-md' />

        <p className='text-lg text-red-800 p-1 font-bold'>{errorMessage}</p>

        <button 
            className='bg-red-700 text-white p-3 my-4 w-full rounded-md'
            onClick={handleButtonClick} >{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix ? Sign Up Now" : "Already Registered!!Sign In Now.." }</p>
      </form>

    </div>
  )
}

export default Login;