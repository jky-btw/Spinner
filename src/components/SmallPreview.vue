<template>
  <q-dialog
    seamless
    position="bottom"
    ref="dialogRef"
    @hide="onDialogHide"
    v-touch-swipe.mouse.down="handleSwipe"
  >
    <q-card class="q-dialog-plugin" @click="expanded = !expanded">
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
import { useDialogPluginComponent } from "quasar";
import SpinnerIntIcon from "src/components/IntIcon";

export default {
  name: "SmallPreview",
  components: { SpinnerIntIcon },
  props: {
    intervencija: { type: Object, required: true },
  },
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    handleSwipe() {
      this.dialogRef.hide();
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
