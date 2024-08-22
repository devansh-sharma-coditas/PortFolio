import styles from "./Experience.module.scss";
const Experience = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading-container"]}>
        <h1 className={styles["heading"]}>Education and Experience</h1>
      </div>
      <div className={styles["content"]}>
        <div className={styles["experience"]}>
          <div className={styles["point"]}>
            <p className={styles["text"]}>
              <b>Bachelor Of Technology (Aug 2018 - Jun
              2022)</b>
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              AKTU University, Lucknow UttarPradesh
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Completed a comprehensive curriculum focused on Computer
              Science & Engineering.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Achieved a grade of 8.14, demonstrating strong academic
              performance.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Gained a solid foundation in core computer science concepts and
              programming languages.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Developed problem-solving skills and logical thinking through
              various projects and assignments.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Participated in team-based projects, fostering collaboration and
              communication skills.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Engaged in extracurricular activities to enhance leadership and
              organizational abilities.
            </p>
          </div>
        </div>
        <div className={styles["experience"]}>
          <div className={styles["point"]}>
            <p className={styles["text"]}>
              <b> Software Engineer at Coditas Solutions ( Aug 2022 -
              Present)</b>
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Developed and maintained web applications using java
              and Spring boot.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Collaborated with frontend for smooth user experiences.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Built approx 150+ APIS.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Optimized code using sonar qube.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Implemented new features and functionality in collaboration with
              cross-functional teams.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Followed agile development methodologies and version control using
              Git and GitHub/GitLab.
            </p>
          </div>
          <div className={styles["point"]}>
            •
            <p className={styles["text"]}>
              Experience in web-services like Aws Lambda, S3 bucket, SES , CloudWatch .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
