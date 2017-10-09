// Calculates hiking travel time based on equation in "The Backpacker's Handbook",
// Curtis, Rick, 2005. The equation is as follows:

/*
    An average hiker on flat terrain has a rate of 30 minutes a mile, or 2 miles per hour.
    Each hour of elevation gain generally adds 1 hour of additional travel time.
    Each hour traveled, usually requires at least 5 minutes of stopped rest.

    These values may need to be adjusted depending upon the individual, group or trip needs.

    A general equation is as follows:

    travel time = (miles traveled / 2 miles per hour) + (elevation gained in feet / 1,000 ft)
    + (total hours traveled * 5 minutes)

    Note, that `total hours traveled` in the equation above means the number of hours
    traveled, including time additions by elevation gain.
*/


function travelTime(hkDist, elvGain) {
    const dt = (((hkDist / 2) + (elvGain / 1000)) + ((((hkDist / 2) + (elvGain / 1000)) * 5) / 60)).toString().split('.'), // split to convert to whole minutes
        h = dt[0], // whole number hours
        m = Math.ceil(('.' + dt[1]) * 60); // convert to whole number minutes and round up to nearest whole

    return `${h} hours ${m} minutes`;
};

console.log('~~~~~~~~~~~~~~~~~~~~~~');
console.log('/// Test 1: 8 mi, 500ft gain ///')
console.log(travelTime(8, 500));
console.log('');
console.log('/// Test 2: 8.25mi, 520ft gain ///')
console.log(travelTime(8.25, 520));
console.log('');
console.log('/// Test 3: 12mi, 5699ft gain ///')
console.log(travelTime(12, 5699));
console.log('~~~~~~~~~~~~~~~~~~~~~~');
