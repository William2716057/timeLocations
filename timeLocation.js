const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function getLocations(time) {
	const timeZones = Intl.supportedValuesOf("timezone");
	let matchingLocations = [];

	timeZones.forEach(tz => {
		let formattedTime = new Intl.DateTimeFormat('en-US', {
			timeZone: tz,
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		}).format(new Date());

		if (formattedTime === time) {
			matchingLocations.push(tz);
		}
	});

	return matchingLocations;
}

//const time = prompt("Enter time: (HH:MM, 24h)");
rl.question("Enter time: (HH:MM, 24h)", (time)=> {
	const locations = getLocations(time);

	if (locations.length > 0) {
		console('Locations where time = ${time} ')
		console.log(locations.join(", "));
	} else {
		console.log("No locations found");
	}
	rl.close();
});
