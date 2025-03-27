import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'

export default function SignOut() {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({})
  const[loding,setLoding]=useState(false)
  const [error, setError] = useState("")
  const handeleChange=(e)=>{
    setFormData({
      ...formData,[e.target.id]:e.target.value,
    })
  }
  const handeleSubmit=async(e)=>{
    e.preventDefault();
      setLoding(true)
      setError("")
    try {

      
      await axiosInstance.post('/login',formData)
      navigate('/sign-in')
    } catch (error) {
     setError(error.response?.data?.message || "une erreur est survenue")
    }
   
setLoding(false)
  }
  return (
    <div className='p-8 mx-auto max-w-lg '>
      <h1 className='text-3xl text-center font-semibold'>Sign UP</h1>
      {error && (
        <p className='text-red-300 border border-red-400 m-2 p-3 rounded-md text-center'>{error}</p>
      )}
      <form onSubmit={handeleSubmit} className='flex flex-col  items-center gap-4 p-5 '>
        <input type='text' placeholder='username' className='border p-3 rounded-lg w-full' id='username'onChange={handeleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg w-full' id='email'onChange={handeleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg w-full' id='password'onChange={handeleChange}/>
        <button disabled={loding} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-85 w-full disabled:opacity-65'>{loding ?  'Loading..' : 'Sign UP'}</button>

      </form>
      <div className='flex gap-3 mx-6'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-900'>Sign In</span></Link>
      </div>
    </div>
  )
}
