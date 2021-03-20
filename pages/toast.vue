<template>
  <div class="text-center">
    <notification></notification>
    <v-btn @click="$notification.setToastUp(!$notification.toastUp)">
      Show
    </v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Notification from "~/components/notification/Notification.vue";
export default Vue.extend({
  components: { Notification },
  data() {
    return {};
  }
});
</script>
<style scoped></style>
