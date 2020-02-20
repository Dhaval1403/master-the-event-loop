const queue = {
	head: null,
	tail: null,
	push: function(value) {
		const node = {
			value,
			next: null,
		};

		// if queue is empty
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	},
	pop: function() {
		// if queue is empty
		if (this.head === null) return null;
		const head = this.head;
		this.head = this.head.next;

		// return the top value
		return head.value;
	},
};

export default queue;
