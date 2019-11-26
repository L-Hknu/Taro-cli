import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
import Pore from '@/pages/Pore/Pore'
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
    Taro.navigateTo({
      url: '/pages/Pore/Pore'
    })
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    const { current } = this.state
    return (
      <View>
        {current === 0 && <Pore></Pore>}

        <AtTabBar
          fixed
          tabList={[
            { title: '动态相册', iconType: 'bullet-list', text: 'new' },
            { title: '开单', iconType: 'camera' },
            { title: '我的', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}
export default Index;