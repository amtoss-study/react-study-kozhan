import FormForUser from "Components/FormForUser";
import TableRender from "Components/TableRender";
import React from "react";
import { User } from "types";

type Props = {
    users: User[];
    setUsers: (users: User[]) => void;
}

const CreateUser = ({ users, setUsers}: Props) =>
{
    return(
        <>
            <h3>You can create new User!</h3>
            <FormForUser onSubmitFunc={function (newUser) {
                    return setUsers([...users, newUser]);  }} /> 
             {/*<TableRender users={users} onRemove={function (id: number) {
                                        return setUsers(users.filter((user) => user.id != id)); }} /> */}
         </>
    )
}

export default CreateUser;