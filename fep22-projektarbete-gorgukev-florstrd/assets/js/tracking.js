console.log("tracking INIT")

console.log(`User platform: ${navigator.userAgentData.platform}
User web browser: ${navigator.userAgentData.brands[2].brand}
User language: ${navigator.language}
User screen resolution: ${screen.width + "x" + screen.height}
`)

const userLocation = (position) => {
    console.log("User coordinates:", position.coords.latitude, position.coords.longitude);
}

const userLocationError = () => {
    console.log("User denied location");
}

navigator.geolocation.getCurrentPosition(userLocation, userLocationError);
