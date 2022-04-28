// what you actually see on the page

import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./Footer";

import './App.css';

// const App = () => <PortfolioContainer />;

const App = () => {
  return (
    <>
    <PortfolioContainer />,
    <Footer />
    </> 
  );
}

export default App;
