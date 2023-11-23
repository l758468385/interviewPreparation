import React, { useContext, useEffect, useState } from "react"

const ThemeContext = React.createContext();


// Provider 的目的很简单:把传递进来的 store放在根组件的上下文中
export function Provider(props) {
  const { store, children } = props
  return <ThemeContext.Provider value={
    store
  }>
    {children}
  </ThemeContext.Provider>
}

/* connect:可以获取到 上下文中的 store,然后把公共状态\要派发的方法等,都基于出行传递给需要渲染的组件;把让组件更新的方法放在 redux 事件池中 */

export function connect(mapStateToProps, mapDispatchToProps) {

  if (!mapStateToProps) {
    mapStateToProps = () => {
      return {}
    }
  }

  if (!mapDispatchToProps) {
    mapDispatchToProps = (dispatch) => {
      return { dispatch }
    }
  }

  return function curring(Component) {

    // 最终要渲染的组件 
    return function Hoc(props) {
      // 我们需要获取上下文中的 store
      const { store } = useContext(ThemeContext);
      let { getState, dispatch, subscribe } = store

      // 向 事件池 中加入让组件更新的方法
      let [, forceUpdate] = useState(0);

      useEffect(() => {
        subscribe(() => {
          forceUpdate(+new Date());
        })
      }, [])

      

      let nextState = mapStateToProps(store)
      return <Component {...props} {...nextState}></Component>

      
    }
  }
}