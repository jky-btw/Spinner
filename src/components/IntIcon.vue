<template>
  <svg class="int-icon">
    <use :href="iconPath" :class="this.intervencija.barvaIme"></use>
  </svg>
</template>

<script>
export default {
  name: "SpinnerIntervencijaIcon",
  props: {
    intervencija: { type: Object, required: true },
  },
  computed: {
    iconPath() {
      if (this.intervencija.type == "vecjiObseg")
        return "icons/svg/vecjiObseg.svg";

      return "icons/svg/" + this.intervencija.ikonaIme + ".svg#Layer_1";
    },
  },
};
</script>

<style lang="scss">
svg.int-icon {
  height: 55px;
  width: 55px;
}

use.icon-blue {
  fill: $icon-blue;
}

use.icon-red {
  fill: $icon-red;
}

use.icon-yellow {
  fill: $icon-yellow;
}

use.icon-orange {
  fill: $icon-orange;
}

use.icon-lightorange {
  fill: $icon-lightorange;
}
</style>
