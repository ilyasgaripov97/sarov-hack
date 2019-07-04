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

                    <form action="http://u0755299.cp.regruhosting.ru/scripts/maidan/t.php" method="post" encType="multipart/form-data">
                        <input type="file" name="fileToUpload" id="fileToUpload"></input>
                        <input type="submit" value="Upload Image" name="submit"></input>
                    </form>
                </div>


            </div>
        )
    }

}

export default PhotoLoader;