import React from "react";
import "./App.css"
import { Footer, Header } from "./components/base";
import Logo from "./components/utils/Logo";
import Searcher from "./components/utils/searchBar";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";

import { PopupWidget } from "react-calendly";

function VoiceBoot(){
  return(
    <div className="voice_boot_containder">
<div className="voice_boot">

</div>
    </div>
  )
}

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
        <PopupWidget
        url="https://calendly.com/moasko-dev"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
        <Footer/>
      </div>
      </ChakraProvider>
      </Router>

    </div>
  );
}

export default App;
