<template>
  <q-dialog ref="dialog" @hide="onDialogHide" position="bottom">
    <q-card class="q-dialog-plugin">
      <q-card-section> <b>Iskanje</b> </q-card-section>
      <q-card-section>
        <q-input class="q-mb-sm" v-model="localWordFilter" outlined clearable>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="q-mb-md">
          <q-radio v-model="localSearchOn" val="all" label="Povsod" />
          <q-radio
            v-model="localSearchOn"
            val="description"
            label="Opis dogodka"
          />
          <q-radio v-model="localSearchOn" val="obcina" label="Občina" />
        </div>
        <q-btn
          @click="onOKClick"
          class="full-width"
          label="Potrdi"
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SearchDialog",
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  data() {
    return {
      localWordFilter: "",
      localSearchOn: "",
    };
  },
  computed: {
    ...mapGetters("filters", ["wordFilter"]),
    ...mapGetters("filters", ["searchOn"]),
  },
  created() {
    this.localWordFilter = this.wordFilter;
    this.localSearchOn = this.searchOn;
  },
  methods: {
    ...mapMutations("filters", ["setWordFilter"]),
    ...mapMutations("filters", ["setSearchOn"]),

    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },
    onOKClick() {
      this.setWordFilter(this.localWordFilter);
      this.setSearchOn(this.localSearchOn);

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
