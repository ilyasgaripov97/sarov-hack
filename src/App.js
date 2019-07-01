import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";


//import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/general/HeaderComponent";
import CurrentGarbageQueries from "./components/garbage/CurrentGarbageQueries";

function App() {

  return (

    <div className="App">
        <div className={"header"}>
            ADMINKA
        </div>
        <HeaderComponent/>
        <CurrentGarbageQueries/>
        <Sidebar/>
    </div>
  );
}


export default App;
