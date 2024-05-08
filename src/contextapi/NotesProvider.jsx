import { useState } from "react";
import { NotesStore } from "./NotesStore";

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: "101", title: "Hello", description: "Hello WorldHello World" ,date:"30/04/2024",time:"07:15" , remindertime:"07:15"},
  ]);

  const [updateid,setUpdateId] =useState(0)

  const [showupdate,setShowUpdate] = useState(false)

  const [showremform,setShowRemForm] = useState(false)



  return (
    <NotesStore.Provider value={{ notes, setNotes ,showupdate,showremform,setShowRemForm,setShowUpdate,updateid,setUpdateId}}>
      {children}
    </NotesStore.Provider>
  );
};

export default NotesProvider;
