import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import classes from './Maps.module.css'

const mapData = {
    center: [54.9358300, 43.3235200],
    zoom: 13,
};


const coordinates0 = [
    [54.923953, 43.353398],
    [54.920873, 43.339090]
]; //1ая группа
const coordinates1 = [
    [54.932796, 43.328634]
]; //2ая группа
const coordinates2 = [
    [54.922586, 43.335442]
]; //3ая группа

const mrk0 = {
    iconContent: "Низкий уровень"
}
const mrk1 = {
    iconContent: "Средний уровень"
}
const mrk2 = {
    iconContent: "Высокий уровень"
}

const optmark0 = {
    iconColor: "green"
}
const optmark1 = {
    iconColor: "orange"
}
const optmark2 = {
    iconColor: "red"
}


class MAP extends React.Component {
    render () {

        return(
        <div>
            <h1>MAP</h1>
            <div className={classes.layer}>
                    <YMaps>
                        <Map defaultState={mapData} height="100%" width="100%">
                            {coordinates0.map(coordinates0 => <Placemark geometry={coordinates0} properties={mrk0} options={optmark0}/>)}
                            {coordinates1.map(coordinates1 => <Placemark geometry={coordinates1} properties={mrk1} options={optmark1}/>)}
                            {coordinates2.map(coordinates2 => <Placemark geometry={coordinates2} properties={mrk2} options={optmark2}/>)}
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
