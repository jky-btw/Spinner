const state = () => ({
  wordFilter: "",
  searchOn: "all",
  orderFilter: "",
  obcinaFilter: null,
  typeFilter: null,
});

const getters = {
  wordFilter: (state) => {
    return state.wordFilter;
  },
  searchOn: (state) => {
    return state.searchOn;
  },
};

const actions = {};

const mutations = {
  setWordFilter(state, payload) {
    state.wordFilter = payload;
  },
  setSearchOn(state, payload) {
    state.searchOn = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
