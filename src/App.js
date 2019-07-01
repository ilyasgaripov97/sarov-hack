import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";


//import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/general/HeaderComponent";

function App() {
  return (
    <div className="App">
        <div className={"header"}>
            ADMINKA
        </div>
        <HeaderComponent/>
        <Sidebar/>
    </div>
  );
}

export default App;
