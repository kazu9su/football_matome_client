import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import { View, Text } from 'react-native'
import App from './src/containers/App'

if(typeof global.self === "undefined") {
    global.self = global;
}

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

class FootballMatomeClient extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('football_matome_client', () => FootballMatomeClient)
