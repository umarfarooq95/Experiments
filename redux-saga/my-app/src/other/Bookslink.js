/**
 * Created by rizwan on 13-Jun-17.
 */
import React, { Component } from 'react';
import './App.css';
class Link extends React.Component {

    render() {
        return (
            <div>
            {this.props.books.map((textbooks, i)=>
            {return(<div>{textbooks.website} {textbooks.Link}</div>)})}
            </div>

        );


    }
}

export default Link;