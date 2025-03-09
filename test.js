const readline = require("readline");

// List of time zones to check
const timeZones = [
    "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
    "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo", "Asia/Shanghai",
    "Asia/Kolkata", "Australia/Sydney", "Pacific/Honolulu", "Africa/Johannesburg",
    "America/Toronto", "America/Mexico_City", "Asia/Dubai", "Asia/Singapore"
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Return locations matching only the hour, ignoring minutes
function getLocations(inputTime) {
    let matchingLocations = [];
    let inputHour = inputTime.split(":")[0]; // Extracts HH part

    timeZones.forEach(tz => {
        let formattedTime = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            hour12: false
        }).format(new Date());

        if (formattedTime === inputHour) {
            matchingLocations.push(tz);
        }
    });

    return matchingLocations;
}

rl.question("Enter time (HH:MM, 24h format): ", (time) => {
    if (!/^\d{2}:\d{2}$/.test(time)) {
        console.log("Invalid format. Please use HH:MM in 24-hour format.");
        rl.close();
        return;
    }

    const locations = getLocations(time);

    if (locations.length > 0) {
        console.log(`It is currently around ${time} in these locations:`);
        console.log(locations.join(", "));
    } else {
        console.log(`No locations found for ${time}.`);
    }

    rl.close();
});
