import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from '@/pages/index'
import store from '@/store/index'
import './app.scss'
import '@tarojs/async-await'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


class App extends Component {
  componentDidMount () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/my/index',
      'pages/hook/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        { 

          text: '相册动态',
          pagePath: 'pages/index/index'
        },
        { 
          text: '我的',
          pagePath: 'pages/my/index'
        },
        { 
          text: 'Hook',
          pagePath: 'pages/hook/index'
        },
      ]
    }
  }


  componentDidShow () {
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
