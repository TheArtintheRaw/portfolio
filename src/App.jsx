import { BrowserRouter } from "react-router-dom";
import { useState, toggleDarkMode } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  Socials,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 bg-secondary text-primary">
        <div className="bg-secondary">
          <div className={"h-full w-full mx-auto py-2"}>
            <Navbar />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <Socials />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
