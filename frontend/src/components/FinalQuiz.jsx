// FinalQuiz.jsx
import React, { useState } from 'react';
import { X, CheckCircle, XCircle, Trophy } from 'lucide-react';
import useStore from '../store/useStore.js';

const FinalQuiz = ({ roadmap, roadmapKey, finalQuizData }) => {
  const { setShowFinalQuiz, completeFinalQuiz } = useStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = finalQuizData[roadmapKey] || [];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, { question: currentQuestion, correct: isCorrect }];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleFinish = () => {
    const passed = score >= Math.ceil(questions.length * 0.7);
    completeFinalQuiz(passed, score, questions.length);
    setShowFinalQuiz(null);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const onClose = () => setShowFinalQuiz(null);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Final quiz not available yet.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 max-w-2xl w-full border-2 border-yellow-500 max-h-[90vh] overflow-y-auto shadow-xl">
        {!showResult ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy size={28} className="text-yellow-500 dark:text-yellow-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Final Challenge</h2>
                </div>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold">{roadmap.cardTitle}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-6">
              <div
                className="bg-yellow-500 dark:bg-yellow-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="mb-6">
              <h3 className="text-xl text-gray-900 dark:text-white mb-4">{questions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedAnswer === index
                      ? 'border-yellow-500 dark:border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                      }`}
                  >
                    <span className="text-gray-900 dark:text-white">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="w-full py-3 bg-yellow-500 dark:bg-yellow-400 hover:bg-yellow-600 dark:hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Final Quiz' : 'Next Question'}
            </button>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="text-center">
              <div className="mb-6">
                {score >= Math.ceil(questions.length * 0.7) ? (
                  <>
                    <Trophy size={80} className="text-yellow-500 dark:text-yellow-400 mx-auto mb-4 animate-bounce" />
                    <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                      Congratulations! 🏆
                    </h2>
                    <p className="text-gray-900 dark:text-white text-xl mb-2">You've earned the badge!</p>
                  </>
                ) : (
                  <>
                    <XCircle size={64} className="text-red-500 dark:text-red-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Not Quite There</h2>
                  </>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You scored {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
                </p>
                <p className="text-sm text-gray-500">
                  {score >= Math.ceil(questions.length * 0.7)
                    ? 'Amazing work! Check your profile for your new badge.'
                    : 'You need 70% to pass the final quiz. Keep learning!'}
                </p>
              </div>

              {/* Answer Review */}
              <div className="mb-6 text-left max-h-60 overflow-y-auto">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Review:</h3>
                {answers.map((answer, idx) => (
                  <div key={idx} className="mb-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-start gap-2">
                      {answer.correct ? (
                        <CheckCircle size={20} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle size={20} className="text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white mb-1">{questions[idx].question}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Correct: {questions[idx].options[questions[idx].correctAnswer]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {score < Math.ceil(questions.length * 0.7) && (
                  <button
                    onClick={restartQuiz}
                    className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold rounded-lg transition-colors"
                  >
                    Try Again
                  </button>
                )}
                <button
                  onClick={handleFinish}
                  className="flex-1 py-3 bg-yellow-500 dark:bg-yellow-400 hover:bg-yellow-600 dark:hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors"
                >
                  {score >= Math.ceil(questions.length * 0.7) ? 'Claim Badge' : 'Continue'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FinalQuiz;