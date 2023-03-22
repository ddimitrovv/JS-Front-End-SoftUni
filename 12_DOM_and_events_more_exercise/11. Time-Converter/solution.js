function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const buttons = Array.from(document.querySelectorAll('input[type=button]'));
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (button.id === 'daysBtn') {
                current = Number(days.value);
                hours.value = current * 24;
                minutes.value = current * 1440;
                seconds.value = current * 86400;
            } else if (button.id === 'hoursBtn') {
                current = Number(hours.value);
                days.value = current / 24;
                minutes.value = current * 60;
                seconds.value = current * 3600
            } else if (button.id === 'minutesBtn') {
                current = Number((minutes.value));
                days.value = current / (60 * 24);
                hours.value = current / 60;
                seconds.value = current * 60;
            } else if (button.id === 'secondsBtn') {
                current = Number((seconds.value));
                days.value = current / ( 24 * 3600)
                hours.value = current / 3600;
                minutes.value = current / 60;
            }
        })
    })
}