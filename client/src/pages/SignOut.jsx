import React from 'react'
import { Link } from 'react-router-dom'

export default function SignOut() {
  return (
    <div className='p-8 mx-auto max-w-lg '>
      <h1 className='text-3xl text-center font-semibold'>Sign UP</h1>
      <form className='flex flex-col  items-center gap-4 p-5 '>
        <input type='text' placeholder='username' className='border p-3 rounded-lg w-full' id='username'/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg w-full' id='email'/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg w-full' id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-85 w-full'>Sign UP</button>

      </form>
      <div className='flex gap-3 mx-6'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-900'>Sign In</span></Link>
      </div>
    </div>
  )
}
