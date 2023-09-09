import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true)

  function toggleSignUpForm() {
    setIsSignInForm(!isSignInForm)
  }
    return (
      <div className="">

        <Header />

        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img" />
        </div>

        <form className="w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 bg-black  bg-opacity-80 text-white rounded-lg">
          <h1 className="font-bold text-3xl py-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input 
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Full Name" 
          type="text" />}

          <input 
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email or Phone Number" 
          type="email" />

          <input 
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Password" type="password" />

          <button className="p-4 my-6 w-full rounded-lg bg-red-700">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? "New to Netfix ? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>

      </div>
    )
}

export default Login

