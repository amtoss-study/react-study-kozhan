import { useContext } from "react";
import { User } from "types";

import UsersContext from "UsersContext";

const useUsers = () => {
    const { users, setUsers } = useContext(UsersContext);
    
    
    const createUser = (newUser : User) => 
    {
        setUsers([...users, newUser]);
    }

    const removeUser = (id : number) =>
    {
        setUsers(users.filter((user) => user.id != id));
    }
    
    return { users, setUsers, createUser , removeUser};
}

export default useUsers;