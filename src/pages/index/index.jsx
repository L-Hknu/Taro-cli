import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
import { navigateTo } from '@/utils/router'
class Index extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillMount() { }
  componentDidMount() {
  }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  goLink() {
    navigateTo('my/index',{
      id:'2546654654654',
    })
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    const { current } = this.state
    const list={
      op:"2",
      ip:'1'
    }
    return (
      <View>
        <Button onClick={()=>this.goLink()}>goLink</Button>
        {/* {current === 0 && <Pore></Pore>}
        {current === 1 && <Wsxc></Wsxc>}
        <AtTabBar
          fixed
          tabList={[
            { title: '动态相册', iconType: 'bullet-list', text: 'new' },
            { title: '开单', iconType: 'camera' },
            { title: '我的', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        /> */}
      </View>
    );
  }
}
export default Index;