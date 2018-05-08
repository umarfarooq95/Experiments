/**
 * Created by rizwan on 01-Jun-17.
 */

import React, { Component } from 'react';
import './App.css';
//
//class Useprops extends React.Component{
//    render() {
//       var styleProps={color:"green",
//           padding: 50,
//           color: '#0080a8',
//           font_size: 144,
//           background:'rgb(54, 25, 43)',
//           display:'inlineblock',
//             width:300
//
//       }
//        return (
//            <div style={styleProps}>
//                <h1>GOPI{this.props.dergee}</h1>
//                <h1>MANI{this.props.dergee}</h1>
//            </div>
//        );
//    }
//}
//
//Useprops.defaultProps = {
//    dergee: "MCA"
//}
//
//
//export default Useprops;

/*class App extends React.Component {
   constructor() {
       super();

       this.state = {
           header: 'Hello',
           content: "Hai"
       }
   }

   render() {
    var   stylestate={
           color:'rgb(154, 15, 15)',
           background:'rgb(111, 215, 143)',
           padding:50,
           margin:50,
        width:300
       }
       return (
           <div style={stylestate}>
               <Header headerProp = {this.state.header}/>
               <Content contentProp = {this.state.content}/>

           </div>
       );
   }
}

class Header extends React.Component {
   render() {
       return (
           <div>
               <h1>{this.props.headerProp}World</h1>
           </div>
       );
   }
}

class Content extends React.Component {
   render() {
       return (
           <div>
               <h2>{this.props.contentProp}Gopi</h2>
           </div>
       );
   }
}

export default App;*/

/**
 * Created by rizwan on 01-Jun-17.
 */
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setStateHandler=this.setStateHandler.bind(this)
    };

    setStateHandler() {
        var item = "setState..."
        var myArray =this.state.data;
        myArray.push(item)
        this.setState({data: myArray})
    };

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

export default App


