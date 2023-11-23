import { observable, action, autorun, runInAction } from 'mobx';
import { createContext, useEffect } from 'react';

export default class PersonStore {
  @observable info = null;

  @action.bound queryInfo() {

  }
}
import { observer } from "mobx-react-lite"

import { observer } from 'mobx-react-lite';


const myTimer = new Timer() // See the Timer definition above.

const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)

// 通过props传递myTimer.
ReactDOM.render(<TimerView timer={myTimer} />, document.body)
class CounterStore {


}

function Counter() {
  const { counterStore } = useRootStore();
  useEffect(() => {
    const person = counterStore.person;
    person.name = 'Using local state'
    const [timer] = useState(null);

  }, [])

  useEffect(() => {
    const person = counterStore.person;
    autorun(() => {
      console.log(' ',)
    })
  }, [])

  useEffect(() => {

  })

  useEffect(() => {
    const person = counterStore.person
  }, [])

  return <>
    <p>{counterStore.person.name}</p>
    <button onClick={() => {
      runInAction(() => {
        let timer = null;
        const deboucne = (fn, wait) => {
          if (timer) clearTimeout(timer);
          return function () {
            fn.apply(this, arguments)
          }
        }
      })
    }}></button>
  </>
}