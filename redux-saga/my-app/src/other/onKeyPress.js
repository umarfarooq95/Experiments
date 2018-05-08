/**
 * Created by MathDiskAsus on 6/14/2017.
 */
import React, { Component } from 'react';
import Textprops from './Key.js'

class Usekeycode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            setdata: []
        }

        this.onChangedata = this.onChangedata.bind(this);
        this.onEnterkey = this.onEnterkey.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.focus = this.focus.bind(this);
        this.onClickAscending = this.onClickAscending.bind(this);
        this.onClickDscending = this.onClickDscending.bind(this);

    }

    onChangedata(e) {
        var textvalue = e.target.value
        this.setState({data: textvalue});
    }

    onEnterkey(e) {
        if (e.key == "Enter") {
            var textvalue = this.state.data
            var myarray = this.state.setdata
            this.setState({
                setdata: myarray.concat([textvalue]),
                data: ""
            })
        }
    }


    onClickButton() {
        var textvalue = this.state.data
        var myarray = this.state.setdata
        this.setState({setdata: myarray.concat([textvalue]),
            data: ""
        });
    }
    focus(){
        this.textinput.focus()
    }
    onClickAscending(){
        var ascending=this.state.setdata.sort()
        this.setState({
            setdata:ascending
        })
    }
    onClickDscending(){
       var descending=this.state.setdata.sort();
        this.setState({
            setdata:descending.reverse()

        })
    }
    render() {
        var styleComponent = {color: "red", background: "skyblue", display: "inline-block"}
        return (
            <div style={styleComponent}>
                <input type = "text" value = {this.state.data}
                    onChange = {this.onChangedata} onKeyPress={this.onEnterkey}
                ref={(inputvalue)=>{this.textinput=inputvalue}}/>
                <button onClick={this.onClickButton}>Clickhere</button>

                <Textprops inputValue={this.state.setdata}/>
                <input style={{display:"block"}} type="button" value="focusDom" onClick={this.focus}/>
                <input style={{display:"block"}} type="button" value="ascending" onClick={this.onClickAscending}/>
                <input style={{display:"block"}} type="button" value="descending" onClick={this.onClickDscending}/>

            </div>
        );
    }

}
export default Usekeycode;