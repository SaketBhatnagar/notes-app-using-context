import React, { useReducer } from 'react'

const ReducerCounter = () => {

    const initialState  = {count:0}

    const Actions = {
        INCREMENT :"INCREMENTBY10",
    }

    const reducer = (state,action)=>{

        
        switch(action.type){
            case Actions.INCREMENT : return { count: state.count +10};
            case "DECREMENT" : return { count:state.count -1};
            case "DECREMENTBY2" : return { count:state.count -2};
            case "RESET" : return {count:0};
            // default : return state
        }

        
    }

    const [state,dispatch] = useReducer(reducer,initialState)


  return (
    <div>
        {/* <h1>Reducer Counter</h1> */}

        <section className='flex justify-center items-center text-black h-screen'>
      <article className='  flex flex-col justify-center items-center gap-11'>

        <h1 className='font-bold text-5xl text-black'>{state.count} </h1>
        <div className='flex gap-4'>
        <button  onClick={()=> dispatch({type:Actions.INCREMENT})}  className='border-2 py-1 px-3 border-emerald-500 hover:bg-emerald-500'>Increment</button>
        <button   onClick={()=> dispatch({type:"DECREMENT"})} className='border-2 py-1 px-3 border-red-500 hover:bg-red-500'>Decrement</button>
        <button   onClick={()=> dispatch({type:"DECREMENTBY2"})} className='border-2 py-1 px-3 border-red-500 hover:bg-red-500'>Decrement by 2</button>
        <button onClick={()=> dispatch({type:"RESET"})} className='border-2 py-1 px-3 border-white-500 hover:bg-slate-500'>Reset</button>
        </div>
      </article>
    </section>
      
    </div>
  )
}

export default ReducerCounter
