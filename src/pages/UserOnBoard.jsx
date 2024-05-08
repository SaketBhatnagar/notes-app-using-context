import React ,{Fragment, useState} from 'react'
import Footer from './component/Footer'
import { Header } from './component/Header'
import LoginForm from './component/LoginForm'
import Singup from './component/Singup'

const UserOnBoard = () => {


 const [userexist,setUserExist] =useState(true)
 
  return <section className='bg-black h-screen flex justify-center items-center'>

  <article className='text-white  p-8 rounded-md shadow-xl shadow-slate-400'>

   { userexist ?<LoginForm/>:<Singup/> }  
    
   {userexist? <button className='text-red-400 text-right w-full font-semibold hover:font-extrabold mt-11' onClick={()=> setUserExist(false)}>Signup?</button>
   :<button className='text-red-400 text-right w-full font-semibold hover:font-extrabold mt-11' onClick={()=> setUserExist(true)}>Login?</button>} 

  </article>

  </section>

  
}

export default UserOnBoard
