<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <span v-if="ago"> Osveženo: {{ ago }} </span>
      </q-toolbar-title>
      <template v-if="selectedTab == 'list'">
        <q-btn flat round dense icon="filter_list" @click="openFilterDialog" />
        <q-btn flat round dense icon="search" @click="openSearchDialog" />
        <q-btn flat round dense icon="refresh" @click="fetchData" />
      </template>
      <template v-if="selectedTab == 'map'">
        <q-btn flat round dense icon="location_on" @click="fetchLocation" />
        <q-btn flat round dense icon="refresh" @click="fetchData" />
      </template>
      <template v-if="selectedTab == 'saved'">
        <q-btn flat round dense icon="dark_mode" @click="toggleDarkMode" />
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
import { useQuasar } from "quasar";
import { mapGetters, mapActions, mapMutations } from "vuex";
import moment from "moment";
import FilterDialog from "components/list/FilterDialog";
import SearchDialog from "components/list/SearchDialog";
export default {
  name: "SpinnerHeaderToolbar",
  data() {
    return {
      ago: null,
      oldTime: "",
      interval: null,
    };
  },
  props: {
    selectedTab: { type: String, required: true },
  },
  unmounted() {
    clearInterval(this.interval);
  },
  created() {
    //this.oldTime = new Date();
    this.interval = setInterval(() => {
      if (this.fetchedDate != null)
        this.ago = moment(this.fetchedDate).locale("Sl").fromNow();
    }, 1000);
  },
  setup() {
    const $q = useQuasar();

    function openFilterDialog() {
      $q.dialog({
        component: FilterDialog,
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function openSearchDialog() {
      $q.dialog({
        component: SearchDialog,
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { openFilterDialog, openSearchDialog };
  },
  computed: {
    ...mapGetters("intervencije", ["fetchedDate"]),
    ...mapGetters("settings", ["getDarkMode"]),
  },
  methods: {
    ...mapActions("intervencije", ["fetchData"]),
    ...mapActions("settings", ["toggleDarkMode"]),
    ...mapActions("location", ["fetchLocation"]),
  },
};
</script>
