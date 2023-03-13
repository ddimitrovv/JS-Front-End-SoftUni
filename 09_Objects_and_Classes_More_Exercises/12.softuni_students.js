function softUniStudents(inputArray) {
    let data = {};
    for (const info of inputArray) {
        if (info.includes(':')) {
            [courseName, courseCapacity] = info.split(': ');
            if (!data.hasOwnProperty(courseName)) {
                data[courseName] = {students: [], capacity: Number(courseCapacity)};
            } else {
                data[courseName].capacity += Number(courseCapacity);
            }
        } else {
            let information = info.split(' ');
            let userInfo = information[0];
            let username = userInfo.split('[')[0];
            let userCredits = Number(userInfo.split('[')[1].substring(0, userInfo.split('[')[1].length - 1));
            let userEmail = information[3];
            let courseName = information[5];
            if (data.hasOwnProperty(courseName) && data[courseName].capacity > 0) {
                data[courseName].students.push({username, userCredits, userEmail});
                data[courseName].capacity--;
            }
        }
    }
    
    let sortedData = Object.keys(data).sort((a, b) => data[b].students.length - data[a].students.length);
    
    for (courseName of sortedData) {
        console.log(`${courseName}: ${data[courseName].capacity} places left`);
        let sortedStudents = data[courseName].students.sort((a, b) => b.userCredits - a.userCredits)
        sortedStudents.forEach(element => {
            console.log(`--- ${element.userCredits}: ${element.username}, ${element.userEmail}`);
        });
    }
}


softUniStudents(
    ['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']
);

softUniStudents(
    ['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
);