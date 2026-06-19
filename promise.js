// Day 2 Kids
//const delay = ms => setTimeout(() => console.log('Hello after ', ms, ' milliseconds'), ms)
//delay(2000);

console.log("Requesting data...");

const p = new Promise((resolve) => {
	const data = {
		name: "Rohit",
	};
	setTimeout(() => {
		console.log(data, "\nData fetched.");
		resolve(data);
	}, 2000);
});

p.then((data) => {
	console.log("Adding surname...");
	data.surname = "Chauhan";

	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Surname added.\n", data);
			resolve();
		}, 2000);
	});
}).finally(() => console.log("Request completed."));
