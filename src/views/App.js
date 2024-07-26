import logo from "./logo.svg";
import "./App.scss";
// import Myhello from '../components/Myhello';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "../components/common/Home";
import ListUser from "../components/User/ListUser";
import DetailUser from "../components/User/DetailUser";
import Header from "../components/common/Header";
import Admin from "../components/Admin/Admin";
import Coursemanage from "../components/Admin/content/Coursemanage";
import DashBoard from "../components/Admin/content/DashBoard";
import UserManage from "../components/Admin/content/UserManage";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes> */}
      </div>
      <div className="main-nav">
        <div className="side-nav"></div>
        <div className="app-content"></div>
      </div>
      <Outlet />
      <ToastContainer>
        position="top-right" autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce
      </ToastContainer>
    </div>
    // </BrowserRouter>
  );
}

export default App;
