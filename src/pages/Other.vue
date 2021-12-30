<template>
  <q-page>
    <q-scroll-area style="height: calc(100vh - 74px - 50px)" ref="qScrollArea">
      <IntList v-model="savedArray" /> </q-scroll-area
  ></q-page>
</template>

<script>
import IntList from "components/list/IntList";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "SpinnerOtherPage",
  components: {
    IntList,
  },
  computed: {
    ...mapGetters("saved", ["savedArray"]),
  },
};
</script>
