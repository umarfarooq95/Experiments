/**
 * Created by MathDiskAsus on 1/9/2018.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import $ from 'jquery';

class EmpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empName: "",
            empId: "",
            empSalary: "",
            showUpdateBtn: false,
            addSpanClass:()=>{
                var parent = $(this).parent();
                var spanElement = parent.find('span');
                spanElement.addClass('hide-span');
            }
        };
    }


    canCheckFormValidation = (form) => {
        var isFormFieldValid = true;
        for (var i = 0; i < form.elements.length; i++) {
            var formField = form.elements[i];
            if (formField.value === '' && formField.hasAttribute('required')) {
                var parent = $("#" + formField.id).parent();
                var requiredSpan = parent.find("span");
                requiredSpan.removeClass('hide-span');
                requiredSpan.addClass("error");
                isFormFieldValid = false
            }
        }
        return isFormFieldValid;
    };

    onChangeEmpName = (event) => {
       let empName=this.state.addSpanClass()
        var empNameValue = event.target.value;
        this.setState({
            empName: empNameValue
        })
    };

    onChangeEmpId = (event) => {
        var empNameValue = event.target.value;
        this.setState({
            empId: empNameValue
        })
    };

    onChangeEmpSalary(event) {

        var empNameValue = event.target.value;
        this.setState({
            empSalary: empNameValue
        })
    };

    onClickAddEmp = () => {
        var empObj = {
            empName: this.state.empName,
            empId: this.state.empId,
            empSalary: this.state.empSalary
        };
        var employeeForm = document.getElementById('employeeForm')
        console.log(employeeForm);
        if(!this.canCheckFormValidation(employeeForm)){
            return
        }

        this.setState({
            empName: "",
            empId: "",
            empSalary: ""
        });

        this.props.onAddEmpObj(empObj)
    };

    onClickUpdateEmp = () => {
        var empObj = {
            empName: this.state.empName,
            empId: this.state.empId,
            empSalary: this.state.empSalary
        };
        this.props.onUpdateEmp(empObj)

        this.setState({
            empName: "",
            empId: "",
            empSalary: "",
            showUpdateBtn: false
        });
    };


    onEditEmpObj = (empObj)=> {
        console.log(empObj)
    };


    componentWillReceiveProps(newprops) {
        if (newprops.currentObj) {
            this.setState({
                showUpdateBtn: true,
                empName: newprops.currentObj.empName,
                empId: newprops.currentObj.empId,
                empSalary: newprops.currentObj.empSalary
            });
        }

    }



    render() {

        let actionBtn = <div></div>;

        if (this.state.showUpdateBtn) {
            actionBtn = (
                <div className="btn btn-default">
                    <button onClick={this.onClickUpdateEmp} type="button">UpdateEmplyee</button>
                </div>
            )
        } else {
            actionBtn = (  <div className="btn btn-default">
                <button onClick={this.onClickAddEmp} type="button">AddEmployee</button>
            </div>)
        }
        return (
            <div>
                <form id="employeeForm">
                    <div className="form-group">
                        <div>
                            <label>EmpName</label> <input type="text" value={this.state.empName} name="empName"
                                                          className="form-control" id="empName"
                                                          onChange={this.onChangeEmpName} required/>
                            <span className="hide-span">Employee name is required</span>

                        </div>

                    </div>
                    <div className="form-group">
                        <div>
                            <label>EmpId</label> <input type="text" value={this.state.empId} name="empId"
                                                        className="form-control"  id="empId"
                                                        onChange={this.onChangeEmpId} required/>
                            <span className="hide-span">Employee age is required</span>
                        </div>

                    </div>
                    <div className="form-group">
                        <div>
                            <label>EmpSalary</label> <input type="text" value={this.state.empSalary} name="empSalary"
                                                            className="form-control" id="empSalary"
                                                            onChange={this.onChangeEmpSalary.bind(this)} required/>
                            <span className="hide-span">Employee salary is required</span>

                        </div>

                    </div>
                    {actionBtn}

                </form>
            </div>

        );
    }
}


export default EmpForm;