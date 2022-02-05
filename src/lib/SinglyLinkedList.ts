import { SinglyLinkedNode } from "./Node";

class SinglyLinkedList {
	private _length: number;
	private _head: SinglyLinkedNode | null;
	private _tail: SinglyLinkedNode | null;
	constructor() {
		this._length = 0;
		this._head = null;
		this._tail = null;
	}

	
	public get head() : SinglyLinkedNode | null {
		return this._head;
	}

	public get tail() : SinglyLinkedNode | null {
		return this._tail;
	}

	public get length() : number {
		return this._length;
	}
	//Adds Nodes to the end of the list
	push(value: any) {
		const newNode = new SinglyLinkedNode(value);
		if(!this._head) {
			this._head = newNode;
			this._tail = this._head
		} else {
			if(this._tail !== null) {
				this._tail.next = newNode;
				this._tail = newNode;
			}
			
		}
		this._length++;
	}

	//removes nodes from beginning of list
	shift() {

	}
}

const newList = new SinglyLinkedList();
console.log(newList.head) //expect null
console.log(newList.tail) //expect null
console.log(newList.length) //expect 0
newList.push(3);
console.log(newList.length) //expect 1
console.log(newList.head)
console.log(newList.tail)
console.log(newList.head?.value) //expect 3
console.log(newList.tail?.value) // expect 3

newList.push('Brian');
console.log(newList.length) //expect 2
console.log(newList.head?.value) //expect 3
console.log(newList.tail?.value) //expect "Brian"

