import { Node } from "../nodes/Node";
import { LinkedList, ILinkedList } from "./LinkedList";

interface IStack extends ILinkedList {
	addFront(value: any) : void;
	removeFront() : undefined | Node;
}
class Stack extends LinkedList implements IStack {
	public addFront(value: any): void {
		const newNode = new Node(value);
		if(!this._head) {
			this._head = newNode;
			this._tail = this._head
		}
			this._length++
	}

	public removeFront(): Node | undefined {
			if(!this._head) return undefined;
			const currentHead = this._head;

			this._head = this._head.next;
			this._length--
			if(this._length === 0) {
				this._tail = null;
			} 
			return currentHead
	}
}