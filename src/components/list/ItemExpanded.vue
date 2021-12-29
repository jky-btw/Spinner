<template>
  <q-card>
    <q-separator />

    <div v-if="intervencija.besedilo" class="text-section">
      <q-card-section>
        {{ intervencija.besedilo }}
      </q-card-section>

      <q-separator />
    </div>

    <q-card-actions class="row justify-between">
      <q-btn flat round icon="map" @click="goToMap(intervencija)" />
      <q-btn
        flat
        round
        icon="unfold_more"
        @click="openDetailsDialog(intervencija)"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { useQuasar } from "quasar";
import DetailsDialog from "components/list/DetailsDialog";
export default {
  name: "SpinnerIntervencijaListContent",
  props: {
    intervencija: { type: Object, required: true },
  },
  setup() {
    const $q = useQuasar();

    function openDetailsDialog(intervencija) {
      $q.dialog({
        component: DetailsDialog,
        componentProps: {
          intervencija: intervencija,
        },
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { openDetailsDialog };
  },
  methods: {
    goToMap(intervencija) {
      this.$router.push({
        name: "map",
        params: { intervencija: JSON.stringify(intervencija) },
      });
    },
  },
};
</script>
