//examnple1state
//
//{
//    class State extends React.Component {
//    constructor() {
//        super()
//
//        this.state = {
//            header: "Header from state...",
//            content: "Content from state...",
//            status:"iam very confusion"
//
//        }
//    }
//    render() {
//        var styleState={color:"blue"}
//        return (
//            <div style={styleState}>
//                <h1>{this.state.header}</h1>
//                <h2>{this.state.content}</h2>
//                <h2>{this.state.status}</h2>
//                <Createtable/>
//               <Sample/>
//            <Addelement num="2" />
//            </div>
//        );
//    }
//}
//class Addelement extends React.Component{
//    render(){
//        var i=2
//
//        return(
//        <div>
//        {i=='2'? "head":'hd'},{this.props.num}
//
//      </div>
//        )
//    }}
//
//}
//example2{
//     render() {
//        var myStyle = {
//
//            color: 'green'
//        }
//        var i=1
//        return (
//            <div style={myStyle}>
//
//
//           Text are Given Below!!!
//            <Addvalue/>
//            <Addelement/>
//        </div>
//    );
//    }
//}
//class Addvalue extends React.Component {
//    render(){
//        return(<div>
//            <h1>Gopi</h1><h1>Mani</h1>
//        </div>
//        )
//    }
//}
//class Addelement extends React.Component{
//    render(){
//        var i=1
//        return(<div>
//            <h1>Mani</h1>
//            <h1>{i == 1 ? 'True!' : 'False'}</h1>
//            <h1>kandan</h1>
//        </div>
//        )
//    }}
//}