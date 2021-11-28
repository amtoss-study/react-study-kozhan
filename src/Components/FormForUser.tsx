import React from "react";
import { User } from "../types";

const FormForUser =({onSubmitFunc}: {onSubmitFunc: (user: User) => void})=>
{
    const[newUser,setNewUserValues] = React.useState<User>(
      {
        id:0,
        userName:"",
        userAge:0,
        userPhone:"",
      }
    );
    return(    
        <form onSubmit = {event=>
                {
                    event.preventDefault();
                    onSubmitFunc({...newUser, id:Date.now()});
                }
            }
        >
            <input placeholder='User Name' value={newUser?.userName} onChange={event => setNewUserValues({...newUser, userName: event.target.value}) }/>
            <input placeholder='User Age Name' value={newUser?.userAge} onChange={event => setNewUserValues({...newUser, userAge: parseInt(event.target.value)}) }/>
            <input placeholder='User Phone' value={newUser?.userPhone} onChange={event => setNewUserValues({...newUser, userPhone: event.target.value})}/>

            <button type="submit">Send new Values</button>
        </form>
    );    
}

export default FormForUser;