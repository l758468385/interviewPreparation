import { all } from 'redux-saga/effects'
// all方法，可以监听多个监听saga，它的功能和Promise.all方法一样

import userWatchSaga from './watchsagas/userSaga'

// saga中间件 主saga，用于区别是否需要saga来处理异步操作，如果没有异步，则放行
export const mainSagaListener = function* mainSagaListener() {
  yield all([
    // 监听 saga 中有 userWatchSaga 操作，所以会拦截这个 action
    userWatchSaga()
  ])
}

// store/index.js

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'

// 原本使用 redux-thunk 中间件处理异步任务
// import thunk from 'redux-thunk';

// 合并后的 reducer
import reducer from './reducer';


// redux-saga 中间件
import createSagaMiddleware from 'redux-saga';

import mainsaga from '../saga/sagas.js';

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


