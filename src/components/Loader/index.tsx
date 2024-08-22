import React from "react";
import styles from "./Loader.module.scss";

interface LoadingAnimationProps {
  size: number;
  borderWidth: number;
}

const Loader: React.FC<LoadingAnimationProps> = ({ size, borderWidth }) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${borderWidth}px`,
  };

  return (
    <div className={styles["loading-animation"]}>
      <div className={styles["circle"]} style={circleStyle} />
    </div>
  );
};

export default Loader;
