import Lottie from "lottie-react";
import styles from "./Skills.module.scss";
import htmlImage from "./html.json";
import cssImage from "./css.json";
import cImage from "./c.json";
import pythonImage from "./python.json";
import javascriptImage from "./javascript.json";
import BootstrapAnimation from "./BootstrapAnimation";
import CPlusPlus from "./CPlusPlusAnimation";
const Skills = () => {
  return (
    <section className={styles["skills"]}>
      <h2 className={styles["heading"]}>Skills</h2>
      <div className={styles["skills-grid"]}>

      <div className={styles["skill"]}>
          <CPlusPlus />
          <h3 className={styles["label"]}>Java</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={javascriptImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Javascript</h3>
        </div>
  
        <div className={styles["skill"]}>
          <Lottie animationData={htmlImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Html</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={cssImage} className={styles["heightImage"]} />
          <h3 className={styles["label"]}>Css-3</h3>
        </div>
      
        <div className={styles["skill"]}>
          <BootstrapAnimation />
          <h3 className={styles["label"]}>Bootstrap</h3>
        </div>
        <div className={styles["skill"]}>
          <Lottie animationData={pythonImage} className={styles["image"]} />
          <h3 className={styles["label"]}>Python</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
