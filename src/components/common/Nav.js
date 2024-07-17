import React from "react";
import './navigation.scss'
import ListToDo from "../todoapp/ListToDo";
import {
    Link, NavLink
  } from "react-router-dom";




class Nav extends React.Component{

    render() {
        return (
            <div className="topnav">
                <NavLink to="/home" activeclassname="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassname="active">
                    Todo
                </NavLink>
                <NavLink to="/user" activeclassname="active">
                    user
                </NavLink>
            </div>
        )
    }
}
export default Nav