import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFeeds, openLink } from '../actions'
import { addNavigationHelpers } from 'react-navigation'
import Navigation from '../components/Navigation'


class App extends Component {
  static propTypes = {
    feeds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchFeeds())
  }

  showDetail(url) {
    this.props.nav.navigate('Detail', url)
  }

  render() {
    const { feeds, isFetching, nav } = this.props
    return (
      <Navigation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: nav,
        })}
        screenProps={{ feeds, isFetching }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const {
    isFetching,
    items: feeds,
  } = state.feeds || {
    isFetching: true,
    items: [],
  }

  const nav = state.nav

  return {
    feeds,
    isFetching,
    nav,
  }
}

export default connect(mapStateToProps)(App)
