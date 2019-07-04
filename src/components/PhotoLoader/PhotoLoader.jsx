import React from 'react';
import './style.css';

class PhotoLoader extends React.Component {

    render() {
        return (
            <div className="photoloader-container0">

                <div className="inner_container">
                    <h1 className="container__logo">GG - Garbage Gone</h1>
                    <h2>Загрузите файл</h2>

                    <canvas id="myCanvas" width="320" height="180"></canvas>

                    <form className="form_container" action="http://u0755299.cp.regruhosting.ru/scripts/uploads/tryback/alpof/suda.php" enctype="multipart/form-data" method="post">
                        <input type="file"
                               id="garbage" name="garbage"
                               accept="image/png, image/jpeg"></input>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>


            </div>
        )
    }

}

export default PhotoLoader;