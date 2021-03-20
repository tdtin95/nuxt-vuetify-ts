export default class NotificationStore {
  private static instance: NotificationStore;
  toastUp?: boolean;
  subcribers: Set<Function>;
  private constructor() {
    this.subcribers = new Set();
  }

  static getInstance(): NotificationStore {
    if (!NotificationStore.instance) {
      this.instance = new NotificationStore();
    }
    return NotificationStore.instance;
  }

  subcribes(callback: Function) {
    this.subcribers?.add(callback);
  }

  notify(toastUp: boolean): void {
    for (const subcriber of this.subcribers) {
      subcriber(toastUp);
    }
  }

  setToastUp(toastUp: boolean): NotificationStore {
    this.notify(toastUp);
    this.toastUp = toastUp;
    return this;
  }
}
