import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import ProfileSummary from "./components/ProfileSummary";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowLoader(false), 1111);
  }, []);
  return (
    <>
      {showLoader ? <Loader size={80} borderWidth={4} /> : <Navbar />}
      <div className="container-grey" id="about">
        <About />
      </div>
      <div className="container-white" id="experience">
        <Experience />
      </div>
      <div className="container-grey" id="skills">
        <Skills />
      </div>
      <div className="container-white" id="profileQuestions">
        <ProfileSummary />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
