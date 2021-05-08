import createStore from './createStore';
const store = createStore({ open: false, canShare: true, canCloud: true });
// window.store = newStore;
export default store;
