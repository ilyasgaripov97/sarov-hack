import React from 'react';
import './style.css'

class HeaderComponent extends React.Component {
    render() {
        return(
            <div className="header-component">
                <nav className="header-component__nav">
                    <a className="header-component__nav_item" href="#">Текущие заявки</a>
                    <a className="header-component__nav_item" href="#">Карта свалок</a>
                    <a className="header-component__nav_item" href="#">Рейтинг активистов(в разработке)</a>
                </nav>
            </div>
        )
    }
}

export default HeaderComponent;