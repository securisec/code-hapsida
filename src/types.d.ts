export interface Options {
	name: string;
	colors: {
		check?: string;
		background: string;
		primary: string;
		secondary: string;
		tertiary: string;
		warning: string;
		info: string;
		error: string;
		success: string;
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
		selection: string;
		variables: string;
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
			a?: string;
			b?: string;
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
