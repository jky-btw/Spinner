const state = () => ({
  wordFilter: "",
  searchOn: "all",
  orderFilter: "timeup",
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
  orderFilter: (state) => {
    return state.orderFilter;
  },
  obcinaFilter: (state) => {
    return state.obcinaFilter;
  },
  typeFilter: (state) => {
    return state.typeFilter;
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
  setOrderFilter(state, payload) {
    state.orderFilter = payload;
  },
  setObcinaFilter(state, payload) {
    state.obcinaFilter = payload;
  },
  setTypeFilter(state, payload) {
    state.typeFilter = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
