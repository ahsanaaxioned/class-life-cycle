import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props) {
      super(props)
    }

    static getDerivedStateFromProps(props, state){
        console.log("updating: getDrivedStateFromProps ")
        return null
      }
    
      componentDidMount(){
        console.log("Updating: componentDidMount ")
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log('Updating shouldComponentUpdate')
        return true
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Updating getSnapshotBeforeUpdate');
        return null;
      }
      componentDidUpdate(prevProps,prevState){
        console.log(prevProps.number);
        console.log(this.props.number )
        if(prevProps.number !== this.props.number ){
            console.log('Updating: component updated')
        }
      }
    
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
