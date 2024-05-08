import React, { useContext, useState } from "react";
import { NotesStore } from "../../contextapi/NotesStore";


  const AddNotes = () => {
  const { notes, setNotes } = useContext(NotesStore);

  const [title,setTitle] = useState("")  
  const [description,setDescription] = useState("")  

  const handleForm = (e)=>{
    let date = new Date()
     e.preventDefault() 
     setNotes([...notes,{title,description,id:Math.random()*30000 ,remindertime:"", date:date.toLocaleDateString(),time:date.toLocaleTimeString()}])

    //! storing in Local storage  
    localStorage.setItem("notes",JSON.stringify([...notes,{title,description,id:Math.random()*30000 ,remindertime:"", date:date.toLocaleDateString(),time:date.toLocaleTimeString()}]))
    //  console.log(date.toLocaleDateString())
    setTitle("")
    setDescription("")
  }  

  return (
    // <div className="w-full">
      <form onSubmit={handleForm} className="flex flex-col  w-[80%] lg:w-[60%] z-10  xl:w-[50%] gap-3 justify-center items-center  ">
          <input
            className="py-2 outline-none focus:scale-105 focus:border-b-sky-500 border-b-2   w-[100%] px-5  rounded-md"
            type="text" value={title} onChange={(e)=> setTitle(e.target.value) }
            placeholder="Title"
          />
          <input
            className="py-2 outline-none w-[100%]  focus:scale-105 px-5 focus:border-b-sky-500 border-b-2   rounded-md"
            type="text" value={description} onChange={(e)=> setDescription(e.target.value)}
            placeholder="Description"
          />
          <button className="py-2 bg-gradient-to-r hover:scale-105 from-indigo-500 to-sky-500 text-white border-none font-bold w-[100%] px-5 border-2 rounded-md">Create Note</button>
        </form>
    // </div>
  )
}

export default AddNotes
