import FormForUser from "Components/FormForUser";
import TableRender from "Components/TableRender";
import useUsers from "Hooks/useUsers";
import React from "react";
import { User } from "types";

const CreateUser = () =>
{
    const {createUser} = useUsers();
    return(
        <>
            <h3>You can create new User!</h3>
            <FormForUser onSubmitFunc= {createUser}/> 
         </>
    )
}

export default CreateUser;