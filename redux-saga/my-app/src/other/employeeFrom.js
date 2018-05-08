/**
 * Created by rizwan on 08-Jun-17.
 */
import React, { Component } from 'react';
//import UpdateEmployee from'./tablerow.js'
import './App.css';

class Employeeform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:this.props.activeEmployee.id || " ",
            name:this.props.activeEmployee.name || " ",
            age:this.props.activeEmployee.age || " ",
            isUpdating:false,
            isvalidate:false
        };

        this.clickAddEmployee = this.clickAddEmployee.bind(this);
        this.onIdChange = this.onIdChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    onIdChange(e) {
        var newId = e.target.value;
        this.setState({
            id: newId
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.activeEmployee){
            this.setState({
                id:newProps.activeEmployee.id,
                name:newProps.activeEmployee.name,
                age:newProps.activeEmployee.age,
                isUpdating:false
            })
        }
    }
    onNameChange(e) {
        var newname = e.target.value;
        this.setState({
            name: newname
        })
if(newname.length>5){
        this.setState({
            isvalidate:true
    })
}

    }

    onAgeChange(e) {
        var newage = e.target.value;
        this.setState({
            age: newage
        })
    }
    updateEmployee(){
        var updatedEmployee = {
            id:this.state.id,
            name:this.state.name,
            age:this.state.age
        };
        this.props.updateEmployee(updatedEmployee,this.props.employeeIndex);
        this.setState({
            id: "",
            name: "",
            age: "",
            isUpdating:false

        })
    }

    clickAddEmployee() {
        var employee = this.state;
        this.props.onEmployeeAdd(employee)
        this.setState({
            id: "",
            name: "",
            age: "",
            isUpdating:false
        })

    }

    render() {
        let actionBtn  = <div></div>;
        if(this.state.isUpdating){
            actionBtn = (
                <div style={{padding: 5, margin: 10}}>
                    <button onClick={this.updateEmployee}>updateEmployee</button>
                </div>
            )
        }
        else {
            actionBtn = 
                <div style={{padding: 5, margin: 10}}>
                    <button onClick={this.clickAddEmployee}>AddEmployee</button>
                </div>
            
        }
        if(this.state.isvalidate){
            <div>Id more then 5 letter </div>
        }
        return (
            <div>

                <label>EmployeeId </label>
                <input type = "text" value={this.state.id} onChange = {this.onIdChange}  />

                <label>EmployeeName </label>
                <input type = "text"  value={this.state.name} onChange = {this.onNameChange}/>

                <label>EmployeeAge </label>
                <input type = "text" value={this.state.age} onChange = {this.onAgeChange}/>

            {actionBtn}

            </div>)
    }
}

export default Employeeform;