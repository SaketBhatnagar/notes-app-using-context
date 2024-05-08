import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { increment,decrement,reset } from '../redux/features/CounterSlice'


const ToolkitCounter = () => {
    const {count} = useSelector((state)=>state.counter)
    const dispatch =  useDispatch()
    
  return (
    <div>
      <section className='flex justify-center items-center text-black h-screen'>
      <article className='  flex flex-col justify-center items-center gap-11'>
        <h1 className='font-bold text-5xl text-black'>{count} </h1>
        <div className='flex gap-4'>
        <button onClick={()=> dispatch(increment())} className='border-2 py-1 px-3 border-emerald-500 hover:bg-emerald-500'>Increment</button>
        <button onClick={()=> dispatch(decrement())}  className='border-2 py-1 px-3 border-red-500 hover:bg-red-500'>Decrement</button>
        <button onClick={()=> dispatch(reset())}  className='border-2 py-1 px-3 border-white-500 hover:bg-slate-500'>Reset</button>
        </div>
      </article>
    </section>
    </div>
  )
}

export default ToolkitCounter
