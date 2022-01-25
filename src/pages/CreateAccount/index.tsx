import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { createUser } from "../../reduxStuffs/user/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function CreateAccount() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }

    if (name.length > 20) {
      alert("Name must be less than 20 characters long");
      return;
    }
    if (!email.includes("@")) {
      alert("Email must be valid");
      return;
    }

    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }
    if (password1.length < 8) {
      alert("Password must be at least 8 characters long");

      return;
    }
    if (password1.length > 20) {
      alert("Password must be less than 20 characters long");

      return;
    }

    console.log(name, email, password1, password2);

    const newUser = {
      id: "",
      name,
      email,
      password: password1,
    };

    dispatch(createUser(newUser));
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className={styles.createAccount}>
      <h1>Create Account</h1>

      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="Name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="firstName"
          />
        </div>
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
              setPassword1(e.target.value);
            }}
            id="password"
            name="password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Create Account</button>
        </div>
      </form>

      <Link to="/login" className={styles.link}>
        Already Have An Account ? Login Now
      </Link>
    </div>
  );
}
