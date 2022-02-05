import { Node } from "../nodes/Node";
import { LinkedList, ILinkedList } from "./LinkedList";

interface IQueue extends ILinkedList {
	addBack(value: any) : void;
	removeFront() : undefined | Node;

}
class Queue extends LinkedList implements IQueue {
	public addBack(value: any): void {
			const newNode = new Node(value);
			if(!this._head) {
				this._head = newNode;
				this._tail = this._head;
			} else {
				if(this._tail) {
					this._tail.next = newNode;
					this._tail = newNode;
				}
			}
			this._length++
	}

	public removeFront(): undefined | Node {
			if(!this._head) return undefined;
			const currentHead = this._head;
			this._head = this._head.next 
			this._length--

			if(this._length === 0) {
				this._tail = null;
			}
			return currentHead
	}
}