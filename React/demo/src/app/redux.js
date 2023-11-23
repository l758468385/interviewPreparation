import { createStore } from 'redux';


const initial = {
  supNum: 10,
  oppNum: 5
}

const reducer = function (state = initial, action) {

  switch (action.type) {
    case 'VOTE_SUP':

      break;
  }
  return state;
}

const store = createStore(reducer);


export default store;