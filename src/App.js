import { useRef } from "react";
import "./App.css";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Projects from "./Component/Projects";
import "./Component/component.css";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="app-container">
      <Header projectsRef={projectsRef} contactRef={contactRef} />
      <div className="content-container">
        <About />

        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
