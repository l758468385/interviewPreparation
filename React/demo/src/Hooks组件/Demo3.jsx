import {Button} from "antd";
import {memo, useCallback, useState} from "react";

const Demo = () => {

    let [oppNum, setOppNum] = useState(10)

    const handle = useCallback(() =>{
        setOppNum(oppNum + 1)
    },[])

    return <>
        <h1>{oppNum}</h1>
        <Child handle={handle}></Child>
    </>
}


const Child = memo((props) => {

    let {handle} = props
    console.log('render')
    return <>
        <Button onClick={handle}>新增</Button>
    </>
})
export default Demo;