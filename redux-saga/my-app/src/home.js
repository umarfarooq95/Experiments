/**
 * Created by MathDiskAsus on 1/17/2018.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {requestApiData} from "./action";


class Home extends React.Component {

    render() {
        const {results = []}  = this.props.data
        return (
            <div>
                <button onClick={this.props.onFetchData}>Fetch Data</button>
                <div>
                    {results.map((ele, index)=> {
                        return (
                            <div key={index}>
                                <h1>{ele.gender}</h1>
                                <h1>{ele.name.first}</h1>
                                <h1>{ele.name.last}</h1>
                                <img src={ele.picture.medium} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: ()=> {
            console.log(dispatch(requestApiData()))
        }
    }
}

const mapStateToProps = state => ({
    data: state.helloWorld
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)