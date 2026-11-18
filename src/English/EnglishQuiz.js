import React, { useState } from 'react';
import '../Styles/GermanQuiz.css';

const questions = [
    {
        sentence: "She ___ to the gym every morning before work.",
        options: [
            "go",
            "goes",
            "going",
            "gone"
        ],
        answer: 2
    },
    {
        sentence: "What is the synonym of the word 'Enormous'?",
        options: [
            "Very small",
            "Very fast",
            "Very quiet",
            "Very large"
        ],
        answer: 4
    },
    {
        sentence: "Yesterday, we ___ a great movie at the cinema.",
        options: [
            "watched",
            "watch",
            "watching",
            "watches"
        ],
        answer: 1
    }
];

function EnglishQuiz() {
    const [counter, setCounter] = useState(0);
    const [selected, setSelected] = useState(null);
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [score, setScore] = useState(0);

    function chooseOption(num) {
        if (checked === false) {
            setSelected(num);
        }
    }

    function checkAnswer() {
        setChecked(true);

        if (selected === questions[counter].answer) {
            setCorrect(true);
            setScore(score + 1);
        } else {
            setCorrect(false);
        }
    }

    function nextQuestion() {
        setCounter(counter + 1);
        setSelected(null);
        setChecked(false);
        setCorrect(false);
    }

    function restartQuiz() {
        setCounter(0);
        setSelected(null);
        setChecked(false);
        setCorrect(false);
        setScore(0);
    }

    function getButtonClass(num) {
        if (checked === false) {
            if (selected === num) {
                return 'option-btn selected';
            } else {
                return 'option-btn';
            }
        } else {
            if (questions[counter].answer === num) {
                return 'option-btn correct';
            } else if (selected === num) {
                return 'option-btn wrong';
            } else {
                return 'option-btn';
            }
        }
    }

    if (counter >= questions.length) {
        return (
            <div className='page'>
                <div className='quiz-container' style={{ textAlign: 'center', marginTop: '60px' }}>
                    <div className='task-badge'>Quiz Finished</div>
                    <h1 className='quiz-title'>You scored {score} out of {questions.length}!</h1>
                    <button className='btn-check' onClick={restartQuiz}>
                        Restart Quiz ↻
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[counter];
    const progressPercent = Math.round((counter / questions.length) * 100);

    return (
        <div className='page'>
            <div className='quiz-container'>
                <div className='quiz-header'>
                    <button className='btn-close' onClick={restartQuiz}>x</button>
                    <div className='progress-wrapper'>
                        <div className='progress-meta'>
                            <span>Question {counter + 1} of {questions.length}</span>
                            <div>{progressPercent}%</div>
                        </div>
                        <div className='progress-track'>
                            <div className='progress-fill' style={{ width: progressPercent + '%' }}></div>
                        </div>
                    </div>
                </div>

                <div className='task-badge'>English Practice</div>
                <h1 className='quiz-title'>Choose the correct answer</h1>

                <div className='prompt-card'>
                    <button className='btn-audio'>🔊</button>
                    <h2 className='prompt-sentence'>{currentQ.sentence}</h2>
                </div>

                <div className='options-list'>
                    <button className={getButtonClass(1)} onClick={() => chooseOption(1)}>
                        <span className='option-number'>1</span>
                        <span className='option-text'>{currentQ.options[0]}</span>
                        <span className='option-radio'>
                            {checked && currentQ.answer === 1 ? '✓' : ''}
                            {checked && selected === 1 && currentQ.answer !== 1 ? '✕' : ''}
                        </span>
                    </button>

                    <button className={getButtonClass(2)} onClick={() => chooseOption(2)}>
                        <span className='option-number'>2</span>
                        <span className='option-text'>{currentQ.options[1]}</span>
                        <span className='option-radio'>
                            {checked && currentQ.answer === 2 ? '✓' : ''}
                            {checked && selected === 2 && currentQ.answer !== 2 ? '✕' : ''}
                        </span>
                    </button>

                    <button className={getButtonClass(3)} onClick={() => chooseOption(3)}>
                        <span className='option-number'>3</span>
                        <span className='option-text'>{currentQ.options[2]}</span>
                        <span className='option-radio'>
                            {checked && currentQ.answer === 3 ? '✓' : ''}
                            {checked && selected === 3 && currentQ.answer !== 3 ? '✕' : ''}
                        </span>
                    </button>

                    <button className={getButtonClass(4)} onClick={() => chooseOption(4)}>
                        <span className='option-number'>4</span>
                        <span className='option-text'>{currentQ.options[3]}</span>
                        <span className='option-radio'>
                            {checked && currentQ.answer === 4 ? '✓' : ''}
                            {checked && selected === 4 && currentQ.answer !== 4 ? '✕' : ''}
                        </span>
                    </button>
                </div>
            </div>

            <div className={checked === false ? 'quiz-footer' : correct === true ? 'quiz-footer correct' : 'quiz-footer wrong'}>
                <div className='quiz-footer-inner'>
                    <div className='status-indicator'>
                        <span className='status-dot'></span>
                        <span>
                            {checked === false ? 'Ready to check' : ''}
                            {checked === true && correct === true ? 'Correct!' : ''}
                            {checked === true && correct === false ? 'Wrong answer! Correct answer: #' + currentQ.answer : ''}
                        </span>
                    </div>

                    <div className='footer-actions'>
                        <button
                            className={checked === false ? 'btn-check' : correct === true ? 'btn-check correct' : 'btn-check wrong'}
                            onClick={checked === true ? nextQuestion : checkAnswer}
                            disabled={selected === null}
                        >
                            {checked === true ? 'Next Question →' : 'Check Answer →'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnglishQuiz;