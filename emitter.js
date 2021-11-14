class EventEmitter {
  constructor() {
    this.eventMap = new Map();
    this.nextId = 0;
  }

  subscribe(eventName, callback) {
    let uuidToCallback = this.eventMap.get(eventName);
    if (!uuidToCallback) {
      uuidToCallback = new Map();
      this.eventMap.set(eventName, uuidToCallback);
    }
    const uuid = this.nextId;
    uuidToCallback.set(uuid, callback);
    this.nextId++;
    return {
      release: () => {
        uuidToCallback.delete(uuid);
        if (uuidToCallback.size == 0) {
          this.eventMap.delete(eventName);
        }
      }
    }
  }

  emit(eventName, ...args) {
    const subscribers = this.eventMap.get(eventName);
    if (subscribers) {
      subscribers.forEach((fn) => {
        fn.apply(null, args);
      });
    }
  }
}
