<template>
  <div class="d-flex flex-column mb-6">
    <v-snackbar v-model="toastUp" timeout="-1">
      This is a notification
      <template #action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="$notification.setToastUp(false)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      toastUp: false
    };
  },
  mounted() {
    this.$notification.subcribes(
      (toastUp: boolean) => (this.toastUp = toastUp)
    );
  }
});
</script>
