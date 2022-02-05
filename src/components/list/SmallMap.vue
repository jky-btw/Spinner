<template>
  <l-map
    style="width: 100%; aspect-ratio: 1"
    :center="center"
    :zoom="zoom"
    :options="leafletMapOptions"
    :zoomAnimation="true"
    ref="map"
  >
    <l-tile-layer :url="url" />
    <l-geo-json v-if="intervencija.type == 'vecjiObseg'" :geojson="geojson" />
    <custom-marker
      :intervencija="intervencija"
      v-else
      :marker="{ lat: intervencija.wgsLat, lng: intervencija.wgsLon }"
      :offsetX="-35"
      :offsetY="-90"
    />
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";
import axios from "axios";
import CustomMarker from "src/components/CustomMarker";

export default {
  name: "SmallIntMap",
  props: {
    intervencija: { type: Object, required: true },
  },
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    CustomMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [46.054, 14.507],
      geojson: null,
      leafletMapOptions: {
        scrollWheelZoom: "center", // zoom to center regardless where mouse is
        doubleClickZoom: "center",
        touchZoom: "center",
      },
      iconSize: 48,
      isBlue: false,
      marker: {
        lat: 50.60229509638775,
        lng: 3.0247059387528408,
      },
    };
  },
  async created() {
    if (this.intervencija.type == "vecjiObseg") {
      var reqString =
        "https://raw.githubusercontent.com/jky-btw/obcineGeoJson/main/data/" +
        this.intervencija.obcinaMID +
        ".geojson";
      const request = await axios.get(reqString);
      this.geojson = request.data;

      const map = this.$refs.map.leafletObject;

      map.fitBounds([
        [this.geojson.features[0].bbox[1], this.geojson.features[0].bbox[0]],
        [this.geojson.features[0].bbox[3], this.geojson.features[0].bbox[2]],
      ]);
    } else {
      this.center = [this.intervencija.wgsLat, this.intervencija.wgsLon];
    }
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
};
</script>

<style lang="scss" scoped>
.int-icon {
  position: absolute;
  top: 16px;
  left: 14px;
  height: 40px;
  width: 40px;
}
.marker-icon {
  position: absolute;
}
.marker-icon {
  height: 90px;
  width: 70px;
}
</style>
