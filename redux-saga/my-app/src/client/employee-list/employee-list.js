/**
 * Created by MathDiskAsus on 1/9/2018.
 */
/**
 * Created by MathDiskAsus on 1/9/2018.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

import EmpForm from '../employee-add/empform.js';
import Thead from "./table-head.js";
import TableRow from "./table-body.js";
import 'bootstrap/dist/css/bootstrap.css';
import {requestApiData} from "./action";



 class EmpList extends Component {


 constructor(props) {
 super(props);
 this.state = {
 empList: [{
 empName: "mani",
 empId: 1,
 empSalary: 2000
 }, {
 empName: "gopi",
 empId: 2,
 empSalary: 2000
 }],
 currentObj:null
 };
 }


 addEmpObj = (empObj)=> {
 this.setState({
 empList: [...this.state.empList, empObj]
 })
 };
 onDelEmpObj = (empObj)=> {
 var empList=this.state.empList
 var currentObjIndex=empList.indexOf(empObj)
 empList.splice(currentObjIndex,1)
 this.setState({
 empList: empList
 })
 };
 onEditEmpObj = (empObj)=> {
 this.setState({
 currentObj: empObj
 })
 }
 onUpdateEmp = (empObj)=> {
 var empList=this.state.empList
 var currentndex=empList.indexOf(this.state.currentObj)
 empList[currentndex]=empObj
 this.setState({
 empList: empList,
 currentObj:null
 })
 };


 render() {
 return (
 <div>
 <EmpForm onAddEmpObj={this.addEmpObj} editEmpObj={this.onEditEmpObj} currentObj={this.state.currentObj}
 onUpdateEmp={this.onUpdateEmp}/>
 <table className="table-striped col-md-12 ">
 <Thead/>
 <tbody>
 {this.state.empList.map((empObj, index)=> <TableRow key={index} index={index} trObj={empObj}
 onDelEmpObj={this.onDelEmpObj}  onEditEmpObj={this.onEditEmpObj} />)}
 </tbody>
 </table>
 </div>

 );
 }
 }

 export default EmpList;

 