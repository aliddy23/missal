const fs = require("fs");
const path = require("path");
const readline = require("readline");

const fileStream = fs.createReadStream(path.join(__dirname, "masses.txt"), "utf8");

const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity,
});

let mass = {};
let currThing = "";
let currThingCounter = 0;
let counter = 0;

// Event listener for each line
rl.on("line", (line) => {
	if (!mass.name) {
		mass.name = line;
	}

	if (currThingCounter > 2) {
		currThing = "";
		currThingCounter = 0;
	}

	if (line.includes("INTROIT")) {
		mass.introit = [line.substring(10)];
		currThing = "introit";
		currThingCounter = 0;
	} else if (line.includes("COLLECT")) {
		mass.collect = [line.substring(10)];
		currThing = "collect";
		currThingCounter = 0;
	} else if (line.includes("EPISTLE")) {
		mass.epistle = [line.substring(10)];
		currThing = "epistle";
		currThingCounter = 0;
	} else if (line.includes("GRADUAL")) {
		mass.gradual = [line.substring(10)];
		currThing = "gradual";
		currThingCounter = 0;
	} else if (line.includes("TRACT")) {
		mass.tract = [line.substring(8)];
		currThing = "tract";
		currThingCounter = 0;
	} else if (line.includes("ALLELUIA")) {
		mass.alleluia = [line.substring(11)];
		currThing = "alleluia";
		currThingCounter = 0;
	} else if (line.includes("GOSPEL")) {
		mass.gospel = [line.substring(9)];
		currThing = "gospel";
		currThingCounter = 0;
	} else if (line.includes("OFFERTORY")) {
		mass.offertory = [line.substring(11)];
		currThing = "offertory";
		currThingCounter = 0;
	} else if (line.includes("SECRET")) {
		mass.secret = [line.substring(8)];
		currThing = "secret";
		currThingCounter = 0;
	} else if (line.includes("COMMUNION") && !line.includes("POSTCOMMUNION")) {
		mass.communion = [line.substring(11)];
		currThing = "communion";
		currThingCounter = 0;
	} else if (line.includes("POSTCOMMUNION")) {
		mass.postcommunion = [line.substring(15)];
		currThing = "postcommunion";
		currThingCounter = 0;
	}

	if (currThingCounter == 0 && currThing != "") {
		mass[currThing] = [line.substring(currThing.length + 3)];
	} else if (currThingCounter == 1) {
		mass[currThing].push(line);
	} else if (currThingCounter == 2) {
		mass[currThing].push(line.substring(1, line.length - 2));
	}

	counter++;
	if (currThing != "") currThingCounter++;

	if (line == "Ite missa est" || line == "PROPERS OF THE SAINTS") {
		console.log(`${mass.name.toLowerCase().split(" ").join("")}.json`);
		fs.writeFileSync(path.join(__dirname, `./masses/${mass.name.toLowerCase().split(" ").join("")}.json`), JSON.stringify(mass));
		mass = {};
	}
});

// Event listener when the file reading is complete
rl.on("close", () => {
	console.log(`${mass.name.toLowerCase().split(" ").join("")}.json`);
	fs.writeFileSync(path.join(__dirname, `./masses/${mass.name.toLowerCase().split(" ").join("")}.json`), JSON.stringify(mass));
	mass = {};
});
// for (let book = 0; book < books.length; book++) {
// 	let testament = "o";

// 	if (book > 45) testament = "n";

// 	let data = {
// 		...books[book],
// 		prev: books[book - 1]?.short.toLowerCase().split(" ").join("") || null,
// 		prevLen: books[book - 1]?.ch.length || null,
// 		next: books[book + 1]?.short.toLowerCase().split(" ").join("") || null,
// 		id: books[book].short.toLowerCase().split(" ").join(""),
// 		verses: [],
// 		testament,
// 	};

// 	for (let verse of verses.filter((verse) => verse.booknumber === books[book].num)) {
// 		data.verses.push({
// 			verse: verse.versenumber,
// 			text: verse.text,
// 			num: verse.chapternumber,
// 			notes: verse.notes || [],
// 		});
// 	}

// 	books[book].id = books[book].short.toLowerCase().split(" ").join("");
// 	books[book].prevLen = books[book - 1]?.ch.length || null;
// 	books[book].testament = testament;

// 	short.push({
// 		id: books[book].id,
// 		num: books[book].num,
// 		short: books[book].short,
// 		name: books[book].name,
// 		group: books[book].group,
// 		testament,
// 	});

// 	fs.writeFileSync(path.join(__dirname, `./books/${books[book].short.toLowerCase().split(" ").join("")}.json`), JSON.stringify(data));
// }

// fs.writeFileSync(path.join(__dirname, "./books.json"), JSON.stringify(books));
// fs.writeFileSync(path.join(__dirname, "./short.json"), JSON.stringify(short));
