import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("../../../assets/about/unicon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>2017</h3>
              <p>
              10th
              Saint John’s Convent School, Karnataka.
               <br />
               88.32%
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("../../../assets/about/unicon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3> 2019</h3>
              <p>
             12th | PCMB
            Sir. M V PU College, Davanagere, Karnataka.
            <br />78.8%

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/download.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>2023</h3>
              <p>
              Bachelor of Engineering|Computer Science & Engineering  <br />
              Jain Institute of Technology,Karnataka
               <br /> CGPA: 8.25
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
