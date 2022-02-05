interface INode {
	get value(): any;
	get next(): Node | null;
	set next(value: Node | null); 
}

interface IDoublyLinkedNode extends INode {
	get previous(): Node | null;
	set previous(value: Node | null);
} 

class Node {
	protected readonly _value: any;
	protected _next: Node | null
	constructor(value: any) {
		this._value = value;
		this._next = null;
	}
}

export class SinglyLinkedNode extends Node implements INode{

	constructor(value: any) {
		super(value);
	}

	get value(): any {
			return this._value
	}

	get next(): Node | null {
			return this._next;
	}
	set next(value: Node | null) {
			this._next = value;
	}
}

class DoublyLinkedNode extends SinglyLinkedNode implements IDoublyLinkedNode {
	private _previous: Node | null
	constructor(value: any) {
		super(value);
		this._previous = null;
	}

	get value(): any {
			return this._value;
	}

	get previous(): Node | null {
			return this._previous;
	}
	set previous(value: Node | null) {
			this._previous = value;
	}
}