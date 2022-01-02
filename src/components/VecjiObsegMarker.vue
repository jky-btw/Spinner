<template>
  <l-geo-json :geojson="geojson"></l-geo-json>
</template>

<script>
import { LGeoJson } from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  props: {
    intervencija: { type: Object, required: true },
  },
  components: {
    LGeoJson,
  },
  data() {
    return {
      geojson: null,
    };
  },
  async created() {
    const response = await axios.get(
      "https://raw.githubusercontent.com/jky-btw/obcineGeoJson/main/data/" +
        this.intervencija.obcinaMID +
        ".geojson"
    );
    this.geojson = response.data;
  },
};
</script>
