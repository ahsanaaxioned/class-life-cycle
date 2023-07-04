import React, { Component } from 'react'

export default class Unmounting extends Component {
    componentWillUnmount () {
        alert('hey user..!your components will unmount')
    }
  render() {
    return (
      <div>
        <h1>hey user</h1>
      </div>
    )
  }
}
