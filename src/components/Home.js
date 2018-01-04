import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native'

export default class Home extends Component {
  static propTypes = {
    feeds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    showDetail: PropTypes.func.isRequired,
  }

  showDetail(url) {
    this.props.navigation.navigate('Detail', url)
  }

  render() {
    console.log(this.props)
    console.log('hoge')
    const {isFetching, feeds} = this.props.screenProps
    const isEmpty = feeds === undefined || feeds.length === 0
    return (
      <View style={{flex: 1}}>
          {isEmpty ? (isFetching ? <Text>Loading...</Text> : <Text>Empty.</Text>)
            : <FlatList
                data={feeds}
                renderItem={({item}) =>
                  <TouchableOpacity onPress={() => this.showDetail(item.link)}>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                }
              />
          }
      </View>
    )
  }
}
