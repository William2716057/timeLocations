
//enter time
//where time Intl.DateTimeFormat

//function getLocations(time)

//const time = prompt("Please enter time: ")

//function displayLocation() {

//while Intl.DateTimeFormat = time
//let locations = 

//console.log("It is currently ${time} in these locations")

//}

//let time = prompt("Please enter time: ")

//displayLocation(time)

function getLocations(time) {
	const timeZones - Intl.supportedValuesOf("timezone");
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

const time = prompt("Enter time: (HH:MM, 24h)");

const locations = getLocations(time):



