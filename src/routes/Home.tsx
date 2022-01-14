import Greeting from "Components/Greeting";
import React from "react";
import { User } from "types";

const Home = ({ users } : {users : User[] }) =>
{
    const lastAddedUser = users[users.length - 1];
    return < Greeting name = {lastAddedUser?.userName} />
};

export default Home;