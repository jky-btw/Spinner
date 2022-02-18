const state = () => ({
  location: null,
  center: [46.056946, 14.505751],
});

const getters = {
  location: (state) => {
    return state.location;
  },
  center: (state) => {
    return state.center;
  },
};

const actions = {
  fetchLocation(store) {
    if (!("geolocation" in navigator)) {
      console.log("Geolocation is not available.");
      store.commit("setLocation", null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        store.commit("setLocation", [
          pos.coords.latitude,
          pos.coords.longitude,
        ]);
        store.commit("setCenter", [pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.log(err.message);
      }
    );
  },
};

const mutations = {
  setLocation(state, payload) {
    state.location = payload;
  },
  setCenter(state, payload) {
    state.center = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
