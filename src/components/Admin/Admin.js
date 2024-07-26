import SideBar from "./SideBar";
import "../../styles/Admin.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)} />
        </div>
        <div className="admin-main">
          <Outlet />
          <ToastContainer>
            position="top-right" autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick rtl={false}
            pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce
          </ToastContainer>
        </div>
      </div>
    </div>
  );
};
export default Admin;
