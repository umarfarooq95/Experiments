import React, { Component } from 'react';
import './App.css';
import Link from './Bookslink.js'


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textbooks: [{website: "Backbone", Link: 'http://documentcloud.github.io/backbone/'},
                {website: 'AngularJS', Link: 'https://angularjs.org/'},
                {website: 'jQuery', Link: 'http://jquery.com/'},
                {website: 'Prototype:', Link: 'http://www.prototypejs.org/'},
                {website: 'React', Link: 'http://facebook.github.io/react/'},
                {website: 'Ember', Link: 'http://emberjs.com/'},
                {website: 'Knockoutjs', Link: 'http://knockoutjs.com/'},
                {website: 'Dojo', Link: 'http://dojotoolkit.org/'},
                {website: 'Mootools', Link: 'http://mootools.net/'},
                {website: 'Underscore', Link: 'http://documentcloud.github.io/underscore/'},
                {website: 'Lodash', Link: 'http://lodash.com/'},
                {website: 'Moment', Link: 'http://momentjs.com/'},
                {website: 'Express', Link: 'http://expressjs.com/'},
                {website: 'Koa', Link: 'http://koajs.com/'},
            ],
            stringvalue: "",
            filterTextbooks: []
        }
        this.onSearchString = this.onSearchString.bind(this)
    }


    componentDidMount() {
        this.setState({
            filterTextbooks: this.state.textbooks
        })
    }

    onSearchString(e) {
        var storeSearchval = e.target.value;
        var allTextbooks = this.state.textbooks

        var filtertextbooks = allTextbooks.filter((textbook)=> {
            return textbook.website.search(storeSearchval) != -1
        })
        this.setState({
            stringvalue: storeSearchval,
            filterTextbooks: filtertextbooks
        })
    }

    render() {
        return (

            <div>
                <div>
                    <input type="text" value={this.state.stringvalue}
                        onChange={this.onSearchString} placeholder="Type text"/>
                </div>
                <Link books={this.state.filterTextbooks}/>
            </div>

        );


    }

}
export default Books;