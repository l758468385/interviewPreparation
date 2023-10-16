import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";


/*
*   基于 forwardRef 实现 ref转发，目的：获取子组件内部的某个元素
* */
const Child = forwardRef(function (props, ref
) {

    const changeFlag = () => {
        setFlag(!flag)
    }

    useImperativeHandle(ref, () => {
        return {
            changeFlag
        }
    })
    let [flag, setFlag] = useState(false)
    return <div className='child-box'>
        <span ref={ref}>子组件是否显示标志{flag ? '是' : "否"}</span>
    </div>


});

const useRefDemo = function () {
    let [num, setNum] = useState(0);
    const handle = () => {
        setNum(num + 1)

        const changeFlag = x.current.changeFlag;

        changeFlag()
    }
    let box = null
    const box1 = useRef(null);
    useEffect(() => {
        console.log('box1', box1)

    }, []);


    let x = useRef(null)
    return <div className="useRefDemo">
        <span className="num" ref={box1}>{num}</span>
        <button onClick={handle}>新增</button>

        <Form initialValues={{task: ''}}>
            <FormItem name='task' label='任务描述'>
                <Input></Input>
            </FormItem>
        </Form>
        <Child ref={x}></Child>
    </div>
};
export default useRefDemo;