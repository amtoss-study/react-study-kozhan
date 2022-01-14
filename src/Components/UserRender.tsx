import { User } from "../types";

const UserRender = ({  userData,  onRemove,}: {  userData: User;  onRemove: (id: number) => void;}) => 
(
  <tr>
    <td>{userData.userName}</td>
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
