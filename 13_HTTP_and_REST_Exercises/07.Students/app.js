function attachEvents() {
	const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/'
	const submitButton = document.getElementById('submit');
	const tBody = document.querySelector('#results > tbody');
	const firstName = document.querySelector('#form > div.inputs > input[type=text]:nth-child(1)');
	const lastName = document.querySelector('#form > div.inputs > input[type=text]:nth-child(2)');
	const facultyNumber = document.querySelector('#form > div.inputs > input[type=text]:nth-child(3)');
	const grade = document.querySelector('#form > div.inputs > input[type=text]:nth-child(4)');

	submitButton.addEventListener('click', addStudent)

	function addStudent() {
		httpHeaders = {
			method: 'POST',
			body: JSON.stringify({
				firstName: `${firstName.value}`,
				 lastName: `${lastName.value}`, 
				 facultyNumber: `${facultyNumber.value}`, 
				 grade: `${grade.value}`}),
		}
		fetch(BASE_URL, httpHeaders)
		.then((response) => response.json())
		.then(loadStudentsInfo())
		.catch((error) => console.error(error.message))
	}
	
	function loadStudentsInfo() {
		tBody.textContent = '';
		fetch(BASE_URL)
		.then((response) => response.json())
		.then((data) => {
			for (const key in data) {
				let tr = document.createElement('tr');
				let tdFirstName = document.createElement('td');
				tdFirstName.textContent = data[key].firstName;
				tr.appendChild(tdFirstName);
				let tdLastName = document.createElement('td');
				tdLastName.textContent = data[key].lastName;
				tr.appendChild(tdLastName);
				let tdFacultyNumber = document.createElement('td');
				tdFacultyNumber.textContent = data[key].facultyNumber;
				tr.appendChild(tdFacultyNumber);
				let tdGrade = document.createElement('td');
				tdGrade.textContent = data[key].grade;
				tr.appendChild(tdGrade);

				tBody.appendChild(tr);
			}
		})
		.catch((error) => console.error(error.message));
	}
	loadStudentsInfo()
}

attachEvents();