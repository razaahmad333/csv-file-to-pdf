import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { UserState } from "../../reduxStuffs/user/reducer";
import { useNavigate } from "react-router-dom";

interface Table {
  [key: string]: any;
}

export default function Workspace() {
  const isAuthorized = useSelector((state: UserState) => state.loggedIn);
  const navigate = useNavigate();
  const csvFileRef = useRef<HTMLInputElement>(null);
  const [table, setTable] = React.useState<Table>([]);
  const [fileName, setFileName] = React.useState<string>("");

  const handleChooseFileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    csvFileRef.current!.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = reader.result as string;

      let table = csv
        .split("\n")
        .map((row) => row.split(","))
        .slice(0, 10);
      setTable(table);
    };
    setFileName(file.name);

    reader.readAsText(file);
  };

  if (!isAuthorized) {
    navigate("/login");
  }

  return (
    <div className={styles.workspace}>
      <h1>Welcome to Workspace</h1>
      <div className={styles.formControl}>
        <input
          ref={csvFileRef}
          onChange={handleFileChange}
          className={styles.csvFileInput}
          type="file"
          accept=".csv"
          multiple={false}
        />
        <button className={styles.inputButton} onClick={handleChooseFileClick}>
          {fileName.length === 0 ? "Choose File" : "Choose Another File"}
        </button>
      </div>
      <div className={styles.fileName}>
        <span>{fileName}</span>
      </div>
      {table.length !== 0 && (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                {table[0].slice(0, 10).map((header: string, k: number) => (
                  <th key={k}>
                    {header.replaceAll('"', "").replaceAll("'", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.slice(1).map((row: string[], i: number) => (
                <tr key={i}>
                  {row.slice(0, 10).map((cell: string, j: number) => (
                    <td key={i * 1000 + j}>
                      {cell.replaceAll('"', "").replaceAll("'", "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}{" "}
    </div>
  );
}
