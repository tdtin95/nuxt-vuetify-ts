<template>
  <div class="main-content d-flex justify-space-around align-center">
    <notifications></notifications>
    <v-btn @click="addNotification('right', 'top')">
      Right Top
    </v-btn>
    <v-btn @click="addNotification('left', 'top')">
      Left Top
    </v-btn>
    <v-btn @click="addNotification('right', 'bottom')">
      Right Bottom
    </v-btn>
    <v-btn @click="addNotification('left', 'bottom')">
      Left Bottom
    </v-btn>
    <v-btn @click="addNotification('center', 'top')">
      Center Top
    </v-btn>
    <v-btn @click="addNotification('center', 'bottom')">
      Center Bottom
    </v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Notifications from "~/components/notification/Notifications.vue";
import { NotificationData } from "~/components/notification/_store";
export default Vue.extend({
  components: { Notifications },
  data() {
    return {};
  },
  methods: {
    addNotification(horizontalAlign: string, verticallAlign: string) {
      console.log("Add");
      const notification = new NotificationData();
      notification.verticalAlign = verticallAlign;
      notification.horizontalAlign = horizontalAlign;
      notification.message = `Added in ${new Date()}`;
      this.$notification.addNotification(notification);
    }
  }
});
</script>
<style scoped></style>
