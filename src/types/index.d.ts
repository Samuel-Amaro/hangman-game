export type Data = {
	categories: Category[];
};

export type Name = {
	name: string;
	selected: boolean;
};

export type Category = {
	id: number;
	category: string;
	names: Name[];
};

export type Letter = {
	id: number;
	text: string;
	selected: boolean;
}
