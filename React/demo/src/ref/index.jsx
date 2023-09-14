/*
*   如何获取dom
* */

import React, {createRef} from "react";

class Demo extends React.Component {
    box3 = createRef()
    child1 = null;
    child2 = null;

    render() {
        return <>
            <h1 ref={'titleBox'}>我是RefDemoTitle</h1>

            {/*
                ref = {x=> this.xxx = x} x 是函数的形参：存储的是当前的dom
            */}
            <h2 ref={x => this.box2 = x}>友情提示</h2>

            <span ref={this.box3}>郑重提醒</span>





            <Child1 ref={x => this.child1 = x}></Child1>

            {/*
                函数组件用 ref会报错 react-dom.development.js:86 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
                但是我们让其配合 React.forwardRef 实现 ref的转发
            */}
            <Child2 ref={x => this.child2 = x}></Child2>
        </>
    }

    componentDidMount() {
        //     第一次渲染完毕 (虚拟DOM已经变成了真实DOM，此时我们可以操作DOM)
        console.log(this.refs.titleBox)

        console.log(this.box3);

        console.log(this.child);
    }
}


class Child1 extends React.Component {
    state = {
        name: 'ChildName',
    }

    render() {
        return <>

        </>
    }
}

// const Child2 = function () {
//     return <div>
//         <span>子组件2</span>
//         <button>我是子组件2的按钮</button>
//     </div>
// }

const Child2 = React.forwardRef(function (props,ref) {
    // ref 就是我们调用 Child2 的时候， 设置ref属性值
    return <>
        <span>子组件2</span>
        <button ref={ref}>我是子组件2的按钮</button>
    </>
})

export default Demo

/*
*   受控组件：基于修改数据/状态，让视图更新，达到需要的效果
*   非受控组件：基于ref获取dom，我们操作DOM元素，来实现需求和效果
* */