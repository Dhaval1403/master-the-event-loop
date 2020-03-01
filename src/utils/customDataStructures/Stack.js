class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null //head
		this.bottom = null // tail
		this.length = 0
	}
	peek() {
		//return the most top element
		return this.top
	}
	push(value) {
		//push element to the top of the stack
		const newNode = new Node(value)

		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			const holdingPointer = this.top
			this.top = newNode
			this.top.next = holdingPointer
		}

		this.length++

		return this
	}
	pop() {
		//pop element off of the top of the stack

		if (!this.top) {
			return null
		}
		if (this.top === this.bottom) {
			this.bottom = null
		}

		const holdingPointer = this.top
		this.top = this.top.next
		this.length--

		return this.top
	}

	getValues() {
		let current = this.top
		const stackArray = []
		//for(let i= 0; i < this.length; i++){

		while (current) {
			stackArray.push(current.value)
			current = current.next
		}
		return stackArray
	}
}

export default Stack
