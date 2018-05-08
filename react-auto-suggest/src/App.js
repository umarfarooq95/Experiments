import React, {Component} from 'react';
import AutoSuggest from './component/Auto-Suggest/auto-suggest';
import AuthExample from './component/Router'
import './App.css';

class App extends Component {
    state = {
        languages: [
            {
                name: 'C',
                year: 1972
            },
            {
                name: 'C#',
                year: 2000
            },
            {
                name: 'C++',
                year: 1983
            },
            {
                name: 'Clojure',
                year: 2007
            },
            {
                name: 'Elm',
                year: 2012
            },
            {
                name: 'Go',
                year: 2009
            },
            {
                name: 'Haskell',
                year: 1990
            },
            {
                name: 'Java',
                year: 1995
            },
            {
                name: 'Javascript',
                year: 1995
            },
            {
                name: 'Perl',
                year: 1987
            },
            {
                name: 'PHP',
                year: 1995
            },
            {
                name: 'Python',
                year: 1991
            },
            {
                name: 'Ruby',
                year: 1995
            },
            {
                name: 'Scala',
                year: 2003
            }
        ]
    };

    onSelectedItems=(value)=>{
        console.log(value)
    };

    render() {
        return (
            <div>
                <AuthExample/>
                {/* <div className="App">
                <AutoSuggest
                    dataSource={this.state.languages}
                    onSelectedItems={this.onSelectedItems}
                />
            </div>*/}
            </div>
        );
    }
}

export default App;
