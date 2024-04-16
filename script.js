document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
});

const questions = [
    {
        question: "Dentro de qual elemento HTML colocamos o JavaScript?",
        options: ["<javascript>", "<js>", "<script>"],
        answer: "<script>"
    },
    {
        question: "O arquivo JavaScript externo deve conter a tag <script>?",
        options: ["Verdadeiro", "Falso", "Depende"],
        answer: "Falso"
    },
    {
        question: "Qual comando pode ser utilizado para testar a conectividade entre dois computadores em uma rede e verificar se eles são capazes de trocar dados entre si?",
        options: ["ipconfig", "hostname", "ping"],
        answer: "ping"
    },
    {
        question: "Qual é o protocolo utilizado para transferência de arquivos em redes de computadores?",
        options: ["FTP", "HTTP", "SMTP"],
        answer: "FTP"
    },
    {
        question: "Qual comando que analisa e manipula linhas de texto em sistemas Unix e Linux, aplicando padrões e ações especificadas pelo usuário?",
        options: ["grep", "sed", "awk"],
        answer: "awk"
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const finalContainer = document.getElementById("final-container");

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = `${current.question}`;
    optionsContainer.innerHTML = "";
    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        button.addEventListener("click", () => {
            checkAnswer(option, button);
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer, button) {
    if (button.classList.contains('disabled')) {
        return; // Se já foi respondida, não faz nada
    }

    // Remover a seleção das outras alternativas
    const options = document.querySelectorAll('.option');
    options.forEach((opt) => {
        opt.classList.remove('selected');
    });

    if (answer === questions[currentQuestion].answer) {
        score++;
    }
    scoreElement.textContent = `Pontuação: ${score}`;
    button.classList.add('disabled');
    button.classList.add('selected'); // Adiciona a classe 'selected' à alternativa clicada
}


document.getElementById("submit-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalPage();
    }
});

function showFinalPage() {
    document.getElementById("quiz-container").style.display = "none";
    finalScoreElement.textContent = score;
    finalContainer.style.display = "block";
}

showQuestion();
