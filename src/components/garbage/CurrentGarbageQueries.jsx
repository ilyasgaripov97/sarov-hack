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
                <div className="containers">
                    <div className="label-container">
                        {/* Labels for items*/}
                        <div className="number-item-label">
                            <p><u>№</u></p>
                        </div>
                        <div className="photo-item-label">
                            <p><u>Фото</u></p>
                        </div>
                        <div className="geoplace-item-label">
                            <p><u>Местоположение</u></p>
                        </div>
                        <div className="comment-item-label">
                            <p><u>Комментарий</u></p>
                        </div>
                        <div className="rate-item-label">
                            <p><u>Важность</u></p>
                        </div>
                        <div className="date-item-label">
                            <p><u>Дата</u></p>
                        </div>
                    </div>
                    <div className="container">
                        {/*  Items */}
                        <div className="number-item">
                            <p>1</p>
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
                    <div className="container">
                        {/*  Items */}
                        <div className="number-item">
                            <p>2</p>
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
                    <div className="container">
                        {/*  Items */}
                        <div className="number-item">
                            <p>3</p>
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



            </div>
        )
    }
}

export default CurrentGarbageQueries;
