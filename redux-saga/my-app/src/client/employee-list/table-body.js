
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickEmpDel = ()=> {
       this.props.onDelEmpObj(this.props.trObj) 
    };
    onClickEmpEdit = ()=> {
        this.props.onEditEmpObj(this.props.trObj)

    };

    render() {
        return (
            <tr>
                <td>{this.props.index + 1 }</td>
                <td>{this.props.trObj.empName}</td>
                <td>{this.props.trObj.empId}</td>
                <td>{this.props.trObj.empSalary}</td>
                <td>
                    <button className="btn btn-default" type="button" onClick={this.onClickEmpDel}>Delete</button>
                    <button className="btn btn-default" type="button" onClick={this.onClickEmpEdit}>Edit</button>
                </td>
            </tr>

        );
    }
}

export default TableRow;