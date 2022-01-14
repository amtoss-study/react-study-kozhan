import FormForUser from "Components/FormForUser";
import React from "react";
import { User } from "types";

type Props = {
    users: User[];
    setUser: (users: User[]) => void;
}

const CreateUser = ({ users, setUser}: Props) =>
{
    return(
        <>
            <h3>You can create new User!</h3>
            <FormForUser onSubmitFunc={function (newUser) {
                    return setUser([...users, newUser]);  }
                                      } />
        </>
    )
}

export default CreateUser;