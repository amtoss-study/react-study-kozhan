import React from "react";
import { User } from "./types";
import TableRender from "./Components/TableRender";
import FormForUser from "./Components/FormForUser";

const usersList = 
[
   {
        "id":0,
        "userName":"Tor",
        "userAge":6456,
        "userPhone":"0959227735",
    },
    {
        "id":1,
        "userName":"Loki",
        "userAge":6786,
        "userPhone":"0959223367",
    },
];

const App = () => {
    const [users,setUser] = React.useState<User[]>(usersList);
    return(
        <div>
            <h3>Home Task no.1</h3>
            <TableRender users = {users} onRemove={function (id: number) {
                return setUser(users.filter(user => user.id != id));
            }}/>
            <h3>You can create new User!</h3>
            <FormForUser onSubmitFunc = {
                function (newUser) {
            return setUser([...users, newUser]);
          }
                }/>
        </div> 
    );   
}

export default App;
