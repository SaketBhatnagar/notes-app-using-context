import React ,{useState} from 'react'

const Counter = () => {

      const [count,setCount]  = useState(0);
        
      // -------------- functions

      const handleIncrment = ()=>{

        setCount((currentValue)=> currentValue +1)

      }
      
      const handleDecrment = ()=>{
        setCount((currentValue)=> currentValue -1)
       
      }
      const handleReset = ()=>{
        setCount((currentValue)=> 0)
        
      }


  return (
    <section className='flex justify-center items-center bg-black h-screen'>
      <article className=' text-white flex flex-col justify-center items-center gap-11'>

        <h1 className='font-bold text-5xl'>{count} </h1>
        <div className='flex gap-4'>
        <button  onClick={handleIncrment}  className='border-2 py-1 px-3 border-emerald-500 hover:bg-emerald-500'>Increment</button>
        <button   onClick={handleDecrment} className='border-2 py-1 px-3 border-red-500 hover:bg-red-500'>Decrement</button>
        <button   onClick={handleReset} className='border-2 py-1 px-3 border-white-500 hover:bg-slate-500'>Reset</button>
        </div>
      </article>
    </section>
  )
}

export default Counter
