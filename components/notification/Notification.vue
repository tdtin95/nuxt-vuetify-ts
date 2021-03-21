<template>
  <v-snackbar
    :id="setting.id"
    ref="notificationWrapper"
    v-model="toastUp"
    :multi-line="true"
    :timeout="setting.timeout"
    :left="setting.horizontalAlign === 'left'"
    :right="setting.horizontalAlign === 'right'"
    :top="setting.verticalAlign === 'top'"
    :bottom="setting.verticalAlign === 'bottom'"
    :center="setting.horizontalAlign === 'center'"
    :style="customPosition"
  >
    <div id="tdin">
      {{ setting.message }}
    </div>
    <template #action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="toastUp = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import Vue from "vue";
import { NotificationData } from "./_store";
export default Vue.extend({
  props: {
    setting: {
      type: NotificationData,
      required: true
    }
  },
  data() {
    return {
      toastUp: true,
      height: 0
    };
  },
  computed: {
    customPosition(): any {
      console.log("calculate position");
      const sameGroup: NotificationData[] = this.$notification.data.filter(
        (n: NotificationData) => {
          return (
            n.horizontalAlign === this.setting.horizontalAlign &&
            n.verticalAlign === this.setting.verticalAlign
          );
        }
      );

      let sameAlertsCount = 1;
      const currentIndex: number = sameGroup.findIndex(
        (n: NotificationData) => n.id === this.setting.id
      );

      if (currentIndex !== -1) {
        sameAlertsCount = currentIndex + 1;
      }

      const pixels: number = (sameAlertsCount - 1) * 78;
      const styles: any = {};

      if (this.setting.verticalAlign === "top") {
        styles.top = `${pixels}px`;
      } else {
        styles.bottom = `${pixels}px`;
      }
      return styles;
    }
  },

  watch: {
    toastUp(val: boolean) {
      if (!val) {
        this.close();
      }
    }
  },

  mounted() {
    this.height = (this.$refs.notificationWrapper as Vue).$el.clientHeight;
  },
  methods: {
    close(): void {
      this.$emit("onClose", this.setting.id);
    }
  }
});
</script>
