import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import { getUserBusinessList } from '@/services/wsxc'


@inject('counterStore','homeStore')
@observer
class My extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    console.log('componentWillMount');
    console.log(this.$router.params) 
    console.log(this.props);
    
    this.asy()
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
   asy=async()=>{
     let obj= await getUserBusinessList().then(res=>{
       return res
     })
     obj.name='王伟'
  }
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
      <View className='My'>
        <AtButton type='primary' size='normal' onClick={this.increment}>+</AtButton>
        <AtButton type='primary' size='normal' onClick={this.decrement}>-</AtButton>
        <AtButton onClick={this.incrementAsync}>Add Async</AtButton>
        <Text>{counter}</Text>
        <AtButton onClick={this.getUserBusinessList}>Add </AtButton>
      </View>
    )
  }
}

export default My 
