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
