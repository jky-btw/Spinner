const state = () => ({
  savedArray: [],
});

const getters = {
  savedArray: (state) => {
    return state.savedArray;
  },
  isSaved: (state) => (payload) => {
    console.log(state.savedArray.indexOf(payload));
    return (
      state.savedArray.find(
        (saved) => saved.nastanekCas === payload.nastanekCas
      ) && true
    );
  },
};

const actions = {};

const mutations = {
  appendToSavedArray(state, payload) {
    if (state.savedArray.indexOf(payload) == -1) state.savedArray.push(payload);
  },
  removeFromSavedArray(state, payload) {
    var arr = state.savedArray.filter(function (item) {
      return item !== payload;
    });
    state.savedArray = arr;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
