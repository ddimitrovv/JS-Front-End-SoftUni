function roadRadar (speed, area) {

    let status = ''
    let speedLimits = Object()
    speedLimits = {}
    speedLimits['motorway'] = 130
    speedLimits['interstate'] = 90
    speedLimits['city'] = 50
    speedLimits['residential'] = 20

    if (speedLimits[area] != undefined) {
        if (speed <= speedLimits[area]) {
            console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
        } else {
            if (speed - speedLimits[area] <= 20) {
                status = 'speeding'
            } else if (speed - speedLimits[area] <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${speed - speedLimits[area]} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
        }
    }
}