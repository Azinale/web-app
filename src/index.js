import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducer/rootReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailUser from "./components/User/DetailUser";
import ListUser from "./components/User/ListUser";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/content/DashBoard";
import UserManage from "./components/Admin/content/UserManage";
import Coursemanage from "./components/Admin/content/Coursemanage";
import Home from "./components/common/Home";
import Login from "./components/auth/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Provider store={reduxStore}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="user/:id" element={<DetailUser />} />
          <Route path="user" element={<ListUser />} />
          <Route path="course" element={<Coursemanage />} />

        </Route>

        <Route path="/Admin" element={<Admin />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="usermanage" element={<UserManage />} />
        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
    </Provider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
