const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const clockContainer=document.getElementById('clock');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.style.display = 'none';
  clockContainer.style.display='block';
  showQuestion();
}

function showQuestion() {
  console.log(ques[currentQuestionIndex]);

  const currentQuestion = ques[currentQuestionIndex];

  questionContainer.innerText = currentQuestion.question;
  optionsContainer.innerHTML = '';
  currentQuestion.answer.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
  const image = document.createElement('img');
  image.src = currentQuestion.image;
  image.alt = "Question Image";
  image.classList.add('question-image');
  optionsContainer.appendChild(image);
  image.style.display = 'block';
  image.style.margin = 'auto';
  startTimer(10); 
}
function startTimer(seconds) {

  let timeLeft = seconds;
  updateClockDisplay(timeLeft);

  const timerInterval = setInterval(() => {
    timeLeft--;
    updateClockDisplay(timeLeft);
    
    if (timeLeft === 0) {
      clearInterval(timerInterval); // Stop the timer
      currentQuestionIndex++;
      nextQuestion();
    }
  },1000);
  window.timerInterval = timerInterval;
}

function updateClockDisplay(seconds) {
  console.log("sec",seconds);
  clockContainer.innerText = `Time left: ${seconds} s`;
}
function checkAnswer(option) {
  const currentQuestion = ques[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(button => {
    if (button.innerText === option) {
      if (option == currentQuestion.correctAnswer) {
        score++;
        button.classList.add('correct');
      }
      else
        button.classList.add('wrong');
    }
  })
  clearInterval(window.timerInterval);
  currentQuestionIndex++;
  setTimeout(nextQuestion, 1000);



}
function nextQuestion() {

  if (currentQuestionIndex < ques.length)
    showQuestion();
  else
    resultPage();
}
function resultPage() {
  clockContainer.style.display='none';
  questionContainer.innerText = `Your score: ${score} out of ${ques.length}`;
  optionsContainer.innerHTML = '';
}

const ques = [
  {
    question: "Which river is known as the 'Ganga of the South'?",
    answer: ["Krishna", "Godavari", "Yamuna", "Kaveri"],
    correctAnswer: "Godavari",
    image: "./images/Teesta-River.jpg"
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    answer: ["Sardar Patel", "Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru"],
    correctAnswer: "Mahatma Gandhi",
    image: "./images/gandhi.jpg"
  },
  {
    question: "In which state is the famous 'Hawa Mahal' located?",
    answer: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Maharashtra"],
    correctAnswer: "Rajasthan",
    image: "./images/hawaMahal.png"
  },
  {
    question: "What is the currency of India?",
    answer: ["Dollar", "Rupee", "Yen", "Euro"],
    correctAnswer: "Rupee",
    image: "./images/currency.jpg"
  },
  {
    question: "Which city is known as the 'Pink City'?",
    answer: ["Jaipur", "Delhi", "Agra", "Lucknow"],
    correctAnswer: "Jaipur",
    image: "./images/pink_city.jpg"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    answer: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Mohandas Karamchand Gandhi"],
    correctAnswer: "Rabindranath Tagore",
    image: "./images/national_anthem.jpg"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answer: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    image: "./images/planets.jpg"
  },
  {
    question: "What is the largest state in India by area?",
    answer: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
    correctAnswer: "Rajasthan",
    image: "./images/state.jpg"
  },
  {
    question: "Which mountain range separates the Indian subcontinent from the Tibetan Plateau?",
    answer: ["Himalayas", "Aravalli", "Western Ghats", "Eastern Ghats"],
    correctAnswer: "Himalayas",
    image: "./images/himalyas.jpg"
  },
  {
    question: "Which is the largest wildlife sanctuary in India?",
    answer: ["Jim Corbett National Park", "Sundarbans National Park", "Kaziranga National Park", "Periyar National Park"],
    correctAnswer: "Sundarbans National Park",
    image: "./images/deer.jpg"
  },
];