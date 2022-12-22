const redux = require("redux");

const reducerFunctionCounter = (state = { counter: 0 }, action) => {
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
};

const store = redux.createStore(reducerFunctionCounter);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
