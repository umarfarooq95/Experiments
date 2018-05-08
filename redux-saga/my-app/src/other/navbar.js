import React, { Component } from 'react';
import './App.css';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemvalues: ['Home', 'Services', 'About', 'Contact us'],
            Selecteditem: ""
        };
        this.onClickbutton = this.onClickbutton.bind(this)
    }

    onClickbutton(e) {
        var selectValue = e.target.value
        this.setState({
            Selecteditem: selectValue
        })
    }

    render() {
        return (<div>{this.state.itemvalues.map((items, i) => {
            return (<input type="button" value={items} onClick={this.onClickbutton}/>)

        })}
            <div>
                <h1>Selected:{this.state.Selecteditem}</h1>
            </div>
        </div>)
    }


}
export default Nav;