import React from 'react';
import axios from 'axios';
import './TestTable.css'

class TestTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null,
            isLoaded: false,
            output: [],
            imgpth: "",
            arr: {}
        };
    }

    componentWillMount() {
        //get json
        axios.get(`http://u0755299.cp.regruhosting.ru/scripts/test.php`)
            .then(res => {
                const output= res.data;
                /*console.log(output.data[0].img_path);
                console.log(output.data);
                const imgpth = output.data[0].img_path;*/
                const arr = output.data;
                this.setState({arr});
            })
    }


    render() {
        {console.log(this.state.arr)}
        {console.log(Object.keys(this.state.arr))}
    /*    var data = ["one", "two", "three", "four"].map( (item, i) => {
            return (
                <tr key={i}>
                    <td>{item}</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            );
        });*/

        const template = Object.keys(this.state.arr).map(item => <div key={this.state.arr[item].id}><br />
        <div>{this.state.arr[item].id}</div><br />
        {this.state.arr[item].img_path}<br />
        {this.state.arr[item].geo_place}<br />
        {this.state.arr[item].comment}<br />
        {this.state.arr[item].importance}<br />
        {this.state.arr[item].date}</div>)

        return (
            <table><tbody>{ template }</tbody></table>
        );
    }


 /*   render() {

        return (
            <div>
                <ol>

                    {console.log(this.state.arr[0])}
                    {console.log(this.state.arr[1])}
                    {console.log(Object.keys(this.state.arr))}
                    {Object.keys(this.state.arr)}
                </ol>
            </div>
        );
    }*/
}

export default TestTable;
