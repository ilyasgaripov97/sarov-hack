import React from 'react';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import CRUD from "../CRUD/CRUD";
import MAP from "../MAP/MAP";
import Main from "../Main/Main";
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <BrowserRouter>

                <div className={classes.sidebar}>
                    <a>ADMIN</a>
                </div>
                <div className={classes.sidebar}>
                    <a href={"/"}>Main</a>
                </div>
                <div className={classes.sidebar}>
                    <a href={"/CRUD"}>CRUD</a>
                </div>
                <div className={classes.sidebar}>
                    <a href={"/MAP"}>MAP</a>
                </div>

                <div>
                    <Route path={'/CRUD'} component={CRUD}/>
                </div>

                <div>
                    <Route path={'/MAP'} component={MAP}/>
                </div>

                <div>
                    <Route exact path={'/'} component={Main}/>
                </div>


        </BrowserRouter>
    )
}

export default Sidebar;
