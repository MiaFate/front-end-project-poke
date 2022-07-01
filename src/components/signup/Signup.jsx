import React, { useState } from 'react'

const Signup = () => {
  const [signUpData, setsignUpData] = useState({ username: '', email: '', password: '' });


  const onInputChange = (e) => {
    const { name, value } = e.target

    setsignUpData((prev) => ({ ...prev, [name]: value }))
    console.log(signUpData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <div className='mb-6 pt-3 rounded bg-gray-200'>
        <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Username </label>
        <input
          className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
          type="text"
          name="username"
          value={signUpData.username}
          onChange={onInputChange} />
      </div>

      <div className='mb-6 pt-3 rounded bg-gray-200'>
        <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Email </label>
        <input
          className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
          type="email"
          name="email"
          value={signUpData.email}
          onChange={onInputChange} />
      </div>

      <div className='mb-6 pt-3 rounded bg-gray-200'>
        <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Password </label>
        <input
          className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
          type="password"
          name="password"
          value={signUpData.password}
          onChange={onInputChange} />
      </div>

      <div class="md:flex md:items-center mb-6">
        <label class="block text-gray-600 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">
            By creating your account you agree to the terms of service and our security policy.
          </span>
        </label>
      </div>

      <button type="submit" className='bg-gray-900 rounded hover:bg-gray-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
        Signup
      </button>
    </form>
  )
}

export default Signup