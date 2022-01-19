import TableRender from "Components/TableRender";
import React from "react";
import useUsers from "Hooks/useUsers";

const AllUsers = () =>
{
    const {users, setUsers} = useUsers(); {/* useUsers() == React.useContext(UsersContext);*/}
    return(
            <>
                <h3>Home Task #3</h3>
                <TableRender users={users} onRemove={function (id: number) {
                    return setUsers(users.filter((user) => user.id != id)); }}
                />
            </>
    )
}

export default AllUsers;
