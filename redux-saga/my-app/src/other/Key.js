/**
 * Created by rizwan on 13-Jun-17.
 */
import React, { Component } from 'react';
import './App.css';


class Textprops extends React.Component {

    render() {
        return (
            <div>
                {this.props.inputValue.map((items, i)=>
                {return(<div>{items}</div>)})}
            </div>

        );


    }
}

export default Textprops;