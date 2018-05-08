import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Home from './home';
import store from "./store";

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}

export default App;