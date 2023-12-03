const fs = require("fs");
const path = require("path");

const bookData = fs.readFileSync(path.join(__dirname, "books.json"), "utf8");
let books = JSON.parse(bookData).sort((a, b) => a.num - b.num);
let short = [];

const verseData = fs.readFileSync(path.join(__dirname, "verses.json"), "utf8");
const verses = JSON.parse(verseData);

for (let book = 0; book < books.length; book++) {
	let testament = "o";

	if (book > 45) testament = "n";

	let data = {
		...books[book],
		prev: books[book - 1]?.short.toLowerCase().split(" ").join("") || null,
		prevLen: books[book - 1]?.ch.length || null,
		next: books[book + 1]?.short.toLowerCase().split(" ").join("") || null,
		id: books[book].short.toLowerCase().split(" ").join(""),
		verses: [],
		testament,
	};

	for (let verse of verses.filter((verse) => verse.booknumber === books[book].num)) {
		data.verses.push({
			verse: verse.versenumber,
			text: verse.text,
			num: verse.chapternumber,
			notes: verse.notes || [],
		});
	}

	books[book].id = books[book].short.toLowerCase().split(" ").join("");
	books[book].prevLen = books[book - 1]?.ch.length || null;
	books[book].testament = testament;

	short.push({
		id: books[book].id,
		num: books[book].num,
		short: books[book].short,
		name: books[book].name,
		group: books[book].group,
		testament,
	});

	fs.writeFileSync(path.join(__dirname, `./books/${books[book].short.toLowerCase().split(" ").join("")}.json`), JSON.stringify(data));
}

fs.writeFileSync(path.join(__dirname, "./books.json"), JSON.stringify(books));
fs.writeFileSync(path.join(__dirname, "./short.json"), JSON.stringify(short));
