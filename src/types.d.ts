export interface Colors {
	colors: {
		background: string;
		foreground: string;
		accent: string;
		primary: string;
		secondary: string;
		red: string;
		green: string;
		blue: string;
		yellow: string;
		cyan: string;
		purple: string;
		light: {
			red: string;
			green: string;
			blue: string;
			yellow: string;
			cyan: string;
			purple: string;
		};
		dark: {
			red: string;
			green: string;
			blue: string;
			yellow: string;
			cyan: string;
			purple: string;
		};
		other: {
			orange: string;
		};
		check: string;
	};
}

export interface Options extends Colors {
	name: string;
}
