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
    fetchList()
  }, [])

  const fetchList = async () => {
    let response = await axios.get(`http://localhost:8080/api/teacher/list?firstRow=0&maxResults=100&orderColumn=id&orderAsc=true`);
    setListUser(response.data.body)

  }
  return (
    <div className="manage-user-container">
      <div className="user-content">
        <ModalCreateUser fetchList={fetchList} />
      </div>
      <div className="title">
        <ShowStudent listUser={listUser} />
      </div>
    </div>
  );
};
export default UserManage;
