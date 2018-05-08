import React, { Component } from 'react';

class TableRow extends React.Component {

    onDelClick() {
        this.props.onDelRow(this.props.trdata)
    }

    onUpdate() {
        this.props.updateEmp(this.props.trdata,this.props.employeeIndex)
    }

    render() {

        return (
            <tr>
                <td>{this.props.trdata.id}</td>
                <td>{this.props.trdata.name}</td>
                <td>{this.props.trdata.age}</td>
                <td>
                    <button onClick={this.onDelClick.bind(this)}>del</button>
                </td>
                <td>
                    <button onClick={this.onUpdate.bind(this)}>Update</button>
                </td>
            </tr>
        );
    }
}

// class UpdateEmployee extends React.Component{
//    render(){
//        return(
//            <div>
//            {this.props.update}
//            </div>
//        )
//    }
// }
export default TableRow;

