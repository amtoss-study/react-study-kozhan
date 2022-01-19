import React from "react";
import { User } from "types";

type UsersConextType = 
{
    users: User[];
    setUsers: (users: User[]) => void;
}

const UsersContext = React.createContext<UsersConextType>({
    users: [],
    setUsers: () => {},
});

export const UsersContextProvider: React.FunctionComponent = ({ children }) => {
    const [users, setUsers] = React.useState<User[]>([]);
    return(
        <UsersContext.Provider value = {{users, setUsers}}> 
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext;