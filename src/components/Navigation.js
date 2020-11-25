import React from "react";
import "../styles/Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="navbar">
            <li className="navbarLink">
                <NavLink to="/posts">Posts</NavLink>
            </li>
            <li className="navbarLink">
                <NavLink to="/todo">To Do</NavLink>
            </li>
            <li className="navbarLink">
                <NavLink to="/users">Users</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
