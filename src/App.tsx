import React from "react";
import { User } from "types";
import TableRender from "./Components/TableRender";
import FormForUser from "./Components/FormForUser";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./Components/Nav";
import AllUsers from "routes/AllUsers";
import CreateUser from "routes/CreateUser";

const usersList = [
  {
    id: 0,
    userName: "Tor",
    userAge: 6456,
    userPhone: "0959227735",
  },
  {
    id: 1,
    userName: "Loki",
    userAge: 6786,
    userPhone: "0959223367",
  },
];

const App = () => {
  const [users, setUser] = React.useState<User[]>(usersList);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/allUsers" exact={true}>
          <AllUsers users={users} setUser={setUser} />
        </Route>
        <Route path="/createUser" exact={true}>      
          <CreateUser users={users} setUser={setUser}/>
        </Route>
        <Route path="/">
          <Home users = {users} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
