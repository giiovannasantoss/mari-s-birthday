const data = [
    {
        title: "beleza",
        titleMobile: "beleza",
        description: "Nem preciso falar quanta beleza você exala por onde quer que passe! Os seus olhos, cabelo, sorriso e cuidado impecável são tão lindos quanto a sua pessoa. Seus valores, sonhos, educação e personalidade me cativam de um jeito único e especial!",
        img: "assets/img/beauty.png",
        alt: "gato bonito",
        imgStyle: {
            width: "15%",
            top: "35%",
            right: "17%"
        },
        imgStyleMobile: {
            width: "45%"
        }
    },
    {
        title: "bom humor",
        titleMobile: "humor",
        description: "Você é muito engraçada e eu amo o seu jeitinho — não é à toa que somos tão parecidas! Ao seu lado, as risadas são garantidas e qualquer momento vira brincadeira. Você deixa tudo mais leve com o seu sorriso radiante!",
        img: "assets/img/humor.png",
        alt: "gato engraçado",
        imgStyle: {
            width: "13%",
            top: "37%",
            right: "18%"
        },
        imgStyleMobile: {
            width: "45%"
        }
    },
    {
        title: "determinação",
        titleMobile: "esforço",
        description: "Admiro o quão determinada você é em tudo o que faz. Dos pequenos aos grandes desafios, você sempre dá o seu melhor e entrega resultados tão incríveis quanto você — é um grande exemplo pra mim!",
        img: "assets/img/determination.png",
        alt: "gato determinado",
        imgStyle: {
            width: "16%",
            top: "36%",
            right: "16%"
        },
        imgStyleMobile: {
            width: "55%"
        }
    },
    {
        title: "disciplina",
        titleMobile: "disciplina",
        description: "De verdade: nunca vi alguém tão disciplinada como você! Você faz tudo na hora certa, sem enrolação, cumpre qualquer combinado e mantém constância no que se propõe a fazer. Todos os dias faz devocional, estuda… estou precisando aprender!",
        img: "assets/img/discipline.png",
        alt: "gato disciplinado",
        imgStyle: {
            width: "15%",
            top: "39%",
            right: "17%"
        },
        imgStyleMobile: {
            width: "55%"
        }
    },
    {
        title: "inteligência",
        titleMobile: "intelecto",
        description: "Seja genética de pais professores ou não, uma coisa inegável é que você é extremamente inteligente. Sempre aprendendo coisas novas e tornando-se professora para todos, você tem raciocínio lógico e escreve impecavelmente!",
        img: "assets/img/intelligence.png",
        alt: "gato inteligente",
        imgStyle: {
            width: "14%",
            top: "37%",
            right: "17%"
        },
        imgStyleMobile: {
            width: "50%"
        }
    },
    {
        title: "vozinha",
        titleMobile: "vozinha",
        description: "E o que não podia faltar: a sua vozinha! Ela é fina, delicada, assim como você. Te deixa ainda mais fofa e completa a sua skin de bebê! Brincadeiras à parte, é algo único que vira mais uma das suas marcas registradas!",
        img: "assets/img/voice.png",
        alt: "gato cantando",
        imgStyle: {
            width: "13%",
            top: "36%",
            right: "18.5%"
        },
        imgStyleMobile: {
            width: "45%"
        }
    }
]

let currentIndex = 0;

const titleElement = document.getElementById("quality-title");
const descriptionElement = document.getElementById("quality-description");
const imgElement = document.getElementById("quality-img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


function updateButtons() {
    prevButton.disabled = currentIndex == 0;
    nextButton.disabled = currentIndex == data.length - 1;
}

function updateCarrossel() {
    descriptionElement.textContent = data[currentIndex].description;
    imgElement.src = data[currentIndex].img;
    imgElement.alt = data[currentIndex].alt;

    const isMobile = window.innerWidth <= 768;
    const styles = isMobile ? data[currentIndex].imgStyleMobile : data[currentIndex].imgStyle;

    titleElement.textContent = isMobile ? data[currentIndex].titleMobile : data[currentIndex].title;

    if (isMobile == true) {
        imgElement.style.width = styles.width;
    }
    else {
        imgElement.style.width = styles.width;
        imgElement.style.top = styles.top;
        imgElement.style.right = styles.right;
        imgElement.style.left = styles.left;
    }

    updateButtons();
}

nextButton.onclick = () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
    }
    updateCarrossel();
}

prevButton.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarrossel();
}