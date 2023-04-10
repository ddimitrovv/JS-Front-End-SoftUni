function sprintReview(inputArray) {
    let people = {}
    let tasksPoints = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    }
    const n = Number(inputArray.shift());
    for (let i = 0; i < n; i++) {
        const [ assignee, taskId, title, status, estimatedPoints ] = inputArray.shift().split(':');
        if (!(assignee in people)) {
            people[assignee] = [];
        }
        people[assignee].push({
            taskId: taskId,
            title: title,
            status: status,
            estimatedPoints: Number(estimatedPoints)
        })
        tasksPoints[status] += Number(estimatedPoints);
    }

    while (inputArray.length > 0) {
        current = inputArray.shift();
        if (current.includes('Add')) {
            addNew(current);
        } else if (current.includes('Change')) {
            changeStatus(current);
        } else if (current.includes('Remove')) {
            removeTask(current);
        }
    }
    
    function addNew(current) {
        const [ _, assignee, taskId, title, status, estimatedPoints ] = current.split(':');
        if (!(assignee in people)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return
        }
        people[assignee].push({
            taskId: taskId,
            title: title,
            status: status,
            estimatedPoints: Number(estimatedPoints)
        })
        tasksPoints[status] += Number(estimatedPoints);

    }

    function changeStatus(current) {
        const [ _, assignee, taskId, newStatus ] = current.split(':');
        if (!(assignee in people)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return
        }
        for (task of people[assignee]) {
            if (task.taskId === taskId) {
                points = task.estimatedPoints
                tasksPoints[task.status] -= points;
                task.status = newStatus;
                tasksPoints[newStatus] += points;
                return
            }
        }
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
    }

    function removeTask(current) {
        const [ _, assignee, index ] = current.split(':');
        const numIndex = Number(index)
        if (!(assignee in people)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return
        }
        if (numIndex < 0 || numIndex >= people[assignee].length) {
            console.log('Index is out of range!')
            return
        }
        for (let i = 0; i < people[assignee].length; i++) {
            if (i === numIndex) {
                tasksPoints[people[assignee][i].status] -= people[assignee][i].estimatedPoints;
                people[assignee].splice(numIndex, 1)
            }
        }
    }

    for (const task in tasksPoints) {
        if (task === 'Done') {
            console.log(`${task} Points: ${tasksPoints[task]}pts`)
        } else {
            console.log(`${task}: ${tasksPoints[task]}pts`)
        }
    }

    if (tasksPoints['Done'] >= (tasksPoints['In Progress'] + tasksPoints['Code Review'] + tasksPoints['ToDo'])) {
        console.log('Sprint was successful!')
    } else {
        console.log('Sprint was unsuccessful...')
    }
}

springReview(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)

springReview(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)