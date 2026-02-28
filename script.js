const quizData = [
  {
    type: "mc",
    topic: "conceptos",
    question: "Segun el texto, el territorio es:",
    options: [
      "Un mapa politico fijo",
      "Una red o tejido que articula componentes fisicos, procesos ecologicos y sociales",
      "Solo un espacio natural sin intervencion humana",
      "Un conjunto de limites administrativos",
    ],
    answerIndex: 1,
    answerText:
      "Una red o tejido que articula componentes fisicos, procesos ecologicos y sociales.",
  },
  {
    type: "mc",
    topic: "conceptos",
    question: "El territorio tambien se describe como:",
    options: [
      "Un contenedor y escenario de procesos ecologicos y sociales",
      "Un lugar sin relaciones de poder",
      "Un espacio sin historia",
      "Unicamente una superficie cartografica",
    ],
    answerIndex: 0,
    answerText: "Un contenedor y escenario de procesos ecologicos y sociales.",
  },
  {
    type: "mc",
    topic: "conceptos",
    question: "El espacio geografico se refiere a:",
    options: [
      "La superficie terrestre donde interactuan elementos naturales y sociales",
      "Unicamente la cultura local",
      "Solo el relieve y el clima",
      "Un espacio sin actividad humana",
    ],
    answerIndex: 0,
    answerText:
      "La superficie terrestre donde interactuan elementos naturales y elementos creados por la sociedad.",
  },
  {
    type: "mc",
    topic: "conceptos",
    question: "Una caracteristica del espacio geografico es que:",
    options: [
      "Puede ubicarse con coordenadas y representarse en mapas",
      "Es inmutable y no cambia",
      "No se puede representar",
      "No tiene relacion con procesos humanos",
    ],
    answerIndex: 0,
    answerText: "Puede ubicarse con coordenadas y representarse en mapas.",
  },
  {
    type: "mc",
    topic: "conceptos",
    question: "El espacio geografico es unico porque:",
    options: [
      "Siempre es igual en cualquier lugar",
      "Sus componentes se organizan de forma singular y dinamica",
      "No depende de decisiones humanas",
      "Es solo un tema natural",
    ],
    answerIndex: 1,
    answerText:
      "Sus componentes se relacionan y organizan de forma singular, y es dinamico.",
  },
  {
    type: "mc",
    topic: "conceptos",
    question: "Un espacio geografico se convierte en territorio cuando:",
    options: [
      "Se dibuja en un mapa",
      "Un grupo social se establece, delimita fronteras y usa recursos para sus necesidades",
      "No existe presencia humana",
      "Solo tiene recursos naturales",
    ],
    answerIndex: 1,
    answerText:
      "Un grupo social se establece, delimita fronteras y usa recursos para sus necesidades.",
  },
  {
    type: "tf",
    topic: "conceptos",
    question: "El espacio geografico y el territorio son conceptos identicos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    topic: "conceptos",
    question: "Modificar un componente del espacio geografico puede afectar a los demas.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "conceptos",
    question: "El territorio es una construccion social dinamica.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "mc",
    topic: "dimensiones",
    question: "Las dimensiones del territorio incluyen:",
    options: [
      "Politica, economica, social y cultural",
      "Tecnica, artistica, deportiva y medica",
      "Natural, virtual, digital y financiera",
      "Urbana, rural y costera solamente",
    ],
    answerIndex: 0,
    answerText: "Politica, economica, social y cultural.",
  },
  {
    type: "mc",
    topic: "dimensiones",
    question: "La dimension politica del territorio se relaciona con:",
    options: [
      "La soberania y la administracion del territorio por el Estado y otros actores",
      "La produccion de artesanias",
      "La vegetacion y el clima",
      "Solo la distribucion de la poblacion",
    ],
    answerIndex: 0,
    answerText:
      "La soberania y la forma en que el Estado y otros actores administran el territorio.",
  },
  {
    type: "mc",
    topic: "dimensiones",
    question: "La dimension economica del territorio se enfoca en:",
    options: [
      "El uso de recursos y la produccion de bienes y servicios",
      "Las tradiciones y festividades",
      "La identidad cultural",
      "La ubicacion geodesica",
    ],
    answerIndex: 0,
    answerText: "El uso de recursos y la produccion de bienes y servicios.",
  },
  {
    type: "mc",
    topic: "dimensiones",
    question: "La dimension social del territorio se refiere a:",
    options: [
      "Relaciones y acciones sociales en la organizacion y apropiacion del espacio",
      "Solo a la economia de mercado",
      "Solo a las fronteras politicas",
      "Solo a la biodiversidad",
    ],
    answerIndex: 0,
    answerText:
      "Relaciones y acciones sociales en la organizacion, apropiacion y construccion del espacio.",
  },
  {
    type: "mc",
    topic: "dimensiones",
    question: "La dimension cultural del territorio se vincula con:",
    options: [
      "Lazos de pertenencia e identidad simbolica",
      "La topografia del relieve",
      "La privatizacion de recursos",
      "El transporte publico",
    ],
    answerIndex: 0,
    answerText: "Lazos de pertenencia e identidad simbolica.",
  },
  {
    type: "tf",
    topic: "dimensiones",
    question: "El territorio es un concepto estatico.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    topic: "dimensiones",
    question: "En la dimension economica pueden surgir conflictos por intereses de distintos actores.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "dimensiones",
    question: "La dimension cultural solo se expresa en elementos materiales.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "En El Salvador, la dimension politica del territorio se relaciona con:",
    options: [
      "Disputas por el control de recursos y decisiones sobre el espacio",
      "Solo con celebraciones locales",
      "Solo con el clima",
      "Solo con la ubicacion de rios",
    ],
    answerIndex: 0,
    answerText:
      "Disputas por el control de recursos y decisiones sobre el espacio.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "Un ejemplo de dimension politica en El Salvador es:",
    options: [
      "Conflictos por la gestion y control del agua",
      "Unicamente la artesania en barro",
      "Solo la agricultura de subsistencia",
      "La ubicacion de volcanes",
    ],
    answerIndex: 0,
    answerText: "Conflictos por la gestion y control del agua.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "En la dimension economica, el territorio se entiende como:",
    options: [
      "Escenario de produccion, intercambio y consumo de bienes",
      "Solo un paisaje natural",
      "Unicamente un espacio cultural",
      "Un lugar sin actividad productiva",
    ],
    answerIndex: 0,
    answerText: "Escenario de produccion, intercambio y consumo de bienes.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "El modo de produccion predominante en El Salvador, segun el texto, es:",
    options: ["Socialista", "Capitalista", "Feudal", "Comunal"],
    answerIndex: 1,
    answerText: "Capitalista.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "El modelo agroexportador historico se vincula con:",
    options: [
      "Produccion agricola para exportacion y concentracion de tierras",
      "Economia digital",
      "Solo comercio interno",
      "Eliminacion de la propiedad privada",
    ],
    answerIndex: 0,
    answerText: "Produccion agricola para exportacion y concentracion de tierras.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "Las formas de propiedad que influyen en el acceso a recursos incluyen:",
    options: [
      "Privada, comunal, estatal y de libre acceso",
      "Solo privada",
      "Solo estatal",
      "Solo comunal",
    ],
    answerIndex: 0,
    answerText: "Privada, comunal, estatal y de libre acceso.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "La dimension social destaca diferencias por:",
    options: [
      "Clase social, grupo etnico y roles tradicionales",
      "Solo edad y estatura",
      "Solo idioma extranjero",
      "Solo religion",
    ],
    answerIndex: 0,
    answerText: "Clase social, grupo etnico y roles tradicionales.",
  },
  {
    type: "mc",
    topic: "el-salvador",
    question: "Un ejemplo de dimension cultural del territorio es:",
    options: [
      "Fiestas patronales en plazas que refuerzan el sentido de pertenencia",
      "La privatizacion del agua",
      "La expansion de carreteras",
      "El aumento de exportaciones",
    ],
    answerIndex: 0,
    answerText: "Fiestas patronales en plazas que refuerzan el sentido de pertenencia.",
  },
  {
    type: "tf",
    topic: "el-salvador",
    question: "Las protestas contra la privatizacion del agua reflejan disputas politicas por recursos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "el-salvador",
    question: "La migracion no influye en la organizacion social del territorio.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
  {
    type: "tf",
    topic: "el-salvador",
    question: "La produccion de artesanias puede expresar la relacion cultural con el territorio.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "el-salvador",
    question: "Las relaciones rurales y urbanas no tienen impacto en la dimension economica.",
    options: ["Verdadero", "Falso"],
    answerIndex: 1,
    answerText: "Falso.",
  },
];

const TOPIC_LABELS = {
  all: "Todos los temas",
  conceptos: "T1: Conceptos y territorio",
  dimensiones: "T2: Dimensiones del territorio",
  "el-salvador": "T3: El Salvador y dimensiones",
};

const TOPIC_ORDER = ["all", "conceptos", "dimensiones", "el-salvador"];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const countLabel = document.getElementById("question-count");
const progressFill = document.getElementById("progress-fill");
const topicTitle = document.getElementById("topic-title");
const topicSelect = document.getElementById("topic-select");
const shuffleButton = document.getElementById("shuffle-btn");
const checkButton = document.getElementById("check-btn");
const showButton = document.getElementById("show-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const statsTotal = document.getElementById("stats-total");
const statsCorrect = document.getElementById("stats-correct");
const statsIncorrect = document.getElementById("stats-incorrect");
const statsUnanswered = document.getElementById("stats-unanswered");
const statsAccuracy = document.getElementById("stats-accuracy");
const quizBody = document.getElementById("quiz-body");
const finalScreen = document.getElementById("final-screen");
const reviewButton = document.getElementById("review-btn");

let currentIndex = 0;
let currentQuestionIndex = 0;
let currentTopic = "conceptos";
let filteredIndices = [];
const userAnswers = Array.from({ length: quizData.length }, () => ({
  value: null,
  isCorrect: null,
}));

function buildOptions(question, savedValue, questionIndex) {
  optionsContainer.innerHTML = "";
  const groupName = "answer";

  question.options.forEach((option, index) => {
    const optionId = `option-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = groupName;
    input.id = optionId;
    input.value = index;
    if (savedValue !== null && Number(savedValue) === index) {
      input.checked = true;
    }

    const text = document.createElement("span");
    text.textContent = option;

    input.addEventListener("change", () => {
      userAnswers[questionIndex].value = index;
      userAnswers[questionIndex].isCorrect =
        Number(index) === question.answerIndex;
      showFeedback(userAnswers[questionIndex].isCorrect, question.answerText);
      updateStats();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    optionsContainer.appendChild(wrapper);
  });
}

function updateProgress() {
  const total = filteredIndices.length;
  const index = currentIndex + 1;
  countLabel.textContent = `${index} / ${total}`;
  progressFill.style.width = `${(index / total) * 100}%`;
}

function buildTopicOptions() {
  const topicsInData = new Set(quizData.map((item) => item.topic));
  const orderedTopics = TOPIC_ORDER.filter((topic) =>
    topic === "all" ? true : topicsInData.has(topic)
  );

  topicSelect.innerHTML = "";
  orderedTopics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = TOPIC_LABELS[topic] || topic;
    topicSelect.appendChild(option);
  });

  currentTopic = orderedTopics[0] || "conceptos";
  topicSelect.value = currentTopic;
  updateTopicTitle();
}

function updateTopicTitle() {
  topicTitle.textContent = TOPIC_LABELS[currentTopic] || "Tema";
}

function shuffleIndices(indices) {
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
}

function buildFilteredIndices() {
  if (currentTopic === "all") {
    filteredIndices = quizData.map((_, index) => index);
    return;
  }

  filteredIndices = quizData
    .map((item, index) => (item.topic === currentTopic ? index : null))
    .filter((index) => index !== null);

  if (filteredIndices.length === 0) {
    filteredIndices = quizData.map((_, index) => index);
  }
}

function showFeedback(isCorrect, correctAnswer, showOnly = false) {
  if (showOnly) {
    feedback.textContent = `Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback";
    return;
  }

  if (isCorrect) {
    feedback.textContent = `Correcta. ${correctAnswer}`;
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `Incorrecta. Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback incorrect";
  }
}

function renderQuestion() {
  currentQuestionIndex = filteredIndices[currentIndex];
  const question = quizData[currentQuestionIndex];
  const savedValue = userAnswers[currentQuestionIndex].value;

  questionText.textContent = question.question;
  feedback.textContent = "";
  feedback.className = "feedback";

  buildOptions(question, savedValue, currentQuestionIndex);

  if (savedValue !== null && savedValue !== undefined) {
    const isCorrect = Number(savedValue) === question.answerIndex;
    showFeedback(isCorrect, question.answerText);
  }

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === filteredIndices.length - 1;

  updateProgress();
  updateStats();
  animateQuestion();
}

function checkAnswer() {
  const question = quizData[currentQuestionIndex];
  const userValue = userAnswers[currentQuestionIndex].value;

  if (userValue === null || userValue === undefined) {
    feedback.textContent = "Selecciona una opcion antes de revisar.";
    feedback.className = "feedback warning";
    return;
  }

  const isCorrect = Number(userValue) === question.answerIndex;
  userAnswers[currentQuestionIndex].isCorrect = isCorrect;
  showFeedback(isCorrect, question.answerText);
  updateStats();
}

function showCorrectAnswer() {
  const question = quizData[currentQuestionIndex];
  showFeedback(false, question.answerText, true);
}

function updateStats() {
  const indices = filteredIndices.length ? filteredIndices : quizData.map((_, i) => i);
  const total = indices.length;
  let answered = 0;
  let correct = 0;

  indices.forEach((index) => {
    const entry = userAnswers[index];
    if (entry.value !== null && entry.value !== undefined) {
      answered += 1;
      if (entry.isCorrect) {
        correct += 1;
      }
    }
  });

  const incorrect = answered - correct;
  const unanswered = total - answered;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  statsTotal.textContent = total;
  statsCorrect.textContent = correct;
  statsIncorrect.textContent = incorrect;
  statsUnanswered.textContent = unanswered;
  statsAccuracy.textContent = `${accuracy}%`;

  if (answered === total && total > 0) {
    quizBody.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  } else {
    quizBody.classList.remove("hidden");
    finalScreen.classList.add("hidden");
  }
}

function animateQuestion() {
  questionText.classList.remove("fade-in");
  void questionText.offsetWidth;
  questionText.classList.add("fade-in");
}

checkButton.addEventListener("click", checkAnswer);
showButton.addEventListener("click", showCorrectAnswer);
shuffleButton.addEventListener("click", () => {
  if (filteredIndices.length < 2) {
    return;
  }

  shuffleIndices(filteredIndices);
  currentIndex = 0;
  renderQuestion();
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener("click", () => {
  if (currentIndex < filteredIndices.length - 1) {
    currentIndex += 1;
    renderQuestion();
  }
});

reviewButton.addEventListener("click", () => {
  quizBody.classList.remove("hidden");
  finalScreen.classList.add("hidden");
});

topicSelect.addEventListener("change", (event) => {
  currentTopic = event.target.value;
  updateTopicTitle();
  currentIndex = 0;
  buildFilteredIndices();
  renderQuestion();
});

buildTopicOptions();
buildFilteredIndices();
renderQuestion();
