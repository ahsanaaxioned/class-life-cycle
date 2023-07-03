import React, { Component } from 'react'
import Unmounting from './Unmounting';

export default class Test extends Component {
    state = {
        display: true
    }
    deletehandler = ()=> {
        this.setState({display:false})
    }
  render() {
    let comp;
    if(this.state.display){
        comp = <Unmounting />
    }
    return (
      <div>
        {comp}
        <button onClick={this.deletehandler}>click to delete</button>
      </div>
    )
  }
}
