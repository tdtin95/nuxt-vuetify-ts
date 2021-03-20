<template>
  <div class="text-center">
    <ValidationObserver v-slot="{errors, validate, handleSubmit}">
      <form @submit.prevent="handleSubmit(validateComponent(errors, validate))">
        <Dialog>
          <template #default="slotProps">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="slotProps.attrs"
              v-on="slotProps.on">
              Click Me
            </v-btn>
          </template>
        </Dialog>
        <date-picker></date-picker>
        <v-combobox :items="languages" v-model="selectedLang" @change="onSelectLanguage">

        </v-combobox>
        <v-btn type="submit">
          {{ $t('button.validate') }}
        </v-btn>
      </form>
    </ValidationObserver>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {ValidationObserver} from 'vee-validate';
import Dialog from "~/components/dialog/Dialog.vue";
import DatePicker from "~/components/datepicker/DatePicker.vue";

export default Vue.extend({
  components: {
    Dialog,
    DatePicker,
    ValidationObserver
  },
  data() {
    return {
      dialog: false,
      languages : ['en', 'fr'],
      selectedLang: ''
    }
  },
  methods: {
    validateComponent(o: Object, f: Function): void {
      console.log(o)
      f().then((result: Object) => console.log(result))
    },
    onSelectLanguage() : void {
      console.log(this.$t('button.validate'))
      this.$i18n.setLocale(this.selectedLang)
    }
  }
})
</script>
