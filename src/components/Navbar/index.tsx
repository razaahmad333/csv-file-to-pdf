import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../reduxStuffs/user/reducer";
export default function Navbar() {
  const isAuthorized = useSelector((state: UserState) => state.loggedIn);

  return (
    <nav className={styles.navbar}>
      <h1> CSV.pdf </h1>
      {isAuthorized ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workspace">Workspace</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login"> Login</Link>
          </li>

          <li>
            <Link to="/create-account">Create Account</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
