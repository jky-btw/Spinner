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
    Dark.set(!store.state.darkMode);
    store.commit("setDarkMode", !store.state.darkMode);
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
