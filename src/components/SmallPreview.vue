<template>
  <q-dialog
    seamless
    position="bottom"
    ref="dialog"
    v-touch-swipe.mouse.down="handleSwipe"
  >
    <q-card class="q-dialog-plugin" @click="expand()">
      <div class="row justify-between items-center no-wrap fit">
        <div class="column content-center">
          <div class="intervencija-title q-pb-sm">
            <b>
              {{
                intervencija.dogodekNaziv ||
                intervencija.intervencijaVrstaNaziv ||
                "Večji obseg"
              }}
            </b>
          </div>
          <div class="intervencija-date q-pb-sm flex items-center">
            <q-icon class="q-pr-sm" name="alarm" size="sm" />
            {{
              intervencija.nastanekDatumFormatted +
              " " +
              (intervencija.nastanekCasFormatted || "")
            }}
          </div>
          <div class="intervencija-location flex items-center">
            <q-icon class="q-pr-sm" name="location_on" size="sm" />
            {{ intervencija.obcinaNaziv }}
          </div>
        </div>
        <SpinnerIntIcon :intervencija="intervencija" />
      </div>
      <transition
        appear
        enter-active-class="animated backInDown"
        leave-active-class="animated backOutUp"
      >
        <q-card-section v-if="expanded && intervencija.besedilo">
          {{ intervencija.besedilo }}
        </q-card-section>
      </transition>
    </q-card>
  </q-dialog>
</template>

<script>
import SpinnerIntIcon from "src/components/IntIcon";
export default {
  name: "SmallPreview",
  components: { SpinnerIntIcon },
  props: {
    intervencija: { type: Object, required: true },
  },
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
    },

    handleSwipe() {
      console.log("swipe");
      this.hide();
    },

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
<style lang="scss" scoped>
.q-card {
  margin-bottom: 80px;
  height: fit-content;
  padding: 15px;
}

.q-card-section {
  padding-top: 10px;
}

.intervencija-title {
  font-size: 1rem;
}

.intervencija-date,
.intervencija-location {
  font-size: 1rem;
}
</style>
