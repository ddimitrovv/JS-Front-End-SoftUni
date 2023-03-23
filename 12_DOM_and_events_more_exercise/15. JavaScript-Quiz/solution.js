function solve() {
    const sections = Array.from(document.getElementsByTagName('section'));
    let correctAnswers = [];
    const correctAnswersArray = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    for (i = 0; i < sections.length; i++) {
        let answers = Array.from(sections[i].getElementsByClassName('quiz-answer'));
        for (const answer of answers) {
            answer.addEventListener('click', (e) => {
                const currentAnswer = e.currentTarget.getElementsByTagName('p')[0].textContent;
                if (correctAnswersArray.includes(currentAnswer)) {
                    correctAnswers.push(currentAnswer)
                } 
                e.currentTarget.parentElement.parentElement.style.display = 'none';
                e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = 'block';  
                if (e.currentTarget.parentElement.parentElement.nextElementSibling.id === 'results') {
                    let result = document.querySelector('#results h1');
                    result.textContent = (correctAnswers.length === correctAnswersArray.length) ? 'You are recognized as top JavaScript fan!': `You have ${correctAnswers.length} right answers`;
                }
            });
        }
    }
}