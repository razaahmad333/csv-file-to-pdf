import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../reduxStuffs/user/actions";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Email must be valid");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");

      return;
    }
    if (password.length > 20) {
      alert("Password must be less than 20 characters long");

      return;
    }

    const newUser = {
      email,
      password,
      id: "",
      name: "",
    };

    dispatch(loginUser(newUser));

    navigate("/workspace");
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>

      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            name="password"
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Login</button>
        </div>
      </form>

      <Link to="/create-account" className={styles.link}>
        Dont Have An Account ? Create One Now
      </Link>
    </div>
  );
}
