import { MicroApp, MicroAppLink } from 'umi';

export default function Page() {
  return <MicroApp name="app1" />;
}

export default function Page() {
  return (
    <>
      {/* 跳转链接为 /table */}
      <MicroAppLink isMaster to="/table">
        <Button>go to master app</Button>
      </MicroAppLink>
    </>
  );
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setGlobalState,
  };
}

import { useState } from 'react';
import { MicroApp } from 'umi';

export default function Page() {
  const [globalState, setGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });

  return (
    <MicroApp
      name="app1"
      globalState={globalState}
      setGlobalState={setGlobalState}
    />
  );
}


let a = {
  name: 'Julia',
  age: 20
}
function change(o) {
  o.age = 34;
  0 = {
    name: "Kath",
    age: 20

  }
  return o;
}

let b = change(a)



function* fetchData() {
  try {
    const data = yield call(api, fetchData)
    yield put({ type: 'fetchData/success', payload: data });
  } catch (e) {
    console.log(e);
  }
}

// react saga 需要异步监听
function* watchFetchData() {
  yield takeEvery('fetchData', fetchData);
}