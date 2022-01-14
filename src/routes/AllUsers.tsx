import TableRender from "Components/TableRender";
import React from "react";
import { User } from "types";

type Props = {
    users: User[];
    setUser: (users: User[]) => void;
}

const AllUsers = ({ users, setUser}: Props) =>
{
    return(
            <>
                <h3>Home Task #3</h3>
                <TableRender users={users} onRemove={function (id: number) {
                    return setUser(users.filter((user) => user.id != id)); }
                                                    }
                />
            </>
    )
}

export default AllUsers;
