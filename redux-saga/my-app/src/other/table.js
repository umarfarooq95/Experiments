import React, { Component } from 'react';
import $ from 'jquery'

import './App.css';
import './skeleton.css';
import './normalize.css';
import Header from './header';
import TableRow from './tablerow';
import Employeeform from './employeeFrom.js'

class Createtable extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onEmployeeAdd = this.onEmployeeAdd.bind(this);
        this.onDelTableRow = this.onDelTableRow.bind(this);
        this.onUpdateRow = this.onUpdateRow.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);

        this.state = {
            data: [],
            canShowTable: true,
            activeEmployee: {},
            employeeIndex: null

        }

    }
    componentDidMount() {

        $.get("http://localhost:3000/students/all", function (stuData) {
            console.log(stuData)

        });

    }


    onButtonClick() {
        this.setState({ canShowTable: !this.state.canShowTable })
    }

    onEmployeeAdd(newEmployee) {

        this.setState({
            data: [...this.state.data, newEmployee]
        })
    }

    updateEmployee(updateEmployee, employeeIndex) {
        var tabledata = this.state.data;
        var newData = tabledata.slice();
        newData.splice(employeeIndex, 1, updateEmployee);
        this.setState({
            data: newData,
            activeEmployee: null,
            employeeIndex: null

        })
    }

    onDelTableRow(sendTrData) {
        var tabledata = this.state.data;
        var rowindex = tabledata.indexOf(sendTrData);
        tabledata.splice(rowindex, 1);
        this.setState({
            data: tabledata
        })
    }

    onUpdateRow(updateEmployeeValue, employeeIndex) {
        this.setState({
            activeEmployee: updateEmployeeValue,
            employeeIndex
        })
    }

    render() {
        var style = {
            padding: 10, margin: 20
        }
        var table = null;

        if (this.state.canShowTable) {
            table = <table className="u-full-width" >
                <Header />
                <tbody>
                    {this.state.data.map((person, i) =>
                        <TableRow key={i} employeeIndex={i} trdata={person} onDelRow={this.onDelTableRow}
                            updateEmp={this.onUpdateRow} />)}
                </tbody>
            </table>
        }

        return (
            <div>
                <Employeeform onEmployeeAdd={this.onEmployeeAdd}
                    activeEmployee={this.state.activeEmployee}
                    employeeIndex={this.state.employeeIndex}
                    updateEmployee={this.updateEmployee} />

                {table}
                
                <button style={style} onClick={this.onButtonClick}>show Table</button>

            </div>
        );
    }
}

export default Createtable;

