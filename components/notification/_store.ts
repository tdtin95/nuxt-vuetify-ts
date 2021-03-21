export class NotificationData {
  verticalAlign?: string;
  horizontalAlign?: string;
  message?: string;
  timeout?: number;
  id: number;
  height: number;

  constructor() {
    this.verticalAlign = "top";
    this.horizontalAlign = "right";
    this.message = "";
    this.timeout = 2000;
    this.id = Math.random();
    this.height = 300;
  }
}

export default class NotificationStore {
  private static instance: NotificationStore;
  data: NotificationData[];
  subcribers: Set<Function>;

  private constructor() {
    this.subcribers = new Set();
    this.data = [];
  }

  static getInstance(): NotificationStore {
    if (!NotificationStore.instance) {
      this.instance = new NotificationStore();
    }
    return NotificationStore.instance;
  }

  removeNotification(id: number) {
    const indexToDelete = this.data.findIndex(
      (n: NotificationData) => n.id === id
    );
    if (indexToDelete !== -1) {
      this.data.splice(indexToDelete, 1);
    }
  }

  addNotification(notification: NotificationData): void {
    this.data.push(
      Object.assign(new NotificationData(), notification) as NotificationData
    );
  }

  subcribes(callback: Function) {
    this.subcribers?.add(callback);
  }

  notify(toastUp: boolean): void {
    for (const subcriber of this.subcribers) {
      subcriber(toastUp);
    }
  }
}
