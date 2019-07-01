import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import classes from './Maps.module.css'

const mapData = {
    center: [54.9358300, 43.3235200],
    zoom: 13,
};

const coordinates = [
    [54.923953, 43.353398],
    [54.932796, 43.328634]
];



class MAP extends React.Component {

    render () {

        return(
        <div>
            <h1>MAP</h1>
            <div className={classes.layer}>
                    <YMaps>
                        <Map defaultState={mapData} height="100%" width="100%">
                            {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                        </Map>
                    </YMaps>
            </div>
        </div>
        )
    }
}

/*const MAP = () => {
    return (
        <div>
            {this.lat}
            <h1>MAP</h1>
                <div className={classes.layer}>
                    <YMaps>
                        <Map defaultState={mapData}   height="100%" width="100%">
                            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                        </Map>
                    </YMaps>
                </div>
        </div>
    )
}*/

export default MAP;
