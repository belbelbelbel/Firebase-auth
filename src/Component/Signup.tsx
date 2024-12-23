import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';

export const Signup = () => {
    const [loading,setloading] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const isformfilled = email === '' || password === ''
    const handleRegister = async () => {
        setloading(true)
      try {
        if (!isformfilled) {
          const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
          console.log(userCredentials.user)
          setPassword('')
          setEmail('')
        }
        else {
          toast.error('empty fields are not allowed')
        }
      } catch (error:any) {
        console.log('eror deteccted while operarting', error.message)
        toast.error(error.message)
        setloading(false)
      }
    };
    return (
        <div>
        <Toaster/>
            <div className='w-screen h-screen items-center justify-center flex flex-col'>
              <div className='xl:w-[50%] w-[80%] flex flex-col gap-10'>
                <div className='w-full  items-center flex flex-col'>
                  <label className='self-start font-bold tracking-[1px]'>Email</label>
                  <input placeholder='eg Bendee@gmail.com' type='text' value={email} name='email' onChange={(e) => setEmail(e.target.value)} className='text-black outline-0  w-full  font-bold  rounded-[3px]  mt-2 border-black bg-transparent border-x-0 border-t-0 border-2 h-[8vh]  p-3' />
                </div>
                <div className='w-full  items-center flex flex-col'>
                  <label className='self-start font-bold tracking-[1px]'>Password</label>
                  <input placeholder='e.g Steword12#$%' value={password} type='password' name='password' onChange={(e) => setPassword(e.target.value)} className='text-black outline-0  w-full  font-bold  rounded-[3px]  mt-2 border-black bg-transparent border-x-0 border-t-0 border-2 h-[8vh]  p-3' />
                </div>
                <button className='h-[8vh] outline-0 hover:bg-black  hover:text-white rounded-[10px] font-bold tracking-[1px] transition ease-in duration-400   text-[1.2rem] mt-2  bg-transparent border-2 border-black text-black' onClick={handleRegister}>{loading ? 'loading...' : 'SignUp'}</button>
              </div>
              <div className='mt-5'>already have an account? <strong className='cursor-pointer' onClick={() => navigate('/login')}>Signin</strong></div>
            </div>
      </div>
    )
}
