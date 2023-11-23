
// 方法:
// 1.store.substrubite(() => {}) 和 unsubscribe();
// 2.{ ...mapStateToProps( store.getState() ) };
// 3. {...mapDispatchToProps(store.dispatch)};

import React from "react";
import store from "./store";

import { bindActionCreators } from 'react-redux'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Wrapper) => {     // Wrapper 传递进来的组件
    class WrapperFragment extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          storeState: { ...mapStateToProps(store.getState()) }, // 连接store并初始化state
        };
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {                                 // 组件订阅 store的更新
          this.setState({
            storeState: { ...mapStateToProps(store.getState()) },
          });
        });
      }
      componentWillUnmount() {                                  // 组件卸载时取消对store的更新
        this.unsubscribe();
      }

      render() {
        return (
          <Wrapper
            {...this.props}                                     // 传递参数
            {...mapStateToProps(store.getState())}              // 将store.getState() 获取到的参数作为porps传递进 组件
            {...mapDispatchToProps(store.dispatch)}             // 将store.dispatch() 获取到的更新store的方法作为porps传递进 组件
          />
        );
      }
    }
    return WrapperFragment;
  };
};

export default connect;