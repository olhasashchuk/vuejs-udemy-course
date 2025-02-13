import { createStore } from 'vuex'
import rootMutation from './mutation';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index'

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: rootMutation,
  actions: rootActions,
  getters: rootGetters 
});

export default store