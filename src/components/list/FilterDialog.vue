<template>
  <q-dialog ref="dialog" @hide="onDialogHide" position="bottom">
    <q-card class="q-dialog-plugin">
      <q-card-section> <b>Sortiraj intervencije</b> </q-card-section>
      <q-card-section>
        <div class="flex column q-mb-md">
          <q-radio v-model="localOrderFilter" val="timeup" label="Najnovejše" />
          <q-radio
            v-model="localOrderFilter"
            val="timedowm"
            label="Najstarejše"
          />
          <q-radio v-model="localOrderFilter" val="locup" label="Najbližje" />
          <q-radio v-model="localOrderFilter" val="locdown" label="Oddaljeno" />
        </div>
        <q-select
          behavior="dialog"
          class="q-mb-md"
          outlined
          v-model="model"
          use-input
          label="Občina"
          input-debounce="0"
          @new-value="createValue"
          :options="filterOptions"
          @filter="filterFn"
          multiple
          use-chips
          stack-label
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          behavior="dialog"
          class="q-mb-md"
          outlined
          v-model="type"
          :options="intervencijaType"
          label="Tip intervencije"
          multiple
          use-chips
          stack-label
          ><template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon :name="scope.opt.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-btn
          class="full-width"
          label="Potrdi"
          @click="onOKClick"
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import obcine from "../../data/obcine.json";
import { options } from "../../data/intervencijeType.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FilterDialog",
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  components: {},
  data() {
    return {
      localOrderFilter: "",
      type: null,
      intervencijaType: options,
    };
  },
  setup() {
    const filterOptions = ref(obcine);
    return {
      model: ref(null),
      filterOptions,

      createValue(val, done) {
        // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
        // only if is not already set
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
        // (adds to model if not already in the model, removes from model if already has it)
        // and it resets the input textbox to empty string
        // ----
        // If "var" content is undefined/null, then it doesn't tampers with the model
        // and only resets the input textbox to empty string

        if (val.length > 0) {
          if (!obcine.includes(val)) {
            obcine.push(val);
          }
          done(val, "toggle");
        }
      },

      filterFn(val, update) {
        update(() => {
          if (val === "") {
            filterOptions.value = obcine;
          } else {
            const needle = val.toLowerCase();
            filterOptions.value = obcine.filter(
              (v) => v.toLowerCase().indexOf(needle) > -1
            );
          }
        });
      },
    };
  },
  computed: {
    ...mapGetters("filters", ["orderFilter"]),
  },
  created() {
    this.localOrderFilter = this.orderFilter;
  },
  methods: {
    ...mapMutations("filters", ["setOrderFilter"]),
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
      this.setOrderFilter(this.localOrderFilter);
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
