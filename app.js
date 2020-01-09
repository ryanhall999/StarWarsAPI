let films = document.getElementById("films");
let people = document.getElementById("people");
let starships = document.getElementById("starships");
let vehicles = document.getElementById("vehicles");
let response1 = "";
let response2 = "";
let response3 = "";
let response4 = "";

async function getData() {
	let preResponse1 = await fetch(`http://star-cors.herokuapp.com/films`).catch(
		function(error) {
			console.log(error);
			reject("Something went wrong. Please refresh the page and try again.");
		}
	);
	let preResponse2 = await fetch(`http://star-cors.herokuapp.com/people`).catch(
		function(error) {
			console.log(error);
			reject("Something went wrong. Please refresh the page and try again.");
		}
	);
	let preResponse3 = await fetch(
		`http://star-cors.herokuapp.com/starships`
	).catch(function(error) {
		console.log(error);
		reject("Something went wrong. Please refresh the page and try again.");
	});
	let preResponse4 = await fetch(
		`http://star-cors.herokuapp.com/vehicles`
	).catch(function(error) {
		console.log(error);
		reject("Something went wrong. Please refresh the page and try again.");
	});
	response1 = await preResponse1.json();
	response2 = await preResponse2.json();
	response3 = await preResponse3.json();
	response4 = await preResponse4.json();
	// console.log(response1);
	// console.log(response2);
	// console.log(response3);
	// console.log(response4);

	makeFilmList(response1);
	makePeopleList(response2);
	makeShipList(response3);
	makeVehList(response4);
}

function makeFilmList(stuff) {
	let words = stuff.results;
	films.innerHTML += `<br><div>Viewing ${response1.count} out of ${response1.count} films</div><br>`;
	films.innerHTML += `<ul>`;
	// console.log(stuff);
	for (let i = 0; i < words.length; i++) {
		films.innerHTML += `<li class="list"><div class="topText">${stuff.results[i].title}</div><br>Released on: ${stuff.results[i].release_date}</li><br>`;
	}
	films.innerHTML + `</ul>`;
}

function makePeopleList(stuff) {
	let words = stuff.results;
	people.innerHTML += `<br><div>Viewing ${words.length} out of ${stuff.count} people</div><br>`;
	if (stuff.next) {
		people.innerHTML += `<div><button type="button" class="btn btn-primary">Load More</button></div><br>`;
	}
	people.innerHTML + `<ul>`;
	// console.log(stuff);
	for (let i = 0; i < words.length; i++) {
		people.innerHTML += `<li class="list"><div class="topText">${words[i].name}</div><br>Appears in ${words[i].films.length} films</li><br>`;
	}
	people.innerHTML + `</ul>`;
}

function makeShipList(stuff) {
	let words = stuff.results;
	starships.innerHTML += `<br><div>Viewing ${words.length} out of ${stuff.count} ships</div><br>`;
	if (stuff.next) {
		starships.innerHTML += `<div><button type="button" class="btn btn-primary">Load More</button></div><br>`;
	}
	starships.innerHTML + `<ul>`;
	// console.log(words);
	for (let i = 0; i < words.length; i++) {
		starships.innerHTML += `<li class="list"><div class="topText">${words[i].name}</div><br>${words[i].starship_class}</li><br>`;
	}
	starships.innerHTML + `</ul>`;
}

function makeVehList(stuff) {
	let words = stuff.results;
	vehicles.innerHTML += `<br><div>Viewing ${words.length} out of ${stuff.count} vehicles</div><br>`;
	if (stuff.next) {
		vehicles.innerHTML += `<div><button type="button" class="btn btn-primary">Load More</button></div><br>`;
	}
	vehicles.innerHTML + `<ul>`;
	// console.log(words);
	for (let i = 0; i < words.length; i++) {
		vehicles.innerHTML += `<li class="list"><div class="topText">${words[i].name}</div><br>${words[i].manufacturer}</li><br>`;
	}
	vehicles.innerHTML + `</ul>`;
}

function filterFilms(event) {
	let letter = event.key;
	console.log(response1);
	let newFilms = response1.results.filter(film => film.title.includes(letter));
	console.log(newFilms);
	// makeFilmList(newFilms);
}

function filterPeople(event) {
	let letter = event.key;
	console.log(response2);
	let newPeople = response2.results.filter(film => film.name.includes(letter));
	console.log(newPeople);
	// makeFilmList(newFilms);
}

function filterShips(event) {
	let letter = event.key;
	console.log(response3);
	let newShips = response3.results.filter(film => film.name.includes(letter));
	console.log(newShips);
	// makeFilmList(newFilms);
}

function filterVeh(event) {
	let letter = event.key;
	console.log(response4);
	let newVeh = response4.results.filter(film => film.name.includes(letter));
	console.log(newVeh);
	// makeFilmList(newFilms);
}
getData();
