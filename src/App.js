import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SliderCom from './components/sliderCom'
import { router as routers } from './router.js'
import 'antd/dist/antd.css';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    function resetWidth() {
      var baseWidth = document.documentElement.clientWidth || document.body.clientWidth;
      // 默认的设置是375px(ip6)的根元素设为100px, 其他的手机都相对这个进行调整   
      document.documentElement.style.fontSize = baseWidth / 375 * 100 + 'px'
    } resetWidth();
    window.addEventListener('resize', function () {
      resetWidth();
    })

  }
  render() {
    return (
      <div className="App">
        <Switch>
          {
            routers.map((i, index) => (
              <Route exact={i.exact} path={i.path} component={i.component} key={index}></Route>
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default App;
