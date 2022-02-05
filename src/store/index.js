import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import intervencije from "./modules/intervencije";
import filters from "./modules/filters";
import saved from "./modules/saved";
import settings from "./modules/settings";

import VuexPersistence from "vuex-persist";
import localforage from "localforage";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      intervencije,
      filters,
      saved,
      settings,
    },
    plugins: [
      new VuexPersistence({
        //asyncStorage: true,
        storage: localStorage,

        reducer: (state) => ({ saved: state.saved, settings: state.settings }),
        /*
        async restoreState(key) {
          const state = await localforage.getItem(key);
          console.log(state);
          const deserialized = JSON.parse(state.saved);
          return deserialized;
        },
        */
      }).plugin,
    ],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
