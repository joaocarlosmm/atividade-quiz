const questions = [
    {
        question: "O que é orçamento pessoal?",
        options: [
            "Plano de carreira",
            "Planejamento de gastos e receitas",
            "Investimento em ações",
            "Compra de bens duráveis"
        ],
        answer: 1
    },
    {
        question: "Qual é a função da reserva de emergência?",
        options: [
            "Comprar um carro novo",
            "Investir em criptomoedas",
            "Cobrir imprevistos financeiros",
            "Pagar festas e viagens"
        ],
        answer: 2
    },
    {
        question: "Qual é o ideal de percentual para poupar da renda mensal?",
        options: [
            "5%",
            "10% a 20%",
            "50%",
            "100%"
        ],
        answer: 1
    },
    {
        question: "O que significa 'juros compostos'?",
        options: [
            "Juros sobre o valor inicial apenas",
            "Juros sobre juros acumulados",
            "Taxa fixa anual",
            "Desconto em compras"
        ],
        answer: 1
    },
    {
        question: "Qual é o primeiro passo para sair das dívidas?",
        options: [
            "Ignorar cobranças",
            "Fazer mais empréstimos",
            "Organizar um plano de pagamento",
            "Cancelar cartões de crédito"
        ],
        answer: 2
    },
    {
        question: "O que é score de crédito?",
        options: [
            "Número de contas bancárias",
            "Nota que indica sua reputação financeira",
            "Valor do salário",
            "Quantidade de cartões"
        ],
        answer: 1
    },
    {
        question: "Qual é o melhor tipo de investimento para iniciantes?",
        options: [
            "Ações de alto risco",
            "Tesouro Direto",
            "Criptomoedas",
            "Fundos imobiliários"
        ],
        answer: 1
    },
    {
        question: "O que é inflação?",
        options: [
            "Aumento do poder de compra",
            "Redução dos preços",
            "Aumento generalizado dos preços",
            "Queda da taxa de juros"
        ],
        answer: 2
    },
    {
        question: "Qual é a vantagem de pagar à vista?",
        options: [
            "Acumular dívidas",
            "Evitar juros e obter descontos",
            "Aumentar o limite do cartão",
            "Parcelar mais compras"
        ],
        answer: 1
    },
    {
        question: "O que é educação financeira?",
        options: [
            "Aprender a gastar mais",
            "Entender como gerenciar dinheiro",
            "Fazer compras online",
            "Evitar investimentos"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    nextBtn.style.display = "inline-block";
    Array.from(optionsEl.children).forEach((li, index) => {
        li.style.backgroundColor = index === correct ? "#a8e6a1" : "#f8a1a1";
        li.onclick = null;
    });
}

nextBtn.onclick = () => {
    currentQuestion++;
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
