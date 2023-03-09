function employees(namesArray) {

    let employeesArray = [];

    class Person {
        constructor(name, number) {
            this.name = name;
            this.personalNumber = number;
        }
    };

    for (let i = 0; i < namesArray.length; i++) {
        const currentPerson = new Person(namesArray[i], namesArray[i].length);
        employeesArray.push(currentPerson);
    }

    for (const employee of employeesArray) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

// ---------- Solution 2 ----------

function employees(namesArray) {

    let employeesData = namesArray.reduce((data, employee) => {
        data[employee] = employee.length;
        return data;
    }, {});

    for (const employee in employeesData) {
        console.log(`Name: ${employee} -- Personal Number: ${employeesData[employee]}`);
    }
}