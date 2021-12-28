<template>
  <div class="row justify-between items-center no-wrap fit">
    <div class="column content-center">
      <div class="intervencija-title q-pb-sm">
        <b>
          {{
            intervencija.dogodekNaziv ||
            intervencija.intervencijaVrstaNaziv ||
            "Večji obseg"
          }}
        </b>
      </div>
      <div class="intervencija-date q-pb-sm flex items-center">
        <q-icon class="q-pr-sm" name="alarm" size="sm" />
        {{
          intervencija.nastanekDatumFormatted +
          " " +
          (intervencija.nastanekCasFormatted || "")
        }}
      </div>
      <div class="intervencija-location flex items-center">
        <q-icon class="q-pr-sm" name="location_on" size="sm" />
        {{ intervencija.obcinaNaziv }}
      </div>
    </div>
    <SpinnerIntIcon :intervencija="intervencija" />
  </div>
</template>

<script>
import SpinnerIntIcon from "src/components/IntIcon";
export default {
  name: "SpinnerIntervencijaListHeader",
  components: {
    SpinnerIntIcon,
  },
  props: {
    intervencija: { type: Object, required: true },
  },
};
</script>
<style lang="scss">
.intervencija-title {
  font-size: 1rem;
}

.intervencija-date,
.intervencija-location {
  font-size: 1rem;
}
</style>
