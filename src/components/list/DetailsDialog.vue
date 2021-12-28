<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <span class="fit row no-wrap justify-between items-center">
          <b class="text-h6">
            {{
              intervencija.dogodekNaziv ||
              intervencija.intervencijaVrstaNaziv ||
              "Večji obseg"
            }}
          </b>
          <q-btn flat dense icon="close" @click="hide" />
        </span>
      </q-card-section>

      <q-separator />

      <div class="row no-wrap justify-between">
        <div class="q-pa-md flex items-center">
          <q-icon name="event " size="sm" class="q-pr-sm" />
          <span> {{ intervencija.nastanekDatumFormatted }} </span>
        </div>
        <div
          class="q-pa-md flex no-wrap items-center justify-end"
          style="width: 50%"
        >
          <span class="q-pr-sm">
            {{ intervencija.obcinaNaziv }}
          </span>
          <q-icon name="location_on" size="sm" />
        </div>
      </div>

      <q-separator />

      <div v-if="intervencija.type == 'normal'" class="row justify-between">
        <div class="q-pa-md flex items-center">
          <q-icon name="schedule " size="sm" class="q-pr-sm" />
          <span> {{ intervencija.nastanekCasFormatted }} </span>
        </div>
        <div class="q-pa-md flex items-center">
          <span class="q-pr-sm"> {{ intervencija.prijavaCasFormatted }} </span>
          <q-icon name="alarm" size="sm" />
        </div>
      </div>

      <q-separator />

      <div v-if="intervencija.besedilo">
        <q-card-section>
          {{ intervencija.besedilo }}
        </q-card-section>
      </div>

      <SpinnerSmallMap :intervencija="intervencija" />
    </q-card>
  </q-dialog>
</template>

<script>
import SpinnerSmallMap from "components/list/SmallMap";

export default {
  name: "DetailsDialog",
  components: {
    SpinnerSmallMap,
  },
  props: {
    intervencija: { type: Object, required: true },
  },
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },
};
</script>
