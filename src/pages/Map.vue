<template>
  <q-page>
    <l-map
      v-model:center="center"
      v-model:zoom="zoom"
      v-model:bounds="bounds"
      style="width: 100vw; min-height: inherit"
      :zoomAnimation="true"
      ref="map"
      :class="$q.dark.isActive ? 'darkMode-map' : ''"
    >
      <l-tile-layer
        :url="
          $q.dark.isActive
            ? 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=f215e444-ed38-469a-a2e5-5dec032793d5'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        "
      />
      <template v-for="(intervencija, key) in intervencijeAll" :key="key">
        <custom-marker
          v-if="intervencija.type == 'normal'"
          :intervencija="intervencija"
          :marker="{ lat: intervencija.wgsLat, lng: intervencija.wgsLon }"
          :offsetX="-35"
          :offsetY="-90"
          @click="showDetails(intervencija)"
        />
        <VecjiObsegMarker
          v-else
          :intervencija="intervencija"
          @click="showDetails(intervencija)"
        />
      </template>
    </l-map>
  </q-page>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import CustomMarker from "src/components/CustomMarker";
import VecjiObsegMarker from "src/components/VecjiObsegMarker";
import SmallPreview from "components/SmallPreview";

import { mapGetters, mapActions } from "vuex";
import { useQuasar } from "quasar";

import axios from "axios";

export default {
  name: "SpinnerMapPage",
  components: {
    LMap,
    LTileLayer,
    CustomMarker,
    VecjiObsegMarker,
  },
  setup() {
    let dialog = null;
    const $q = useQuasar();
    function createPopUp(intervencija) {
      return $q
        .dialog({
          component: SmallPreview,
          componentProps: {
            intervencija: intervencija,
          },
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log("onDismiss");
          this.dialog = null;
        });
    }
    return { createPopUp, dialog, $q };
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      iconSize: 32,
      center: [46.056946, 14.505751],
      bounds: null,
    };
  },
  computed: {
    ...mapGetters("intervencije", ["intervencijeAll", "isFetched"]),
    ...mapGetters("location", ["location"]),
  },
  watch: {
    location: function (val) {
      this.center = val;
    },
  },
  mounted() {
    this.fetchLocation();
    if (!this.isFetched) this.fetchData();
  },
  methods: {
    ...mapActions("intervencije", ["fetchData"]),
    ...mapActions("settings", ["darkMode"]),
    ...mapActions("location", ["fetchLocation"]),
    async showDetails(intervencija) {
      this.centerTo(intervencija);

      if (this.dialog) {
        this.dialog.hide();
        //Wait for dialog to hide, idk
        while (this.dialog) {
          await new Promise((r) => setTimeout(r, 200));
        }
        this.dialog = this.createPopUp(intervencija);
      } else {
        this.dialog = this.createPopUp(intervencija);
      }
    },
    async centerTo(intervencija) {
      if (intervencija.type == "normal") {
        this.center = [intervencija.wgsLat, intervencija.wgsLon];
      } else {
        const response = await axios.get(
          "https://raw.githubusercontent.com/jky-btw/obcineGeoJson/main/data/" +
            intervencija.obcinaMID +
            ".geojson"
        );

        this.bounds = [
          [
            response.data.features[0].bbox[1],
            response.data.features[0].bbox[0],
          ],
          [
            response.data.features[0].bbox[3],
            response.data.features[0].bbox[2],
          ],
        ];
      }
    },
  },
  activated() {
    if (this.$route.params.intervencija) {
      const intv = JSON.parse(this.$route.params.intervencija);
      this.centerTo(intv);
      this.zoom = 15;
    }
  },
  deactivated() {
    if (this.dialog) this.dialog.hide();
  },
};
</script>

<style lang="scss">
.darkMode-map {
  background-color: rgb(46, 46, 46);
}
</style>
