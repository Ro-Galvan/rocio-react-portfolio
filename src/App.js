// what you actually see on the page

import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";


// const App = () => <PortfolioContainer />;

const App = () => {
  return (
    <div>
    <PortfolioContainer />
    <Footer />
    </div> 
  );
}

export default App;
