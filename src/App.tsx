import React, { useState } from "react";
import Header from "./features/Header/Header";
import Home from "./features/Home/Home";
import Footer from "./features/Footer/Footer";
import Template from "./templates/InfoPage";

import test from "../assets/pages/politicasDePrivacidad.md?raw";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Template markdown={test} />
      <Footer />
    </div>
  );
}

export default App;
