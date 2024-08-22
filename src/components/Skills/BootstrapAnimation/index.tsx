import styles from "./BootstrapAnimation.module.scss";
import img from "./bootstrap.png";
const BootstrapAnimation = () => {
  return (
    <div className={styles.main}>
      <img src={img} />
    </div>
  );
};

export default BootstrapAnimation;
