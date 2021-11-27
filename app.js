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

const UserRender = ({userData})=>
(
    <tr>
        <td>{userData.userName}</td>
        <td>{userData.userAge}</td>
        <td>{userData.userPhone}</td>
    </tr>
);

const TableRender = ({usersData})=>
(
    <div>
        <table border = "1px black">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>UserAge</th>
                        <th>UserPhone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map(user => <UserRender key={user.id} userData = {user} />)
                    }
               </tbody>
        </table>
    </div>
);

const FormForUSer =({onSubmitFunc})=>
{
    const[newUser,setNewUserValues] = React.useState(
    {
        userName:"",
        userAge:0,
        userPhone:"",
    });
    return(    
        <form onSubmit = {event=>
                {
                    event.preventDefault();
                    onSubmitFunc({...newUser, id:Date.now()});
                }
            }
        >
            <input placeholder='User Name' value={newUser.userName} onChange={event => setNewUserValues({...newUser, userName: event.target.value}) }/>
            <input placeholder='User Age Name' value={newUser.userAge} onChange={event => setNewUserValues({...newUser, userAge: event.target.value}) }/>
            <input placeholder='User Phone' value={newUser.userPhone} onChange={event => setNewUserValues({...newUser, userPhone: event.target.value})}/>

            <button type="submit">Send new Values</button>
        </form>
    );    
}

const App = () => {
    const [users,setUser] = React.useState(usersList);
    return(
        <div>
            <h3>Home Task no.1</h3>
            <TableRender usersData = {users}/>
            <h3>You can create new User!</h3>
            <FormForUSer onSubmitFunc = {
                newUser => setUser([...users, newUser])
                }/>
        </div> 
    );   
}

ReactDOM.render(<App />, document.getElementById('react-root'));
