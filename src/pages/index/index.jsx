import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Index extends PureComponent {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {
  
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  goLink(){
    Taro.navigateTo({
      url: '/pages/Pore/Pore'
    })
  }
  render() {
    return (
      <View>
        <Button onClick={()=>{this.goLink()}}>22</Button>
      </View>
    );
  }
}
export default Index;