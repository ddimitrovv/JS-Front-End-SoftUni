function meetingsSchedule(info) {
    let meetings = {};
    for (const schedule of info) {
        let detailedInfo = schedule.split(' ');
        if (detailedInfo[0] in meetings) {
            console.log(`Conflict on ${detailedInfo[0]}!`);
            continue;
        }
        meetings[detailedInfo[0]] = detailedInfo[1];
        console.log(`Scheduled for ${detailedInfo[0]}`)
    }

    for (const[day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`)
    }
}