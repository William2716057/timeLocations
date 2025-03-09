const readline = require("readline");

// add all
const timeZones = [
    "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
    "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo", "Asia/Shanghai",
    "Asia/Kolkata", "Australia/Sydney", "Pacific/Honolulu"
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//return areas that are within hour rather than specific minute
function getLocations(time) {
    let matchingLocations = [];

    timeZones.forEach(tz => {
        let formattedTime = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }).format(new Date());

        if (formattedTime === time) {
            matchingLocations.push(tz);
        }
    });

    return matchingLocations;
}

rl.question("Enter time (HH:MM, 24h): ", (time) => {
    if (!/^\d{2}:\d{2}$/.test(time)) {
        console.log("Invalid format. Please use HH:MM in 24-hour format.");
        rl.close();
        return;
    }

    const locations = getLocations(time);

    if (locations.length > 0) {
        console.log(`It is currently ${time} in these locations:`);
        console.log(locations.join(", "));
    } else {
        console.log(`No locations found for ${time}.`);
    }

    rl.close();
});
