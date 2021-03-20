import Vue from "vue";
import NotificationStore from "./_store";

declare module "vue/types/vue" {
  interface Vue {
    $notification: NotificationStore;
  }
}

Vue.prototype.$notification = NotificationStore.getInstance();
