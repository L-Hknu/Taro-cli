import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import { getUserBusinessList } from '@/services/wsxc'


@inject('counterStore')
@observer
class Pore extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    console.log('componentWillMount');
    getUserBusinessList()
  }
  getUserBusinessList(){
    getUserBusinessList()
  }
  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='Pore'>
        <AtButton type='primary' size='normal' onClick={this.increment}>+</AtButton>
        <AtButton type='primary' size='normal' onClick={this.decrement}>-</AtButton>
        <AtButton onClick={this.incrementAsync}>Add Async</AtButton>
        <Text>{counter}</Text>
        <AtButton onClick={this.getUserBusinessList}>Add </AtButton>
      </View>
    )
  }
}

export default Pore 
