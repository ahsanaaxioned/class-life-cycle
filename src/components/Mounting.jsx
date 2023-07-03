import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: '0'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("mounting getDrivedStateFromProps ");
        return null;

    }
    componentDidMount() {
        console.log("mounting componentDidMount ")
    }

    render() {
        console.log('mounting: render')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>click on me</button>
            </div>
        )
    }
}
