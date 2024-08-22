import { useState } from "react";
import { QNA } from "../../common/data";
import Accordion from "../Accordion";
import styles from "./ProfileSummary.module.scss";
const ProfileSummary = () => {
  const [isOpen, setIsOpen] = useState<number>(0);

  const toggleAccordion = (num: number) => {
    if (num !== isOpen) {
      setIsOpen(num);
    } else {
      setIsOpen(-1);
    }
  };
  return (
    <section className={styles["profile"]}>
      <h2>To Know More About Me Read These</h2>
      <br />
      {QNA.map(({ question, answer }, index) => {
        return (
          <Accordion
            question={question}
            answer={answer}
            isOpen={index === isOpen}
            toggleAccordion={() => {
              toggleAccordion(index);
            }}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default ProfileSummary;
