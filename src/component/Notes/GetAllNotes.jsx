import React, { useContext, useState,Suspense, useEffect, useRef } from "react";
import { NotesStore } from "../../contextapi/NotesStore";
import AddNotes from "./AddNotes";
// import UpdateNotes from "./UpdateNotes";

const UpdateNotes  = React.lazy(()=> import("./UpdateNotes"))


const GetAllNotes = () => {
  const {
    notes,
    setNotes,
    setUpdateId,
    showupdate,
    setShowUpdate,
    showremform,
    setShowRemForm,
  } = useContext(NotesStore);

  const [time, setTime] = useState("");
  const [remid, setRemId] = useState(0);

  const handleDelete = (id) => {
    let ans = confirm("Do you really wanna Delete ?");

    if (ans) {
      let new_arr = notes.filter((note) => note.id != id);
      setNotes(new_arr);
      localStorage.setItem("notes",JSON.stringify(new_arr))
    }

    // console.log("delete", id);
  };

  const handleUpdate = (id) => {
    setUpdateId(id);
    setShowUpdate(true);
  };

  const handleReminder = (id) => {
    setRemId(id);

    //! finding note object by id
    //? setting it's time to time state
    let note_obj = notes.filter((note) => note.id == id);
    setTime(note_obj[0].remindertime);

    setShowRemForm(true);
  };

  const handleRemSubmit = (e) => {
    e.preventDefault();
    //! update the note object with latest reminder time
    let new_notes = notes.map((note) => {
      if (note.id == remid) {
        note.remindertime = time;
      }
      return note;
    });

    // console.log(time)

    setNotes(new_notes);
    setShowRemForm(false);
  };

  if (notes.length == 0)
    return (
      <section className=" h-screen overflow-hidden py-8 pb-96">
        <article className="flex flex-col gap-5 items-center ">
          <AddNotes />

          <div className="font-semibold text-3xl text-slate-400">
            Notes Not Available
          </div>
        </article>
      </section>
    );

    const sectionRef = useRef()

    const [selectedELemBgColor,setSelectElemBgColor] = useState("")

    useEffect(()=>{

      
      let timer_id = setTimeout(()=>{
        // document.getElementById("top").style.backgroundColor="red"

        // sectionRef.current.style.backgroundColor="red";  
        // setSelectElemBgColor("green")

      },3000)
    
      return ()=> {
        clearTimeout(timer_id);
      }

    },[])


  return (
    <section ref={sectionRef} className={`h-screen  py-8 pb-96`} >
      <article className="flex flex-col gap-5 items-center ">
        {showupdate ?
         
          <Suspense fallback={<div className="h-52 w-52 bg-red-700">Loading.....</div>}>
              <UpdateNotes /> 
          </Suspense>
         : <AddNotes />}

        <div className=" w-full flex gap-8 py-11  h flex-wrap justify-center">
          {notes.map((note) => {
            return (
              <div
                key={note.date + note.time}
                className=" p-5 rounded-md relative hover:shadow-lg    group border-2 hover:shadow-sky-200/90 flex flex-col gap-4 w-[90%]  lg:w-[40%] xl:w-[20%] shadow-sm shadow-slate-300 "
              >
                <h2 className="font-bold text-2xl pt-4">{note.title}</h2>
                <p className="text-slate-500 h-40 overflow-y-auto shadow-md p-3">
                  {note.description}
                </p>
                {/* date - time */}
                <div className="absolute gap-4 text-sm top-2 group-hover:flex hidden right-2 ">
                  <p className="text-slate-300">{note.time}</p>
                  <p className="text-slate-300">{note.date}</p>
                </div>
                {/* {note.remindertime} */}
                {/* buttons */}
                <div className=" hidden justify-around font-semibold group-hover:flex">
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="p-1 px-2 bg-red-300 hover:bg-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(note.id)}
                    className="p-1 px-2 bg-sky-300 hover:bg-sky-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleReminder(note.id)}
                    className="p-1 px-2 bg-slate-300 hover:bg-slate-400"
                  >
                    Reminder
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      {/* -------- Reminder Form ------------- */}
      {showremform && (
        <section
          onClick={() => setShowRemForm(false)}
          className="bg-slate-400/30 backdrop-blur-sm border-l-2    h-screen fixed top-0 right-0 w-full z-20"
        >
          <button className="border-2  z-40 w-8 fixed right-4 top-4 h-8 rounded-full">
            X
          </button>

          <article
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-52 bg-slate-100 h-full fixed py-11 top-0 right-0"
          >
            <form
              className=" flex flex-col gap-8 py-11 items-center"
              onSubmit={handleRemSubmit}
            >
              <caption className="font-semibold text-lg">
                {" "}
                Set Reminder Time
              </caption>
              <input
                type="time"
                className="w-[70%]"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <button className="py-1 px-3 border-2 hover:bg-slate-200">
                Set Reminder
              </button>
            </form>
          </article>
        </section>
      )}
    </section>
  );
};

export default GetAllNotes;
