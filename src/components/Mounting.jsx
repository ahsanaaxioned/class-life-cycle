import React, { Component } from 'react';
import Updating from './Updating';

export default class Mounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("mounting: getDrivedStateFromProps ");
        return null;

    }
    componentDidMount() {
        console.log("mounting: componentDidMount ")
    }

    increament = ()=> {
        this.setState({count:this.state.count + 1})
        // console.log(count)
    }
    render() {
        console.log('mounting: render')
        return (
            <div>
                <Updating number = {this.state.count}/>        
                <button onClick={this.increament}>click on me</button>
            </div>
        )
    }
}
