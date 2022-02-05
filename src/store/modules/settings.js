import { Dark } from "quasar";

const state = () => ({
  darkMode: true,
});

const getters = {
  darkMode: (state) => {
    return state.darkMode;
  },
};

const actions = {
  toggleDarkMode(store) {
    console.log(store);
    const value = !store.state.darkMode;
    Dark.set(value);
    store.commit("setDarkMode", value);
  },
};

const mutations = {
  setDarkMode(state, payload) {
    state.darkMode = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
