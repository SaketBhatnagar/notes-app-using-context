import React from 'react'

const SideRem = () => {
  return (
    <section onClick={()=> setShowRemForm(false)} className="bg-slate-400/30 backdrop-blur-sm border-l-2    h-screen fixed top-0 right-0 w-full z-20">
          
    <button  className="border-2  z-40 w-8 fixed right-4 top-4 h-8 rounded-full">X</button>  
  
    <article onClick={(e)=> {e.stopPropagation(); }} className="w-52 bg-slate-100 h-full fixed top-0 right-0">

    </article>
  </section>
  )
}

export default SideRem
