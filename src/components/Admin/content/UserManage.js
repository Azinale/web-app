import ModalCreateUser from "./ModalCreateUser";
import "../../../styles/ManageUser.scss";
import TableUser from "./TableUser";
import ShowStudent from "./ShowStudent";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalUpdate from "./ModalUpdate";


const UserManage = (props) => {
  const [listUser, setListUser] = useState()
  useEffect(() => {
    // fetchList()
  }, [])

  const fetchList = async (page, limit) => {
    let response = await axios.get(`http://localhost:8080/api/teacher/list?firstRow=${page}&maxResults=${limit}&orderColumn=id&orderAsc=true`);
    setListUser(response.data.body)

  }
  return (
    <div className="manage-user-container">
      <div className="user-content">
      </div>
      <div className="title">
        <TableUser />
      </div>
    </div>
  );
};
export default UserManage;
