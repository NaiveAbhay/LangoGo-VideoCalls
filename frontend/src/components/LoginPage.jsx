import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Earth, Languages } from 'lucide-react'
import React, { useState } from 'react'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router'
import Login from '../utils/Login.png'
import { loginApi } from '../lib/api'
import useLoginMutation from '../hooks/useLoginMutation.jsx'


function LoginPage() {

  const [loginData,setLoginData] =useState({
    email : "",
    password :"",
  })

  // this is what we did first then we made it as custome hook just for practice

  // const queryClient = useQueryClient()

  // const {mutate,isPending,error} =useMutation({
  //   mutationFn : loginApi,
  //   onSuccess : ()=>{
  //     toast.success("Login Successful !")
  //     queryClient.invalidateQueries({queryKey : ["authUser"]})

  //   },
  //   onError : (error)=>{
     
  //     toast.error(error.response.data.message)
  //   }
  // })

  const {loginMutation,isPending,error} = useLoginMutation();

  const handleChange = (e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    loginMutation(loginData)
   
  }




  return (
    
      <div  className='h-screen  w-screen flex justify-center items-center' >
      <div className='border-2 border-accent border-opacity-40 flex rounded-[1vw] overflow-hidden'>
      <div  className='p-7'>
        

        <div className='flex gap-2 items-center pb-3 '>
                  <  Earth className='size-8 text-primary ' />
                  <h1 className='text-[#20B44D] font-bold text-3xl font-mono bg-clip-text bg-gradient-to-r from-primary to-secondary  text-transparent tracking-wider'>LangoGo</h1>
                   <Languages className='size-8 text-secondary' />
                </div>
        
        
        <h1 className='text-xl pb-1 '>Welcome Back</h1>
        <h2 className='text-sm text-zinc-400 pb-5'>Sign in to your account to continue your language learning journey</h2>
      <form className='' onSubmit={handleSubmit}>
        
        <label className='block pb-1' htmlFor="email">Email</label>
        <input className='rounded-full border px-3 py-1 mb-3 w-full' id="email" onChange={handleChange} name='email'  type="email" value={loginData.email} placeholder='Enter your email' required />
        
        <label className='block pb-1' htmlFor="password">Password</label>
        <input  className='rounded-full border px-3 py-1 w-full mb-1' id="password" onChange={handleChange} name='password'  type="password" value={loginData.password} placeholder='Enter your password' required />
        
        
        <button className='text-md mt-5 text-zinc-950 w-full align-center py-1.5 rounded-full bg-primary font-semibold  mb-4' type="submit">{isPending ? (<><span className='loading loading-spinner loading-xs'> </span> Signing in...</> ): "Sign in" } </button>

      </form>
        <h1 className='text-sm justify-self-center  '>Don't have an account? <Link className='text-primary font-semibold' to="/signUp"> Create One</Link></h1>
      </div>
    
      <div className='border-base-300 content-center bg-opacity-60  bg-secondary  -center p-5 w-[27vw]'>
          <div className='w-80 h-80 items-center justify-center '><img src={Login} alt="" /></div>

          <div className='items-center justify-center w-full'>
            <h1 className='justify-self-center text-lg font-bold w-80  pb-3  text-center'>Connect with Language partners world wide</h1>
            <h1 className='text-sm text-center'>Practice conversations, make friends, and improve your language skills together </h1>
          </div>
      </div>
      </div>
      
    </div>
  )
   
}

export default LoginPage
