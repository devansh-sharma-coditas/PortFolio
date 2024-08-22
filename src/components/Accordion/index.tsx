import styles from "./Accordion.module.scss";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const Accordion = ({
  question,
  answer,
  isOpen,
  toggleAccordion,
}: AccordionProps) => {
  return (
    <div className={styles["accordion"]}>
      <div
        className={[
          styles[`accordion-header`],
          styles[isOpen ? "open" : ""],
        ].join(" ")}
        onClick={toggleAccordion}
      >
        <span>{question}</span>
        <span className={`fas fa-chevron-${isOpen ? "up" : "down"}`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <div className={styles["accordion-content"]}>{answer}</div>}
    </div>
  );
};

export default Accordion;
