<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderToolbar v-model:selectedTab="selectedTab" />

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        no-caps
        v-model="selectedTab"
      >
        <q-route-tab
          name="list"
          to="list"
          label="Seznam"
          icon="format_list_bulleted"
        />
        <q-route-tab name="map" to="map" label="Zemljevid" icon="map" />
        <q-route-tab
          name="other"
          to="other"
          label="Drugo"
          icon="help_outline"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderToolbar from "components/HeaderToolbar";

export default {
  name: "MainLayout",
  data() {
    return {
      selectedTab: "",
    };
  },
  components: {
    HeaderToolbar,
  },
};
</script>
<style lang="scss">
.q-toolbar__title {
  font-size: 1rem;
}
</style>
