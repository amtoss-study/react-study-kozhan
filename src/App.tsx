import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./Components/Nav";
import AllUsers from "routes/AllUsers";
import CreateUser from "routes/CreateUser";
import UsersContext, { UsersContextProvider }  from "UsersContext";

/*const usersList = [
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
];*/

const App = () => {
  return (
    <UsersContextProvider>{/*==> <UsersContext.Provider value = {{users, setUsers}}> ==> const [users, setUsers] = React.useState<User[]>([]); */}
      <Router>
        <Nav />
        <Switch>            
          <Route path="/allUsers" exact={true} component={AllUsers} />{/* AllUsers use UsersContext.Provider for receiving properties with data*/}
          <Route path="/createUser" exact={true}>
            <CreateUser users={UsersContext.Provider.arguments.users} setUsers={UsersContext.Provider.arguments.setUsers}/>{/* CreateUser gets properties throught params and doesn't use UsersContext.Provider*/}  
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </UsersContextProvider>
  );
};

export default App;
