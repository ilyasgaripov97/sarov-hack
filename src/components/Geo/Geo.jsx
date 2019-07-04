import React from 'react';
import './style.css'

class Geo extends React.Component {

    render() {
        return(
            <div className="geo-container">

                <div className="inner_container">
                    <h1 className="container__logo">GG - Garbage Gone</h1>
                    <h2>Введите широту и долготу</h2>

                    <form className="form_container" action="http://u0755299.cp.regruhosting.ru/scripts/uploads/tryback/alpof/alpof/geo.php" method="post">
                        <input type="text" placeholder="Latitude" name="latitude" required></input>
                        <input type="text" placeholder="Longitude" name="longitude" required></input>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>

            </div>
        )
    }
}

export default Geo;