import React from 'react';



//import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/general/HeaderComponent";
import CurrentGarbageQueries from "./components/garbage/CurrentGarbageQueries";

function App() {

  return (

    <div className="App">
        <div className={"header"}>
        </div>
        <HeaderComponent/>
        <CurrentGarbageQueries/>

    </div>
  );
}


export default App;
