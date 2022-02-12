import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactMe from "./components/ContactMe";
import "tachyons";
import { StickyContainer, Sticky } from "react-sticky";
import Particles from "react-tsparticles";

const particleOptions = {
  fpsLimit: 120,
  background: {
    color: {
      value: "#f6f7f1",
    },
  },
  particles: {
    color: {
      value: "#a1c9c9",
    },
    links: {
      color: "#a1c9c9",
      distance: 150,
      enable: true,
      opacity: 0.7,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};

function App() {
  const handlePrint = async (e) => {
    e.preventDefault();
    if (e.ctrlKey && e.keyCode === 80) {
      const link = document.createElement("a");
      link.setAttribute(
        "href",
        "https://drive.google.com/file/d/1vIdBzSmhb_69VIEoJS-U9scVJAHmbn64/view?usp=sharing"
      );
      link.setAttribute("target", "_blank");
      // link.setAttribute("download", "CV");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };
  document.addEventListener("keydown", handlePrint, false);
  return (
    <main>
      <Header />
      <StickyContainer>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/12"></div>
          <div className="w-full lg:w-10/12 flex flex-wrap">
            <div className="w-full lg:w-4/12">
              <Sticky topOffset={-20}>
                {({ style }) => (
                  <h1 style={{ ...style, marginTop: "100px" }}>
                    <div className="p-8">
                      <Profile />
                    </div>
                  </h1>
                )}
              </Sticky>
            </div>
            <div className="w-full lg:w-8/12">
              <Project />
              <Skills />

              <ContactMe />
            </div>
          </div>
          <div className="w-full lg:w-1/12"></div>
        </div>
      </StickyContainer>
      <div style={{ width: "100%", height: "50px", backgroundColor: "#404040", color: "white", paddingLeft: "30px", lineHeight: "50px"}}>
        Created by Raushan Kurmangali
      </div>
      <Particles
        id="tsparticles"
        className="particles"
        options={particleOptions}
      />
    </main>
  );
}

export default App;
