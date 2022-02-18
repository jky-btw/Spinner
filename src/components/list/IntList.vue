<template>
  <q-list separator>
    <q-expansion-item
      v-for="(intervencija, key) in modelValue"
      :key="key.toString()"
      group="intervencijeGroup"
      @after-show="scrollTo(key.toString())"
      :ref="key.toString()"
      expand-icon-class="hidden"
    >
      <template v-slot:header>
        <IntervencijaItemHeader :intervencija="intervencija" />
      </template>
      <IntervencijaItemExpanded :intervencija="intervencija" />
    </q-expansion-item>
  </q-list>
</template>

<script>
import IntervencijaItemHeader from "src/components/list/ItemHeader";
import IntervencijaItemExpanded from "src/components/list/ItemExpanded";

export default {
  name: "IntervencijeList",

  components: {
    IntervencijaItemHeader,
    IntervencijaItemExpanded,
  },
  props: {
    modelValue: { type: Array },
  },
  methods: {
    scrollTo(key) {
      const itemRef = this.$refs[key];
      const el = itemRef[0].$el;
      if (el.getBoundingClientRect().bottom > window.innerHeight) {
        //If at the bottom
        el.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
      if (el.getBoundingClientRect().top < 0) {
        //If at the top
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.q-expansion-item {
  grid-column: span 6;
}

@media only screen and (min-width: 700px) {
  .q-expansion-item {
    grid-column: span 3;
  }
}

@media only screen and (min-width: 1100px) {
  .q-expansion-item {
    grid-column: span 2;
  }
}

.q-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.q-expansion-item {
  border-left: 1px rgba(255, 255, 255, 0.28) solid;
  border-right: 1px rgba(255, 255, 255, 0.28) solid;
}
</style>
