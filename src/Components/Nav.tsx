import React from "react";
import { Link } from "react-router-dom";

const Nav = () => 
(
  <nav>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/allUsers"}>All Users</Link></li>
      <li><Link to={"/createUser"}>create User</Link></li>
    </ul>         
  </nav>
)

export default Nav;