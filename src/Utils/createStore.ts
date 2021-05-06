interface NewType{
  [key: string]: unknown;
}
const createStore = (initialState?: NewType) => {
  let state = initialState;
  const listeners: Array<Function> = [];
  function setState(partial: NewType) {
    state = {
      ...(state as object),
      ...(partial as object),
    };
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener: Function) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState,
    getState,
    subscribe,
  };
};
export default createStore;
