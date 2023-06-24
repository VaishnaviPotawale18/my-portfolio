// // import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SocialLink from "./components/SocialLink";
import Contact from "./components/Contact";
import SkillSlider from "./components/SkillSlider";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <SkillSlider/>
      
<Experience/>
      <Project />
      <Contact />
      <SocialLink />
      {/* <Tp/> */}
    </>
  );
}

export default App;
