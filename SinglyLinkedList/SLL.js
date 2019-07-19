class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
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
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
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
        let temp = this.head;
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;

        while (temp) {
            if (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
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
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
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

let list = new SLL();
list.unshift('hello');
list.unshift('dog');
console.log(list);
