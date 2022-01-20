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

             {/*{function (newUser) {
                    return setUsers([...users, newUser]);  }} */}
             {/*<TableRender users={users} onRemove={function (id: number) {
                                        return setUsers(users.filter((user) => user.id != id)); }} /> */}
         </>
    )
}

export default CreateUser;