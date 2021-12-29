import moment from "moment";
import { apiSpin } from "boot/axios";
import axios from "axios";

moment.locale("Sl");

const state = () => ({
  intervencijeAll: [],
  error: false,
  fetchedDate: null,
});

const getters = {
  intervencijeAll: (state) => {
    return state.intervencijeAll;
  },
  intervencijeFiltered: (state, getters, rootState, rootGetters) => {
    return state.intervencijeAll
      .filter(
        (itv) => searchList(itv, rootGetters) && filterList(itv, rootGetters)
      )
      .sort((itv1, itv2) => sortList(itv1, itv2, rootGetters));
  },
  isFetched: (state) => {
    return state.intervencijeAll.length > 0;
  },
  fetchedDate: (state) => {
    return state.fetchedDate;
  },
};

const actions = {
  fetchData(store) {
    const requestLokacija = apiSpin.get("javno/assets/data/lokacija.json");
    const requestVecjiObseg = apiSpin.get("javno/assets/data/vecjiObseg.json");

    axios
      .all([requestLokacija, requestVecjiObseg])
      .then(
        axios.spread((...responses) => {
          const responseLokacija = responses[0];
          const responseVecjiObseg = responses[1];

          if (responseLokacija.status == 200) {
            var lokacijaArray = responseLokacija.data.value;
            for (let i = 0; i < lokacijaArray.length; i++) {
              var tempEl = lokacijaArray[i];
              tempEl["type"] = "normal";
              tempEl["barvaIme"] = intToColor(tempEl.barva);
              tempEl["ikonaIme"] = intToIcon(tempEl.ikona);
              tempEl["nastanekCasFormatted"] = moment(
                tempEl["nastanekCas"]
              ).format("LT");
              tempEl["nastanekDatumFormatted"] = moment(
                tempEl["nastanekCas"]
              ).format("l");
              tempEl["prijavaCasFormatted"] = moment(
                tempEl["prijavaCas"]
              ).format("LT");
              tempEl["prijavaDatumFormatted"] = moment(
                tempEl["prijavaCas"]
              ).format("l");
              tempEl["casObject"] = moment(tempEl["nastanekCas"]);
              lokacijaArray[i] = tempEl;
            }

            var vecjiObsegArray = responseVecjiObseg.data.value;
            if (vecjiObsegArray.length) {
              for (let i = 0; i < vecjiObsegArray.length; i++) {
                var tempEl = vecjiObsegArray[i];
                tempEl["type"] = "vecjiObseg";
                tempEl["ikonaIme"] = intToIcon(10);
                tempEl["nastanekCas"] = tempEl["besediloList"][0]["datum"];
                tempEl["nastanekDatumFormatted"] = moment(
                  tempEl["besediloList"][0]["datum"]
                ).format("l");
                let besedilo = "";
                for (let j = 0; j < tempEl["besediloList"].length; j++) {
                  besedilo = besedilo + tempEl["besediloList"][j]["besedilo"];
                }
                tempEl["besedilo"] = besedilo;
                vecjiObsegArray[i] = tempEl;
              }

              lokacijaArray = lokacijaArray.concat(vecjiObsegArray);

              lokacijaArray.sort(function (a, b) {
                return new Date(b["nastanekCas"]) - new Date(a["nastanekCas"]);
              });
            }

            store.commit("setIntervencijeAll", lokacijaArray);
            store.commit("setFetchedDate", new Date());
          } else {
            store.commit("setError", true);
          }
        })
      )
      .catch((errors) => {
        console.log(errors);
        // react on errors.
      });
  },
};

const mutations = {
  setIntervencijeAll(state, payload) {
    state.intervencijeAll = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setFetchedDate(state, payload) {
    state.fetchedDate = payload;
  },
};

function searchList(itv, rootGetters) {
  const wordFilter = rootGetters["filters/wordFilter"];
  const searchOn = rootGetters["filters/searchOn"];

  if (!wordFilter) return true;

  switch (searchOn) {
    case "all":
      return (
        (itv.besedilo &&
          itv.besedilo.toLowerCase().includes(wordFilter.toLowerCase())) ||
        itv.obcinaNaziv.toLowerCase().includes(wordFilter.toLowerCase())
      );
    case "description":
      return (
        itv.besedilo &&
        itv.besedilo.toLowerCase().includes(wordFilter.toLowerCase())
      );
    case "obcina":
      return itv.obcinaNaziv.toLowerCase().includes(wordFilter.toLowerCase());
  }
}

function filterList(itv, rootGetters) {
  const obcinaFilter = rootGetters["filters/obcinaFilter"];
  const typeFilter = rootGetters["filters/typeFilter"];

  var match = true;

  if (obcinaFilter && obcinaFilter.length)
    match =
      obcinaFilter.findIndex(
        (item) => itv.obcinaNaziv.toLowerCase() === item.toLowerCase()
      ) != -1;

  if (typeFilter && typeFilter.length && match)
    match =
      typeFilter.findIndex(
        (item) =>
          itv.intervencijaVrstaNaziv.toLowerCase() === item.value.toLowerCase()
      ) != -1;

  return match;
}

function sortList(itv1, itv2, rootGetters) {
  const orderFilter = rootGetters["filters/orderFilter"];

  switch (orderFilter) {
    case "timeup":
      return itv2.casObject - itv1.casObject;
    case "timedowm":
      return itv1.casObject - itv2.casObject;
    case "locup":

    case "locdown":
  }
}

function intToIcon(n) {
  switch (n) {
    case 0:
      return "phone"; //Nepreverjeni dogodki
    case 1:
      return "tree"; //Naravne nesreče
    case 2:
      return "ambulance"; //Druge nesreče
    case 3:
      return "car"; //Nesreče v prometu
    case 4:
      return "fire"; //Požari in eksplozije
    case 5:
      return "square"; //Onesnaževanja, nesreče z nevarnimi snovmi
    case 6:
      return "house"; //Motnje, omejitve in prekinitve oskrbe
    case 7:
      return "bomb"; //Najdbe NUS
    case 8:
      return "wrench"; //Tehnična in druga pomoč
    case 9:
      return "radiation"; //Jedrska ali radiološka nevarnost
    case 10:
      return "vecjiObseg"; //Vecji obseg
  }
}
function intToColor(n) {
  switch (n) {
    case 0:
      return "icon-blue";
    case 1:
      return "icon-red";
    case 2:
      return "icon-orange";
    case 3:
      return "icon-lightorange";
    case 4:
      return "icon-yellow";
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
