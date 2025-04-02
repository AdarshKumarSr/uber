import React, { useState } from 'react'
import logo from '../assets/uberlogo.png';
import { Link } from 'react-router-dom';

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userData, setuserData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
      email: email,
      password: password
    })
    console.log(userData);
    
    // Handle form submission logic here
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-15 mb-14'  src={logo} alt="Uber Logo" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
      <h3 className='font-bold text-lg mb-2'> What's your Email nigga</h3>
      <input 
      required 
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      className='bg-[#eee] mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base'
      type='email' placeholder='email@example.com' />

      <h3 className='font-bold text-lg mb-2'> Enter Password</h3>
      <input 
      required
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }} 
       className=' bg-[#eee] mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base'
      type='password' placeholder='password' />


      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base' >Login</button>

     <p className='text-center' >New here then mf!!?  
      <Link to='/Signup' className='text-blue-600'> Create New Account</Link> </p>

      </form>
      </div>
      <div>
        <Link 
        to='/captain-login'
           className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        > SignIn As Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
