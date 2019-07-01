import React from 'react';
import './garbage-style.css'

class CurrentGarbageQueries extends React.Component {
    render() {
        return(
            <div className="current-garbage-queries">
                <header>
                    {/*<div className="sort-properties">*/}
                    {/*    <div className="sort-properties__item">*/}
                    {/*        <u>Фото</u>*/}

                    {/*    </div>*/}
                    {/*    <div className="sort-properties__item">*/}
                    {/*        <u>Место</u>*/}
                    {/*    </div>*/}
                    {/*    <div className="sort-properties__item">*/}
                    {/*        <u>Комментарий</u>*/}

                    {/*    </div>*/}
                    {/*    <div className="sort-properties__item"><u>Важность</u></div>*/}
                    {/*    <div className="sort-properties__item"><u>Дата</u></div>*/}
                    {/*</div>*/}


                    {/*<img src="" alt=""/>*/}
                    {/*<div className="image-place-holder"></div>*/}
                    {/*<div className="geo-position-box"></div>*/}
                    {/*<div className="comment-box"></div>*/}
                    {/*<div className="importance-box"></div>*/}
                    {/*<div className="date-box"></div>*/}

                </header>
                
                <div className="container">
                    {/* Labels for items*/}
                    <div className="number-item-label">

                    </div>
                    <div className="photo-item-label">

                    </div>
                    <div className="geoplace-item-label">

                    </div>
                    <div className="comment-item-label">

                    </div>
                    <div className="rate-item-label">

                    </div>
                    <div className="date-item-label">

                    </div>

                    {/*  Items */}
                    <div className="number-item">

                    </div>
                    <div className="photo-item">

                    </div>
                    <div className="geoplace-item">

                    </div>
                    <div className="comment-item">

                    </div>
                    <div className="rate-item">

                    </div>
                    <div className="date-item">

                    </div>
                </div>


            </div>
        )
    }
}

export default CurrentGarbageQueries;
