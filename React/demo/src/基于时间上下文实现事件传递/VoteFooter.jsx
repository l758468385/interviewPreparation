import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

import { Button } from "antd";

class VoteFooter extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {/* 函数组件和类组件 都可以使用 ThemeContext.Consumer */}
        {(context) => {
          let { change } = context;

          return (
            <div className="footer">
              <Button onClick={change.bind(null, "sup")}>支持</Button>
              <Button onClick={change.bind(null, "opp")}>反对</Button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
/* 
  export 语句 用于导出一个或多个命名的变量、函数、类

  // module.js
    export const name = 'John';
    export function greet() {
      console.log(`Hello, ${name}!`);
    }

  // anotherModule.js
    import { name, greet } from './module';
    console.log(name); // Output: John
    greet(); // Output: Hello, John!
*/
export const FunctionTypeComponent = () => {
  let { supNum, oppNum } = useContext(ThemeContext);
  return (
    <div className="function-type-component">
      <p>支持人数:{supNum}</p>
      <p>反对人数:{oppNum}</p>
    </div>
  );
};

/* 
 export default语句用于导出一个默认的值。一个模块只能有一个默认导出。当其他文件使用import语句导入模块时，可以使用任意名称来引用默认导出的值。


    // module.js
    const name = 'John';
    function greet() {
      console.log(`Hello, ${name}!`);
    }
    export default greet;


    // anotherModule.js
    import myGreet from './module';
    myGreet(); // Output: Hello, John!


    在使用export时，需要使用相应的名称来引入导出的变量、函数或类。而在使用export default时，你可以选择在import语句中使用任意名称，因为它是默认导出的唯一值。需要注意的是，一个模块不能同时使用export和export default导出，而且一个模块在导入时也不能同时使用import和import default。
*/
export default VoteFooter;
