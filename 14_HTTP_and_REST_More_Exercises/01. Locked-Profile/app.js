function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
        main.textContent = '';
        for (key in data) {
            const div = document.createElement('div');
            div.className = 'profile';
            const profileImage = document.createElement('img');
            profileImage.src = './iconProfile2.png';
            profileImage.className = 'userIcon';
            const labelLock = document.createElement('label');
            labelLock.textContent = 'Lock';
            const radioLock = document.createElement('input');
            radioLock.type = 'radio';
            radioLock.name = 'user1Locked';
            radioLock.value = 'lock';
            radioLock.checked = true;
            const labelUnlock = document.createElement('label');
            labelUnlock.textContent = 'Unlock';
            const radioUnlock = document.createElement('input');
            radioUnlock.type = 'radio';
            radioUnlock.name = 'user1Locked';
            radioUnlock.value = 'unlock';
            const hr = document.createElement('hr');
            const labelUsername = document.createElement('label');
            labelUsername.textContent = 'Username';
            const usernameInput = document.createElement('input');
            usernameInput.type = 'text';
            usernameInput.name = 'user1Username';
            usernameInput.value = data[key].username;
            usernameInput.disabled = true;
            usernameInput.readOnly = true;
            // User More Info
            const moreInfoDiv = document.createElement('div');
            moreInfoDiv.id = 'user1HiddenFields';
            const moreInfoHr = document.createElement('hr');
            const emailLabel = document.createElement('label');
            emailLabel.textContent = 'Email:';
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.name = 'user1Email';
            emailInput.value = data[key].email;
            emailInput.disabled = true;
            emailInput.readOnly = true;
            const ageLabel = document.createElement('label');
            ageLabel.textContent = 'Age:';
            const ageInput = document.createElement('input');
            ageInput.type = 'email';
            ageInput.name = 'user1Age';
            ageInput.value = data[key].age;
            ageInput.disabled = true;
            ageInput.readOnly = true;
            moreInfoDiv.append(moreInfoHr, emailLabel, emailInput, ageLabel, ageInput);
            moreInfoDiv.style.display = 'none';
            const moreInfoButton = document.createElement('button');
            moreInfoButton.textContent = 'Show more';
            moreInfoButton.addEventListener('click', lockedProfile)
            div.append(profileImage, labelLock, radioLock, labelUnlock, radioUnlock, hr, labelUsername, usernameInput, moreInfoDiv, moreInfoButton);
            main.appendChild(div);
        }
    })

    function lockedProfile() {
        const divElements = Array.from(document.getElementsByClassName('profile'));
        divElements.forEach(element => {
            const radioButton = Array.from(element.getElementsByTagName('input'));
            const radioLock = radioButton[0];
            const radioUnlock = radioButton[1];
            const button = Array.from(element.getElementsByTagName('button'))[0];
    
            radioLock.addEventListener('change', () => {
                element.getElementsByTagName('button').disabled = true;
            })
            radioUnlock.addEventListener('change', () => {
                element.getElementsByTagName('button').disabled = false;
            })
    
            button.addEventListener('click', (e) => {
                if (radioUnlock.checked){
                    Array.from(element.getElementsByTagName('div'))[0].style.display = 'block';
                    button.textContent = 'Hide it';
                    button.addEventListener('click', (e) => {
                        if (radioUnlock.checked) {
                            Array.from(element.getElementsByTagName('div'))[0].style.display = 'none';
                            button.textContent = 'Show more';
                        }
                    });
                }
            });
        });
    }
}