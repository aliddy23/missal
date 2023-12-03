interface Book {
	num: number;
	short: string;
	name: string;
	fmlname: string;
	group: string;
	desc: string;
	ch: Chapter[];
	id: string;
	prev: string;
	prevLen: number;
	next: string;
	verses: Verse[];
	testament: "o" | "n" | "a" | "s";
}

interface Chapter {
	name: string;
	desc: string;
	num: number;
}

interface Verse {
	verse: number;
	text: string;
	num: number;
	notes: string[];
}
