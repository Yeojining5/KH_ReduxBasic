
export const actionCreator = (type) => (payload) => ({
  type, // increase or decrease
  payload, // 처리를 원하는 내용, 보내고 싶은 내용
})

// 클로저 사용
export const createStore = () => {
  let state;
  let handlers = [];

  const send = (action) => {
    state = worker(state,action);
    handlers.forEach((handlers) => handlers())
  };

  const subscribe = (handler) => {
    handlers.push(handler)
  }

  // 현재 상태정보 알아내기
  const getState = () => {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  }
}

// 첫 번째 인자는 리덕스가 넘겨주는 state가 넘어옴
// 두 번째 인자는 Action 객체가 넘어온다 - 어떤 일을 해줘 라는 정보가 담김

// 두 번째 파라미터로 들어가는 action은 type: increase ... 이런거
const worker = (state = {count:0}, action) => {
  switch(action.type){
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
      //return {...state, count: state.count + 2} // +2 로 하면 count 2가 찍힘
  }
};

const store = createStore(worker);

store.subscribe(() => {
  console.log(store.getState());
})

// 현재는 무엇을 바꿔야 하는지에 대한 정보가 없어서 무조건 1씩만 증가하고 있는 것이 문제
// 그래서 Action을 추가해야됨 - 뭘바꿔줘 라는 내용이 담겨야 함
store.send({type: "increase"})
store.send({type: "increase"})
store.send({type: "decrease"})
//console.log(store.getState());



