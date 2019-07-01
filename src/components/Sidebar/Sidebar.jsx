import React from 'react';
import {Route} from "react-router-dom";
import {BrowserRouter, Router} from "react-router-dom";
import CRUD from "../CRUD/CRUD";
import MAP from "../MAP/MAP";
import Main from "../Main/Main";


const Sidebar = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <a href={"/"}>Main</a>
                </div>
                <div>
                    <a href={"/CRUD"}>CRUD</a>
                </div>
                <div>
                    <a href={"/MAP"}>MAP</a>
                </div>

                <div>
                    <Route path={'/CRUD'} component={CRUD}/>
                </div>

                <div>
                    <Route path={'/MAP'} component={MAP}/>
                </div>

                <div>
                    <Route path={'/'} component={Main}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default Sidebar;
