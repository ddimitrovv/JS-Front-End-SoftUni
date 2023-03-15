function shoppingList(inputArray) {

    function urgent(item) {
        if (!(shoppingList.includes(item))) {
            shoppingList.unshift(item);
        }
    }

    function unnecessary(item) {
        if (shoppingList.includes(item)) {
            shoppingList = shoppingList.filter(el => el !== item)
        }
    }

    function correct(oldItem, newItem) {
        if (shoppingList.includes(oldItem)) {
            const index = shoppingList.indexOf(oldItem);
            shoppingList[index] = newItem;
        }
    }

    function rearrange (item) {
        if (shoppingList.includes(item)) {
            const index = shoppingList.indexOf(item);
            shoppingList.splice(index, 1);
            shoppingList.push(item);
        }
    }

    let shoppingList = inputArray.shift().split('!');
    
    for (info of inputArray) {
        if (info === 'Go Shopping!') {
            break;
        } else if (info.includes('Urgent')) {
            const [_command, item] = info.split(' ');
            urgent(item);
        } else if (info.includes('Unnecessary')) {
            const [_command, item] = info.split(' ');
            unnecessary(item);
        } else if (info.includes('Correct')) {
            const [_command, oldItem, newItem] = info.split(' ');
            correct(oldItem, newItem);
        } else if (info.includes('Rearrange')) {
            const [_command, item] = info.split(' ');
            rearrange(item);
        }
    }

    console.log(shoppingList.join(', '));
}

shoppingList(
    ["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]
);

shoppingList(
    ["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
);