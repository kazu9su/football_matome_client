import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class Detail extends Component {
  render() {
    const url = this.props.navigation.state.params
    return (
      <WebView
        source={{uri: url}}
        styles={{marginTop: 20}}
      />
    )
  }
}
