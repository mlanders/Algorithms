class Node {
	constructor(value, next = null, prev = null) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class DLL {
	constructor() {
		this.length = 0;
		this.head = null;
		// this.tail = null;
	}
	/**
	 *
	 * @param {value} value
	 *
	 * Create new node with value passed in.
	 *
	 * - If no head property, set head and tail to the new node
	 *
	 * - Otherwise set next property on the tail to be the new node and set the tail property on the list to be the new node
	 *
	 * - Increment list length by 1
	 */
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			// this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	append(value) {
		let newNode = new Node(value);
		let last = this.head;

		if (!this.head) {
			this.head = newNode;
			this.length++;
			return;
		}

		while (last.next !== null) {
			last = last.next;
		}
		last.next = newNode;
		newNode.prev = last;
		this.length++;
	}
	insertBefore(nextNode, value) {
		const newNode = new Node(value);

		if (!nextNode) {
			console.log("Next given node cannot be NULL");
			return;
		}

		newNode.prev = nextNode.prev;
		nextNode.prev = newNode;
		newNode.next = nextNode;
		if (newNode.prev !== null) {
			newNode.prev.next = newNode;
		} else {
			this.head = newNode;
		}
		this.length++;
	}

	insertAfter(prevNode, value) {
		const newNode = new Node(value);

		if (!prevNode) {
			console.log("Prev given node cannot be NULL");
			return;
		}

		newNode.next = prevNode.next;
		prevNode.next = newNode;
		newNode.prev = prevNode;
		if (newNode.next !== null) {
			newNode.net.prev = newNode;
		}
		this.length++;
	}
	printList() {
		let node = this.head;

		while (node.next !== null) {
			console.log(node.value);
			node = node.next;
		}
		console.log(node.value);
	}

	/**
	 *
	 * @param {}
	 *
	 * - If no nodes in the list, return udefined
	 *
	 * - Loop through the list until you reach the tail
	 *
	 * - Set the next property of the 2nd to last node to be null
	 *
	 * - Set the tail to be the 2nd to last node
	 *
	 * - Decrement length by 1
	 *
	 * - Return the value of the node removed
	 */
	pop() {
		if (!this.head) {
			return undefined;
		}
		let current = this.head;

		while (current.next !== null) {
			current = current.next;
		}
		const temp = current;
		current.prev.next = null;
		this.length--;
		return temp;
	}
	/**
	 *
	 * @param {value} value
	 *
	 * - If no nodes in the list, return udefined
	 *
	 * - Store current head in a variable
	 *
	 * - Set the head property to the be the current heads next property
	 *
	 * - Decrement length by 1
	 *
	 * - Return the value of the node removed
	 */
	shift() {
		let temp = this.head;
		if (!this.head) {
			return undefined;
		}

		this.head = temp.next;
		this.head.prev = null;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return temp;
	}
	/**
	 *
	 * @param {value} value
	 *
	 * if there is no head, set the head and tail to the new node
	 * - Otherwise set the new node next property to be the current head property on the list
	 *
	 * - Set the head property on the list to be the newly create dnode
	 *
	 * - intrement the list by 1
	 *
	 * - return the list
	 */
	unshift(value) {
		let newNode = new Node(value);
		let currentHead = this.head;
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.head = newNode;
			this.head.next = currentHead;
		}
		this.length++;
		return this;
	}
}

export default DLL;
