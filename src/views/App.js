import logo from './logo.svg';
import './App.scss';
// import Myhello from '../components/Myhello';
import MyForm from '../components/example1/MyForm';
import ListToDo from '../components/todoapp/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/common/Nav';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from '../components/common/Home';
import ListUser from '../components/User/ListUser';
import DetailUser from '../components/User/DetailUser';



const App = ()=> {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Nav />
        
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Myhello></Myhello> */}
        {/* <MyForm></MyForm> */}
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<ListToDo />} />
            <Route path='/user/:id' element={<DetailUser/>}/>
            <Route path='/user' element={<ListUser/>}/>
      </Routes>
        </header>

        

      <ToastContainer>
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
      </ToastContainer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
