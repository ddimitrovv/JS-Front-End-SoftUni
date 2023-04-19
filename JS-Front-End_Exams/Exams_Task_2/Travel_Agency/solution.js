window.addEventListener('load', solution);

function solution() {
  // console.log('TODO: Write the missing functionality!');
  const inputs = {
    name: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    postalCode: document.getElementById('code'),
  }
  const buttons = {
    submitButton: document.getElementById('submitBTN'),
    editButton: document.getElementById('editBTN'),
    continueButton: document.getElementById('continueBTN'),
  }
  let reservation = {}
  const infoPreview = document.getElementById('infoPreview');
  const mainDiv = document.getElementById('block');

  buttons.submitButton.addEventListener('click', addData)

  function addData() {
    for (const input in inputs) {
      if (inputs[input].value === '') {
        return
      }
    }
    reservation = {
      name: inputs.name.value,
      email: inputs.email.value,
      phone: inputs.phone.value,
      address: inputs.address.value,
      postalCode: inputs.postalCode.value
    }
    const nameToAdd = document.createElement('li');
    nameToAdd.textContent = `Full Name: ${inputs.name.value}`;
    infoPreview.appendChild(nameToAdd);
    const emailToAdd = document.createElement('li');
    emailToAdd.textContent = `Email: ${inputs.email.value}`;
    infoPreview.appendChild(emailToAdd);
    const phoneToAdd = document.createElement('li');
    phoneToAdd.textContent = `Phone Number: ${inputs.phone.value}`;
    infoPreview.appendChild(phoneToAdd);
    const addressToAdd = document.createElement('li');
    addressToAdd.textContent = `Address: ${inputs.address.value}`;
    infoPreview.appendChild(addressToAdd);
    const postalCodeToAdd = document.createElement('li');
    postalCodeToAdd.textContent = `Postal Code: ${inputs.postalCode.value}`;
    infoPreview.appendChild(postalCodeToAdd);
    buttons.submitButton.disabled = true;
    buttons.editButton.disabled = false;
    buttons.editButton.addEventListener('click', editReservation);
    buttons.continueButton.disabled = false;
    buttons.continueButton.addEventListener('click', continueReservation);
    Object.values(inputs).forEach((input) => input.value = '')
  }

  function editReservation() {
    inputs.name.value = reservation.name;
    inputs.email.value = reservation.email;
    inputs.phone.value = reservation.phone;
    inputs.address.value = reservation.address;
    inputs.postalCode.value = reservation.postalCode;
    buttons.submitButton.disabled = false;
    buttons.editButton.disabled = true;
    buttons.continueButton.disabled = true;
    infoPreview.textContent = '';
  }

  function continueReservation() {
    const h3 = document.createElement('h3')
    h3.textContent = 'Thank you for your reservation!'
    mainDiv.textContent = ''
    mainDiv.appendChild(h3)
  }
}
