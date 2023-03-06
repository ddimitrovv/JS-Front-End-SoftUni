function schoolRegister(inputArray) {
    let register = {};
    for (let studentInfo of inputArray) {
        let [studentName, studentGrade, averageGrade] = studentInfo.split(', ');
        let currentName = currentInfo(studentName);
        let currentGrade = currentInfo(studentGrade);
        let currentAverage = currentInfo(averageGrade);

        if (currentAverage >= 3) {
            currentGrade++;
        } else {
            continue;
        }
        
        if (!register.hasOwnProperty(currentGrade)) {
            register[currentGrade] = {'students': [], 'score': []};
        }
        register[currentGrade].students.push(currentName);
        register[currentGrade].score.push(currentAverage);
    }


    function currentInfo(strInfo) {
        return strInfo.split(' ').pop();
    }

    for (const [key, value] of Object.entries(register)) {
        console.log(`${key} Grade\nList of students: ${value.students.join(', ')}\nAverage annual score from last year: ${(value.score.reduce((a, b) => Number(a) + Number(b), 0) / value.score.length).toFixed(2)}\n`);
    }
}