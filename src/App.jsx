import { useState } from "react";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Skill from "./Components/Skill";
import Work from "./Components/work/Work";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Skill />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
