import { useState } from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles["navbar-container"]}>
      <div className={styles["navbar"]}>
        <a className={styles["heading"]} href="#about">
          Devansh Sharma 
        </a>
        <div className={styles["navbar-links-container"]}>
          <a href="#about" className={styles["navbar-link"]}>
            About
          </a>
          <a href="#experience" className={styles["navbar-link"]}>
            Experience
          </a>
          <a href="#skills" className={styles["navbar-link"]}>
            Skills
          </a>
          <a href="#profileQuestions" className={styles["navbar-link"]}>
            Profile Summary
          </a>
          <a href="#contact" className={styles["navbar-link"]}>
            Contact
          </a>
        </div>
        <div
          data-type="BurgerMenu"
          className={styles["burger-menu"]}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        {showMenu && (
          <div
            data-type="MobileMenu"
            className={[
              styles["mobile-menu"],
              showMenu ? styles["teleport-show"] : "",
            ].join(" ")}
          >
            <div className={styles["top-container"]}>
              <span className={styles["menu-heading"]}>Devansh Sharma</span>
              <div
                data-type="CloseMobileMenu"
                className={styles["close-menu"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <svg viewBox="0 0 1024 1024" className={styles["close-icon"]}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className={styles["mobile-nav-container"]}>
              <a
                href="#about"
                className={styles["mobile-nav-Link"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About
              </a>
              <a
                href="#experience"
                className={styles["mobile-nav-Link"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Experience
              </a>
              <a
                href="#skills"
                className={styles["mobile-nav-Link"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Skills
              </a>
              <a
                href="#profileQuestions"
                className={styles["mobile-nav-Link"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Profile Summary
              </a>
              <a
                href="#contact"
                className={styles["mobile-nav-Link"]}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
