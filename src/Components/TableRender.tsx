import { User } from "../types";
import UserRender from "./UserRender";

const TableRender = ({  users,  onRemove,}: {  users: User[];  onRemove: (id: number) => void;}) => 
{
  return (
    <div>
      <table
        style={{
          border: "1px black",
          borderColor: "#aaaaaa",
          borderStyle: "solid",
        }}
      >
        <thead>
          <tr>
            <th>UserName</th>
            <th>UserAge</th>
            <th>UserPhone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRender key={user.id} userData={user} onRemove={onRemove} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRender;
