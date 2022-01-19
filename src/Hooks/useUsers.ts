import { useContext } from "react";

import UsersContext from "UsersContext";

const useUsers = () => {
    const { users, setUsers } = useContext(UsersContext);
    return { users, setUsers };
}

export default useUsers;