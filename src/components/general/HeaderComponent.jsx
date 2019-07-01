import React from 'react';
import './style.css'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import CRUD from "../CRUD/CRUD";
import MAP from "../MAP/MAP";

import CurrentGarbageQueries from "../garbage/CurrentGarbageQueries";

class HeaderComponent extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="header-component">
                    <nav className="header-component__nav">
                        <a className="header-component__nav_item" href={"/"}>Текущие заявки</a>
                        <a className="header-component__nav_item" href={"/MAP"}>Карта свалок</a>
                        <a className="header-component__nav_item" href={"/CRUD"}>Рейтинг активистов(в разработке)</a>
                    </nav>
                </div>

                <div>
                    <Route path={'/CRUD'} component={CRUD}/>
                </div>
                <div>
                    <Route path={'/MAP'} component={MAP}/>
                </div>
                <div>
                    <Route exact path={'/'} component={CurrentGarbageQueries}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default HeaderComponent;
