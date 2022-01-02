<template>
  <div class="marker-wrapper">
    <svg class="marker-icon">
      <use href="icons/svg/marker.svg#Layer_1"></use>
    </svg>
    <SpinnerIntIcon :intervencija="intervencija" />
  </div>
</template>
<script>
import L from "leaflet";
import { Icon } from "leaflet/src/layer/marker/Icon";

import SpinnerIntIcon from "src/components/IntIcon";

export default {
  components: {
    SpinnerIntIcon,
  },
  props: {
    intervencija: {
      type: Object,
      required: true,
    },
    marker: {
      type: Object,
      default: undefined,
    },
    alignment: {
      type: String,
      default: "center",
    },
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      leafMarker: undefined,
    };
  },
  mounted() {
    this.leafMarker = L.marker([this.marker.lat, this.marker.lng], {
      icon: new CustomMarker({ html: this.$el }),
    });
    this.leafMarker.addTo(this.findRealParent(this.$parent).leafletObject);
    this.computeAlignment(this.alignment);
  },
  watch: {
    alignment(alignment) {
      this.computeAlignment(alignment);
    },
    marker(marker) {
      this.leafMarker.setLatLng(marker);
    },
  },
  methods: {
    computeAlignment(alignment) {
      const div = this.$el;
      let x = 0;
      let y = 0;
      switch (alignment) {
        case "top":
          y -= div.offsetHeight;
          x -= div.offsetHeight / 2;
          break;
        case "bottom":
          x = x - div.offsetWidth / 2;
          break;
        case "left":
          x = x - div.offsetWidth;
          y = y - div.offsetHeight / 2;
          break;
        case "right":
          y = y - div.offsetHeight / 2;
          break;
        case "center":
          x -= div.offsetWidth / 2;
          y -= div.offsetHeight / 2;
          break;
        case "topleft":
          x = -div.offsetWidth;
          y = -div.offsetHeight;
          break;
        case "topright":
          y = y - div.offsetHeight;
          break;
        case "bottomleft":
          x = x - div.offsetWidth;
          break;
        case "bottomright":
          break;
        default:
          throw new Error("Invalid alignment type of custom marker!");
      }
      div.style.left = x + this.offsetX + "px";
      div.style.top = y + this.offsetY + "px";
    },
    findRealParent(firstVueParent) {
      let found = false;
      while (firstVueParent && !found) {
        if (firstVueParent.leafletObject === undefined) {
          firstVueParent = firstVueParent.$parent;
        } else {
          found = true;
        }
      }
      return firstVueParent;
    },
  },
  beforeUnmount() {
    if (this.leafMarker) {
      this.leafMarker.remove();
    }
  },
};

export var CustomMarker = Icon.extend({
  options: {},
  createIcon: function () {
    const div = document.createElement("div");
    div.appendChild(this.options.html);
    return div;
  },
});
</script>
<style scoped>
.marker-wrapper {
  position: absolute;
}
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
