import Greeting from "Components/Greeting";
import useUsers from "Hooks/useUsers";
import React from "react";

const Home = () =>
{
    const {users} = useUsers();
    const lastAddedUser = users[users?.length - 1];
    return < Greeting name = {lastAddedUser?.userName} />
};

export default Home;