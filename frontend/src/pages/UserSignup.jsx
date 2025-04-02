import React, { useState } from 'react'
import logo from '../assets/uberlogo.png';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
       fullName:{
          firstName:firstName,
          lastName:lastName,
       },
        email: email,
        password: password
    })
    console.log(userData);
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    // Handle form submission logic here
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-15 mb-14'  src={logo} alt="Uber Logo" />
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} >
         <h3 className='font-bold text-base mb-2'> What's your Name nigga</h3>
         <div className='flex gap-4 mb-6'>
         <input 
          required 
          className='bg-[#eee]   rounded px-4 py-2   w-1/2 text-base placeholder:text-sm'
          type='text' placeholder='First Name'
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
          />

          <input  
          className='bg-[#eee]  rounded px-4 py-2   w-1/2 text-base placeholder:text-sm'
          type='text' placeholder='Last Name'
          value={lastName}
          onChange={(e)=>{
          setLastName(e.target.value)
          }} />

          
         </div>

    <h3 className='font-bold text-base mb-2'> What's your Email nigga</h3>
    <input 
    required 
    className='bg-[#eee] mb-5 rounded px-4 py-2   w-full text-base placeholder:text-sm'
    type='email' placeholder='email@example.com'
    value={email}
    onChange={(e)=>{
    setEmail(e.target.value)
    }}
    />

    <h3 className='font-bold text-base mb-2'> Enter Password</h3>
    <input 
    required
    
     className=' bg-[#eee] mb-5 rounded px-4 py-2   w-full text-base placeholder:text-sm'
    type='password' placeholder='password'
    value={password}
    onChange={(e)=>{
    setPassword(e.target.value)
    }}
    />


    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base' >Sign up</button>

   <p className='text-center text-sm' >Already have a account !!?  
    <Link to='/login' className='text-blue-600'> Login here</Link> </p>

    </form>
    </div>
    <div>
      
      <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis  re  eveniet necessitatibus  !</p>
    </div>
  </div>
  )
}

export default UserSignup
