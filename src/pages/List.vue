<template>
  <q-page class="scroll-target">
    <LoadingIcon v-if="!isFetched" />
    <q-scroll-area style="height: calc(100vh - 74px - 50px)" ref="qScrollArea">
      <IntList v-model="intervencijeFiltered" v-if="isFetched" />
    </q-scroll-area>
  </q-page>
</template>

<script>
import LoadingIcon from "components/LoadingIcon";
import IntList from "components/list/IntList";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "SpinnerListPage",
  components: {
    LoadingIcon,
    IntList,
  },
  methods: {
    ...mapActions("intervencije", ["fetchData"]),
    refresh(done) {
      this.fetchData();
      done();
    },
  },
  computed: {
    ...mapGetters("intervencije", ["intervencijeFiltered", "isFetched"]),
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
.q-pull-to-refresh {
  min-height: inherit;
  &__content {
    min-height: inherit;
  }
}
</style>
