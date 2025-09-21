document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = [];
    for (let i = 1; i <= 10; i++) {
        const answer = document.getElementById(`q${i}`).value;
        answers.push(`質問 ${i}: ${answer}`);
    }
    alert('回答が送信されました:\n' + answers.join('\n'));
});
