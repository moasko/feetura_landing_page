import React from "react";
import "./App.css"
import { Footer, Header } from "./components/base";
import Logo from "./components/utils/Logo";
import Searcher from "./components/utils/searchBar";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ChakraProvider>
      <div className="conterBox">
        <Header/>
        <div className="center_page">
           <Logo />
           <Searcher/>
        </div>
        <Footer/>
      </div>
      </ChakraProvider>
      </Router>
      
    </div>
  );
}

export default App;
