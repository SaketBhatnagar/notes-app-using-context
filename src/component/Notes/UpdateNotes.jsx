import React, { useContext, useEffect, useState } from "react";
import { NotesStore } from "../../contextapi/NotesStore";


  const UpdateNotes = () => {
  const { notes, setNotes,updateid,setUpdateId ,setShowUpdate} = useContext(NotesStore);

  const [title,setTitle] = useState("")  
  const [description,setDescription] = useState("")  


    useEffect(()=>{

      let searched_note = notes.filter((note)=> note.id == updateid)
      setTitle(searched_note[0]?.title)
      setDescription(searched_note[0]?.description)


    },[updateid])

  const handleForm = (e)=>{
    let date = new Date()
     e.preventDefault() 
     setShowUpdate(false)

     let new_notes = notes.map(note=>{

            if(note.id == updateid){
                note.title = title
                note.description = description
            }

            return note



     })   

     setNotes(new_notes)

     localStorage.setItem("notes",JSON.stringify(new_notes))

    
    
    setTitle("")
    setDescription("")
  }  

  return (
    // <div className="w-full">
      <form onSubmit={handleForm} className="flex flex-col  w-[80%] lg:w-[60%]  xl:w-[50%] gap-3 justify-center items-center  ">
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
          <button className="py-2 bg-indigo-600 hover:scale-10 text-white border-none font-bold w-[100%] px-5 border-2 rounded-md">Update Note</button>
        </form>
    // </div>
  )
}

export default UpdateNotes
