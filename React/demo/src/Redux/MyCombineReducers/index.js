export function combineReducers(reducers) {


  const reducersKeys = Reflect.ownKeys(reducers);

  return function (state = {}, action) {

    const nextState = {}

    reducersKeys.forEach(reducerKey => {

      const reducer = reducers[reducerKey];
      nextState[reducerKey] = reducer(state[reducerKey], action)
    })

    return nextState;
  }
}


// 每一次 任务派发,都会把所有的 reducer 执行; 我们要保证各个模块之前的派发表示的唯一性!!(所以我们redux要做 标识的统一管理)

// 创建一个 action-types.js 臂肘




