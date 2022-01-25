import React from "react";
import styles from "./styles.module.scss";
import { FaFileCsv } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../reduxStuffs/user/reducer";
export default function Home() {
  const isAuthorized = useSelector((state: UserState) => state.loggedIn);
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div className={styles.header}>Get Started with CSV.pdf</div>
        <div className={styles.subHeader}>Convert your CSV file to PDF</div>

        <div className={styles.getStarted}>
          {isAuthorized ? (
            <Link to="/workspace">Start Here</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>

      <div className={styles.timeForGraphic}>
        <div className={styles.csv}>
          <FaFileCsv className={styles.icon} />
        </div>

        <div className={styles.pdf}>
          <FaFilePdf className={styles.icon} />
        </div>

        <div className={styles.arrow}>
          <BsArrowReturnRight className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
