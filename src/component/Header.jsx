import Login from "./Counter"
import Singup from "./Singup"




function Header(props){
    console.log(props.isUserAlredyLoggedIn)
  
  
    // if(props.isUserAlredyLoggedIn){
    //     return <Login></Login>
    // }
props.isUserAlredyLoggedIn
    // else{
    //     return <Singup/>
    // }

    // switch(props.isUserAlredyLoggedIn){
    //     case true :  return <Login/> 
    //     case false :  return <Singup/> 
    // }

        // return <div>

        //         {props.isUserAlredyLoggedIn?<Login/>:<Singup/>}


        // </div>


        return <>
        
                {props.isUserAlredyLoggedIn && <Login></Login>}
        
        
        </>


  
//   return <div >

//     <Login></Login>
//     <Singup></Singup>

//     </div>
}




export {Header}




