document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = parseInt(urlParams.get('chapter')) || 1;

    const quizContainer = document.getElementById('quiz-app');
    const data = quizData[chapterId];

    if (!data) {
        quizContainer.innerHTML = '<div class="alert alert-danger">Chapitre non trouvé.</div>';
        return;
    }

    // Update Title
    document.getElementById('quiz-title').textContent = `Quiz Chapitre ${chapterId} : ${data.title}`;

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    // Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback');
    const progressBar = document.getElementById('progress-bar');
    const scoreDisplay = document.getElementById('score-display');
    const scoreMessage = document.getElementById('score-message');

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', () => window.location.reload());

    function startQuiz() {
        startScreen.classList.add('d-none');
        questionScreen.classList.remove('d-none');
        showQuestion();
    }

    function showQuestion() {
        const q = data.questions[currentQuestionIndex];
        questionText.textContent = q.question;
        optionsContainer.innerHTML = '';
        feedbackContainer.classList.add('d-none');
        nextBtn.classList.add('d-none');

        // Update Progress
        const progress = ((currentQuestionIndex) / data.questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn btn btn-outline-primary w-100 mb-2 text-start p-3';
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index, btn);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selectedIndex, btn) {
        // Disable all buttons
        const buttons = optionsContainer.querySelectorAll('button');
        buttons.forEach(b => b.disabled = true);

        const q = data.questions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.correct;

        if (isCorrect) {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-success');
            score++;
            playSound('correct');
        } else {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-danger');
            // Highlight correct
            buttons[q.correct].classList.remove('btn-outline-primary');
            buttons[q.correct].classList.add('btn-success');
            playSound('wrong');
        }

        // Show Feedback
        feedbackContainer.innerHTML = `
            <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'} mt-3">
                <strong>${isCorrect ? 'Correct !' : 'Incorrect.'}</strong> ${q.explanation}
            </div>
        `;
        feedbackContainer.classList.remove('d-none');
        nextBtn.classList.remove('d-none');
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < data.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionScreen.classList.add('d-none');
        resultScreen.classList.remove('d-none');

        const percentage = Math.round((score / data.questions.length) * 100);
        scoreDisplay.textContent = `${score} / ${data.questions.length} (${percentage}%)`;

        let message = "";
        let colorClass = "";

        if (percentage === 100) {
            message = "🏆 <strong>Expert !</strong> Incroyable, vous avez tout bon ! Vous maîtrisez ce chapitre à la perfection.";
            colorClass = "text-success";
            launchConfetti();
        } else if (percentage >= 80) {
            message = "👏 <strong>Excellent !</strong> Très solide performance. Vous êtes prêt pour la suite.";
            colorClass = "text-primary";
        } else if (percentage >= 60) {
            message = "👍 <strong>Bien.</strong> Vous avez compris l'essentiel, mais quelques révisions seraient bénéfiques.";
            colorClass = "text-info";
        } else if (percentage >= 40) {
            message = "🤔 <strong>Moyen.</strong> Il y a de bonnes bases, mais plusieurs concepts vous échappent encore. Relisez le chapitre.";
            colorClass = "text-warning";
        } else {
            message = "📚 <strong>Novice.</strong> Ce chapitre semble difficile pour vous. Prenez le temps de le relire attentivement et réessayez.";
            colorClass = "text-danger";
        }

        scoreMessage.innerHTML = message;
        scoreDisplay.className = `display-1 fw-bold mb-3 ${colorClass}`;
    }

    function playSound(type) {
        // Simple beep or sound effect could be added here if assets exist
        // For now, silent or console log
        console.log(`Sound: ${type}`);
    }

    // Simple Confetti Effect
    function launchConfetti() {
        // This would require a library or complex CSS, let's just do a simple animation
        resultScreen.classList.add('confetti-bg');
    }
});
