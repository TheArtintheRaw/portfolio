import { BrowserRouter } from "react-router-dom";
import { useState, toggleDarkMode } from "react";

import {
  About,
  Contact,
  Experience,

  Navbar,
  Tech,
  Works,
  Socials,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="border z-0 bg-secondary text-primary dark:bg-primary dark:text-secondary">
        <div className="bg-secondary dark:bg-primary">
          <div className="h-full w-full mx-0 py-2">
            <Navbar className="z-20" />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-10">
          <Contact />
          <Socials />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
