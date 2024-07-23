import ModalCreateUser from "./ModalCreateUser";
import "../../../styles/ManageUser.scss";

const UserManage = () => {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="user-content">
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default UserManage;
