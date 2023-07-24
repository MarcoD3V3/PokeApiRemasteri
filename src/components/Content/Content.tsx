import React from "react";
import styles from "./Content.module.scss";
import { Searching } from "../Searching";

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentMain}>
        <Searching />
      </div>
      <div className={styles.contentMain}>asdasd</div>
    </div>
  );
};

export default Content;
