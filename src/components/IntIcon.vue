<template>
  <svg class="int-icon">
    <use
      v-if="this.intervencija.type == 'normal'"
      :href="iconPath"
      :class="this.intervencija.barvaIme"
    ></use>
    <use v-else :href="iconPath" class="icon-blue"></use>
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
        return "icons/svg/vecjiObseg.svg#Layer_1";

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
