const Node = require('./node');

class ListNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }


    append(data) {
        let node = new ListNode(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            let temp = this._tail;
            this._tail = node;
            node.previous = temp;
            temp.next = node;
        }
        this.length++;
    }

    pop() {
        if (!this._head) return false;
        let temp = this._tail;
        if (this.length === 1) {
            this._head = null;
            this._tail = null;
        } else {
            this._tail = temp.previous;
            this.tail.next = null;
            temp.previous = null;
        }
        this.length--;
    }

    shift() {
        let temp = this._head;
        if (this.length === 1) {
            this._head = null;
            this._tail = null;
        } else {
            this._head = temp.next;
            this._head.previous = null;
            temp.next = null;
        }
        this.length--;
    }

    unshift(value) {
        let node = new ListNode(value);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            let temp = this._head;
            this._head = node;
            node.next = temp;
            temp.previous = node;
        }
        this.length++
    }

    head() {
        console.log('asasa')
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }


    at(index) {
        let current = this._head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }


    insertAt(index, data) {
        let node = new ListNode(data);
        let current = this._head;
        let counter = 0;

        if (index === 0) return !!this.unshift(data);
        if (index = this.length) return !!this.append(data)
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        let temp = current;
        let previous = temp.previous;
        previous.next = node;
        node.next = temp;
        node.previous = previous;
        temp.previous = node;
        this.length++;

    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (index < 0 | index > this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let current = this._head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        let previous = current.previous;
        let next = current.next;
        previous.next = next;
        next.previous = previous;
        this.length--;
    }

    reverse() { }

    indexOf(data) { }
}

// let list = new LinkedList();
// list.append(32);
// list.append(47);
// list.insertAt(1, 34);
// list
// console.log(list.at(1))

module.exports = LinkedList;
