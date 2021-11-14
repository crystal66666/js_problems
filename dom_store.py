class NodeStore {
  storage = {}
   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.storage[Symbol.for(node)] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.storage[Symbol.for(node)];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return Boolean(this.storage[Symbol.for(node)]);
  }
}
