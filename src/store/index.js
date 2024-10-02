import { createStore } from "vuex";

export default createStore({
  state: {
    name: "test store",
  },
  getters: {
    getName: (state) => {
      return state.name;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
