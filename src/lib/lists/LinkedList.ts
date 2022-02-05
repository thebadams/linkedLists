import {Node, INode} from '../nodes/Node';

export interface ILinkedList {
	get head(): Node | null;
	get tail() : Node | null;
	get length() : number;
	addBack?(value: any) : void;
	addFront?(value: any) : void;
	removeBack?() : void;
	removeFront?() : void;
}

export class LinkedList implements ILinkedList {
	protected _head : Node | null;
	protected _tail: Node | null;
	protected _length: number;

	constructor() {
		this._length = 0;
		this._head = null;
		this._tail = null;
	}

	public get head() : Node | null {
		return this._head;
	}

	public get tail() : Node | null {
		return this._tail;
	}

	public get length() : number {
		return this._length;
	}

	
}