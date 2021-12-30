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
      <q-btn flat round icon="map" @click="goToMap()" />
      <q-btn
        v-if="isSaved(intervencija)"
        flat
        round
        icon="star"
        color="yellow"
        @click="save()"
      />
      <q-btn
        v-else
        flat
        round
        icon="star_border"
        color="blacks"
        @click="save()"
      />
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
import { mapGetters, mapMutations } from "vuex";
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
  computed: {
    ...mapGetters("saved", ["isSaved"]),
  },
  methods: {
    ...mapMutations("saved", ["appendToSavedArray", "removeFromSavedArray"]),
    goToMap() {
      this.$router.push({
        name: "map",
        params: { intervencija: JSON.stringify(this.intervencija) },
      });
    },
    save() {
      if (this.isSaved(this.intervencija))
        this.removeFromSavedArray(this.intervencija);
      else this.appendToSavedArray(this.intervencija);
    },
  },
};
</script>
