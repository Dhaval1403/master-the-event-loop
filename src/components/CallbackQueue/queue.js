const queue = {
  head: null,
  tail: null,
  push: function(value) {
    const node = {
      value,
      next: null
    };
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    console.log(this);
  },
  pop: () => {
    if (this.head === null) return null;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
};

export default queue;
