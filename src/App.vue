<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  created() {
    const q = useQuasar();
    q.dark.set(this.darkMode());
  },
  methods: {
    ...mapGetters("settings", ["darkMode"]),
  },
});
</script>
