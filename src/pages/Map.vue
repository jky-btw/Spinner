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
    </l-map>
  </q-page>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "SpinnerMapPage",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [46.056946, 14.505751],
      iconSize: 32,
    };
  },
};
</script>
