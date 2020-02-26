class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

//FIFO

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}
	peek() {
		//get the first item of the Queue
		return this.first
	}
	enqueue(value) {
		//add an item to the queue
		const newNode = new Node(value)

		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}

		this.length++
		return this
	}
	dequeue() {
		//remove an item from the queue

		if (!this.first) {
			return null
		}

		if (this.first === this.last) {
			this.last = null
		}

		this.first = this.first.next
		this.length--

		return this
	}

	getValues() {
		let current = this.first
		const queueItems = []

		for (let i = 0; i < this.length; i++) {
			queueItems.push(current.value)
			current = current.next
		}

		return queueItems
	}
}

export default Queue
