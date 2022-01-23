import { User } from "../types";
import { Link } from "react-router-dom";


const UserRender = ({  userData,  onRemove,}: {  userData: User;  onRemove: (id: number) => void;}) => 
(
  <tr>
    <td><Link to = {`/allUsers/${userData.id}`}>{userData.userName}</Link></td>
    <td>{userData.userAge}</td>
    <td>{userData.userPhone}</td>
    <td>
      <button type="button" onClick={() => onRemove(userData.id)}>
        Remove
      </button>
    </td>
  </tr>
);

export default UserRender;
