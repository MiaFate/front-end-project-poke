import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const auth= getAuth(app)
  const submit = async () =>  await signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      navigate('/')
      
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
     alert(errorMessage);
    });


  // const [loginData, setLoginData] = useState({ username: '', password:'' });


  // const onInputChange = (e) => {
  //   const { name, value } = e.target
    
  //   setLoginData((prev) => ({...prev, [name]: value}))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(loginData)
    
	// }



  return (
        <div>
          <div className='mb-6 pt-3 rounded bg-gray-200'>            
            <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Username </label>
            <input 
              className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              type="text" 
              name="username" 
              onChange={(ev)=> setEmail(ev.target.value)}/>
          </div>

          <div className='mb-6 pt-3 rounded bg-gray-200'>
            <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Password </label>
            <input        
              className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              type="password" 
              name="password" 
              
              onChange={(ev)=>setPassword(ev.target.value)}/>
          </div>

          <button onClick={submit} type="submit" className='bg-gray-900 rounded hover:bg-gray-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
            Login
          </button>

          <div className='flex justify-around my-2'>
						<p>
							Forgot your password?
						</p>					
            <Link to="/resetpass" className='text-gray-900 hover:text-purple-700 hover:underline mb-6'>Reset it here</Link>					
          </div>
        </div>
  )
}

export default Login