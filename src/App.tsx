import React from "react";
import Header from "./features/Header/Header";

import Footer from "./features/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import Container from "@material-ui/core/Container";
import SwipeableTemporaryDrawer from "@/features/SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";

const App = () => (
  <Container maxWidth="xl" disableGutters>
    <BrowserRouter>
      <div className="App">
        <SwipeableTemporaryDrawer />
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  </Container>
);

export default App;
