<template>
  <div class="notification-wrapper">
    <notification
      v-for="notification in notifications"
      v-bind="notification"
      :key="notification.id"
      :setting="notification"
      @onClose="removeNotification"
    ></notification>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Notification from "@/components/notification/Notification.vue";
export default Vue.extend({
  components: { Notification },
  data() {
    return {
      notifications: this.$notification.data
    };
  },

  mounted() {
    console.log(`mounted ${this.$notification.data}`);
  },

  methods: {
    removeNotification(id: number) {
      console.log(`close ${id}`);
      this.$notification.removeNotification(id);
    }
  }
});
</script>
