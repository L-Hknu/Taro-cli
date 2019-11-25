import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Wsxc extends PureComponent {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {} //在组件在装载发生前被立刻调用
  componentDidMount () {
    navigateTo  // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
    switchTab   // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    reLaunch    // 关闭所有页面，打开到应用内的某个页面
    redirectTo  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    navigateBack// 关闭当前页面，返回上一页面或多级页面
  }  //在组件被装载后立即调用
  componentWillReceiveProps (nextProps,nextContext) {}  //在已经装载的组件接收到新属性前调用
  shouldComponentUpdate(){} // 让 Taro 知道组件的输出是否不受 state 或 props 当前变化的影响

//--------------------------------------------------------------------这几方法在第一次渲染时不会被调用
  componentWillUpdate () {}  // 当接收到新的 props 或 state 时, 在渲染之前立即被调用,不能调用this.setState
  componentDidUpdate(){} //在更新发生后立即被调用
  componentWillUnmount(){}  //在一个组件被 卸载(unmounted) 和 销毁(destroyed) 之前立即被调用
//--------------------------------------------------------------------

  componentDidShow () {}  //在微信小程序中这一生命周期方法对应 onShow
  componentDidHide () {}  //在微信小程序中这一生命周期方法对应 onHide
  componentDidCatchError () {} 
  componentDidNotFound () {}  //页面不存在监听函数，在微信小程序中这一生命周期方法对应 onPageNotFound
  render() {
    return (
      <View>
          1121
      </View>
    );
  }
}
export default Wsxc;