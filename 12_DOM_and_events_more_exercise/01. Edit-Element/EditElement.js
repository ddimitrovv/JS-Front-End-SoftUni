function editElement(element, oldString, newString) {
    element.textContent = element.textContent.split(oldString).join(newString);
}