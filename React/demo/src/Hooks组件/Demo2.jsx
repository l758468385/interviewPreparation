import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "antd";

/*
 *   useEffect：在函数组件中，使用生命周期函数
 *       - 第一次渲染完毕后，执行callback ,等价于componentDidMount
 *       - 在组件第一次更新完毕后，也会执行 callback，等价于 componentDidUpdate
 * */
const Demo = function () {
  let [num, setNum] = useState(0);
  let [testNum, setTestNum] = useState(0);
  const handle = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    /*
     *    第一次渲染dom结束后,会执行一次
     *    每一次渲染完毕后，会再一次执行
     * */
  });

  useEffect(() => {
    //  第二个参数加入空数组，表示 只有第一次渲染完毕后，才会执行 callback
  }, []);

  // useEffect(() =>{
  //         num变化会执行
  // },[num])

  // useEffect 必须在函数最外层上下文中调用，不能放入判断条件中或者循环语句中等..

  /*
        if (num > 5) {
            useEffect(() => {
                console.log('do something')
            }, [num]);
        }
    */

  // 如果需要，则应该这样写
  useEffect(() => {
    if (num > 5) {
      console.log("do something");
    }
  }, [num]);

  useLayoutEffect(() => {
    /*
     *   useLayoutEffect 会阻止浏览器渲染真实DOM，优先执行Effect链表中的 callback
     * */
  }, []);

  return (
    <div className="demo">
      <span className={"num"}>{num}</span>

      <Button type={"primary"} onClick={handle}>
        新增
      </Button>
    </div>
  );
};

export default Demo;
