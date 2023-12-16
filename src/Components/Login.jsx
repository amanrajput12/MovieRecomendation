import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
 const [isSignInForm,setIsSignInForm] = useState(true)
  const handleSignInForm=()=>{
      setIsSignInForm(!isSignInForm)
  }
  const handleform =(e)=>{
    e.preventDefault()
  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>

        <form onClick={handleform} className='absolute my-36 w-1/4 p-12 mx-auto rounded-md bg-opacity-80 bg-black right-0 left-0 text-white '>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm?
            "Sign In":"Sign up"}</h1>
           { !isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 rounded-lg w-full bg-gray-800' />  }
            <input type="text" placeholder='Email address' className='p-4 my-4 rounded-lg w-full bg-gray-800' />
            <input type="password" placeholder='Password' className='p-4 rounded-lg my-4 w-full bg-gray-800' />
             <button className='p-4 my-6 rounded-lg  bg-red-700 w-full'>{isSignInForm?"Sign In":
             "Sign Up"}</button>
             <p className='cursor-pointer' onClick={handleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
        
    </div>
  )
}

export default Login