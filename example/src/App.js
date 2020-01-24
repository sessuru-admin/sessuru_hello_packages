import React, { Component } from 'react'

import ExampleComponent from 'sessuru_hello_packages'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='sample published on github packages' />
      </div>
    )
  }
}
