import TableRender from "Components/TableRender";
import React from "react";
import useUsers from "Hooks/useUsers";

const AllUsers = () =>
{
    const {users, removeUser} = useUsers(); {/* useUsers() == React.useContext(UsersContext);*/}
    return(
            <>
                <h3>Home Task #3</h3>
                <TableRender users={users} onRemove={removeUser}/>
            </>
    )
}

export default AllUsers;
