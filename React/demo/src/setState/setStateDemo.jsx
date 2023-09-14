import React from "react";
import {flushSync} from "react-dom";


/*
*   面试的时候问： setState是同步还是异步？
*
* */
class SetStateDemo extends React.PureComponent {

    state = {
        x: 10,
        y: 20,
        z: 1
    }

    handle = () => {
        //     this 宿主环境中的 this 这是箭头函数的特性
        let {x, y, z} = this.state;

        this.setState({
            x: 11, // 无论总共有多少状态，我们只修改了X，其余的状态不动
            y: 6,
        }, () => {
            /*
            *   在状态更改，视图更新完毕后触发执行
            *       - 发生在 componentDidUpdate 周期函数 之后
            * */


            console.log('setState回调！~~~~')
        });


        /*  this.setState({
              x: 10
          })

          this.setState({
              y: 12
          })

          this.setState({
              z: 33
          })*/

        flushSync(() => {
        })
        // 在修改z之前，要保证x/y都已经更改了，再让视图更新
        this.setState({z: this.state.x + this.state.y})


        /*
        *   React18中，setState在任何地方执行，都是“异步操作”
        *       - React中有一套更新队列的机制
        *       - 基于异步操作，实现状态的“批处理”
        *       - 减少视图更新的次数，降低渲染消耗的性能
        * */
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('更新完毕')
    }

    render() {
        /*
        * 渲染视图
        * */

        let {x, y, z} = this.state;

        return (
            <div>
                x:{x} - y:{y} - z:{z}
                <br/>
                <button onClick={this.handle}>按钮</button>
            </div>
        );
    }
}

export default SetStateDemo;