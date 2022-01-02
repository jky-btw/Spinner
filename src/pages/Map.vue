<template>
  <q-page>
    <l-map
      v-model:center="center"
      v-model:zoom="zoom"
      style="width: 100vw; min-height: inherit"
      :zoomAnimation="true"
      ref="map"
    >
      <l-tile-layer :url="url" />
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

import { mapGetters } from "vuex";
import { useQuasar } from "quasar";

export default {
  name: "SpinnerMapPage",
  components: {
    LMap,
    LTileLayer,
    CustomMarker,
    VecjiObsegMarker,
  },
  props: {
    intervencija: { required: false, type: Object, default: null },
  },
  setup() {
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
          // console.log('onDismiss')
        });
    }
    return { createPopUp };
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [46.056946, 14.505751],
      iconSize: 32,
      dialogOpened: false,
      dialog: null,
    };
  },
  computed: {
    ...mapGetters("intervencije", ["intervencijeAll", "isFetched"]),
  },
  methods: {
    showDetails(intervencija) {
      if (this.dialogOpened) this.dialog.hide();

      this.dialog = this.createPopUp(intervencija);
      this.dialogOpened = true;
    },
  },
  activated() {
    if (this.$route.params.intervencija) {
      const intv = JSON.parse(this.$route.params.intervencija);
      this.center = [intv.wgsLat, intv.wgsLon];
      this.zoom = 15;
    } else this.center = [46.056946, 14.505751];
  },
  deactivated() {
    if (this.dialogOpened) this.dialog.hide();
  },
};
</script>
