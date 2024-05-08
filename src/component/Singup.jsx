import React from 'react'

const Singup = () => {
  return (
    <div className='flex gap-5 flex-col text-center'>
        <h1 className='text-2xl font-semibold'>User Signed up form</h1>
        <form className='flex flex-col gap-6 text-black'>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
        </form>
    </div>
  )
}

export default Singup
