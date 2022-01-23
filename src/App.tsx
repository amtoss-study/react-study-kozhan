import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./Components/Nav";
import CreateUser from "routes/CreateUser";
import UsersContext, { UsersContextProvider }  from "UsersContext";
import AllUsers from "routes/AllUsers";

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
    <UsersContextProvider>
      <Router>
        <Nav />
        <Switch>            
          <Route path="/allUsers" exact={true} component={AllUsers} />
          <Route path="/createUser" exact={true} component={CreateUser} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </UsersContextProvider>
  );
};

export default App;
