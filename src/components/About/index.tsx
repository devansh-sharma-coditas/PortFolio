import Lottie from "lottie-react";
import styles from "./About.module.scss";
import MainImage from "./MainImage.json";
const About = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["content"]}>
        <p className={styles.mainQuote}>
          Welcome to my portfolio website! I'm <b>Devansh Sharma</b> , an
          experienced backend engineer specializing in Java and Spring-Boot.
          Explore my work and see how I transform ideas into captivating digital
          experiences.
        </p>
        <br />
        <p>
          <b>
            <em>Code. Create. Inspire.</em>
          </b>
        </p>
        <br />
        <div className={styles["buttonContainer"]}>
          <button className={styles["button"]}>
            <a href="/files/Devansh Sharma- 7275521764-18.pdf" className={styles.link} download="Devansh Sharma-7275521764">
              Resume
            </a>
          </button>
          <button className={styles["button"]}>
            <a href="#profileQuestions" className={styles.link}>
              About Me
            </a>
          </button>
        </div>
      </div>
      <Lottie animationData={MainImage} className={styles["image"]} />
    </section>
  );
};

export default About;
