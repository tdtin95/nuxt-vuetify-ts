<template>
  <div class="text-center">
    <Dialog>
      <template #default="slotProps">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="slotProps.attrs"
          v-on="slotProps.on"
          @click="handle(slotProps.on, slotProps.attrs)"
        >
          Click Me
        </v-btn>
      </template>

    </Dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Dialog from "~/components/dialog/Dialog.vue";

export default Vue.extend({
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    Dialog,
    Logo,
    VuetifyLogo
  },
  methods: {
    handle(e: Function, atts : Object): void {
      console.log(e);
      console.table (atts);
    }
  }
})
</script>
