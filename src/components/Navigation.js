import {
    StackNavigator
} from 'react-navigation'

import Home from './Home'
import Detail from './Detail'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Footballまとめ',
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '記事詳細',
    },
  },
})
