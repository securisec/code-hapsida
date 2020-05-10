export interface Options {
	name: string;
	colors: {
		background: string;
		functions: string;
		expression: string;
		controlflow: string;
		conditional: string;
		strings: string;
		types: string;
		foreground: string;
		arguments: string;
		objectkeys: string;
		classname: string;
		exportbool: string;
		python?: {
			self?: string;
			type?: string;
		};
		regex?: {
			blue?: string;
			yellow?: string;
			red?: string;
			green?: string;
			orange?: string;
		};
		green: {
			a: string;
		};
		red: {
			a: string;
		};
		blue?: {
			a: string;
		};
		yellow?: {
			a: string;
		};
		orange?: {
			a: string;
		};
		purple?: {
			a: string;
		};
		cyan?: {
			a: string;
		};
	};
}
