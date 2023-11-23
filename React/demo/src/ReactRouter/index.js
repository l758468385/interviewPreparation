import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';


// 调用组件的时候，基于属性传递路由表进来，我们根据路由表，动态设定路由的匹配规则

const RouterView = function RouterView(props) {
  const { routes } = props

  return <Switch>
    {
      routes.map((route, index) => {
        const { component: Component, redirect, path, from, to, exact } = route
        let config = {}
        if (redirect) {
          config = { to }
          if (from) config.from = from;
          if (exact) config.exact = exact;

          return <Redirect key={index} {...config} />
        }

        // 正常匹配路由组件

        config = { path }
         
      })
    }
  </Switch>
}