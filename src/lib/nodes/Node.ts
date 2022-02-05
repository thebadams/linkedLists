export interface INode<T extends Node> {
	get value() : any;
	get previous(): T | null;
	get next(): T | null;
	set next(value: T | null);
	set previous(value: T | null);
}

export class Node implements INode<Node>{
	protected _value: any;
	protected _previous : Node | null;
	protected _next: Node | null;

	constructor(value: any) {
		this._value = value;
		this._previous = null;
		this._next = null;
	}

	get value(): any {
			return this._value;
	}

	get previous(): Node | null {
			return this._previous
	}
	set previous(value: Node | null) {
			this._previous = value;
	}

	get next(): Node | null {
			return this._next
	}
	set next(value: Node | null) {
			this._next = value;
	}

}