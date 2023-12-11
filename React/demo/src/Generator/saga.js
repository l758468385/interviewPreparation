// 安装 react-redux:yarn add redux-saga

// store/index.js

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'

// 原本使用 redux-thunk 中间件处理异步任务
// import thunk from 'redux-thunk';

// 合并后的 reducer
import reducer from './reducer';


// redux-saga 中间件
import createSagaMiddleware from 'redux-saga';

import mainsaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    )
  )
);

// 运行 saga 
sagaMiddleware.run(mainsaga);

export default store;


