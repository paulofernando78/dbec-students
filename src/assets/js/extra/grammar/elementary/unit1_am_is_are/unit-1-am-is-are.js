// EXERCISE 1.1
// FILL-IN-THE-BLANKS 1
function checkFill1() {
  // var answers = {
  //   blank1_fill1: "she's",
  //   blank2_fill1: "they're",
  //   blank3_fill1: ["it's not", "it isn't", "it's not, it isn't"],
  //   blank4_fill1: "I'm not",
  //   blank5_fill1: ["you're not", "you aren't", "you're not, you aren't"],
  // };

  // var fill1Icon1 = document.getElementById("fill1Icon1");
  // var fill1Icon2 = document.getElementById("fill1Icon2");
  // var fill1Icon3 = document.getElementById("fill1Icon3");
  // var fill1Icon4 = document.getElementById("fill1Icon4");
  // var fill1Icon5 = document.getElementById("fill1Icon5");
  // var result = document.getElementById("resultFill1");

  // var isCorrect1 =
  //   document.getElementById("blank1_fill1").value.trim() ===
  //   answers.blank1_fill1;
  // var isCorrect2 =
  //   document.getElementById("blank2_fill1").value.trim() ===
  //   answers.blank2_fill1;
  // var userInput3 = document.getElementById("blank3_fill1").value.trim();
  // var isCorrect3 = answers.blank3_fill1.includes(userInput3);
  // var isCorrect4 =
  //   document.getElementById("blank4_fill1").value.trim() ===
  //   answers.blank4_fill1;
  // var userInput5 = document.getElementById("blank5_fill1").value.trim();
  // var isCorrect5 = answers.blank5_fill1.includes(userInput5);

  // fill1Icon1.className = isCorrect1
  //   ? "fill1-icon correct"
  //   : "fill1-icon incorrect";
  // fill1Icon2.className = isCorrect2
  //   ? "fill1-icon correct"
  //   : "fill1-icon incorrect";
  // fill1Icon3.className = isCorrect3
  //   ? "fill1-icon correct"
  //   : "fill1-icon incorrect";
  // fill1Icon4.className = isCorrect4
  //   ? "fill1-icon correct"
  //   : "fill1-icon incorrect";
  // fill1Icon5.className = isCorrect5
  //   ? "fill1-icon correct"
  //   : "fill1-icon incorrect";

  // fill1Icon1.style.display = "inline-block";
  // fill1Icon2.style.display = "inline-block";
  // fill1Icon3.style.display = "inline-block";
  // fill1Icon4.style.display = "inline-block";
  // fill1Icon5.style.display = "inline-block";

  // var correctCount = [
  //   isCorrect1,
  //   isCorrect2,
  //   isCorrect3,
  //   isCorrect4,
  //   isCorrect5,
  // ].filter(function (x) {
  //   return x === true;
  // }).length;

  // Lista de respostas
  const blank_fill = {
    1: ["she's"],
    2: ["they're", "they are"],
    3: ["it's not", "it isn't", "it's not, it isn't"],
    4: ["i'm not"],
    5: ["you're not", "you aren't", "you're not", "you aren't"],
  };

  // Lista de respostas corretas
  const resultList = [];

  // Quantidade de vezes que o laço irá se repetir
  const quantidadeDeRespostas = Object.keys(blank_fill).length;
  // Isso é um laço de repetição
  // Passará por cada uma das respostas, validará e dará o resultado
  for (let i = 1; i <= quantidadeDeRespostas; i = i + 1) {
    // esse "i" será alterado a cada vez que o laço se repetir
    // ele já se inicia com valor 1 e continuará rodando até terminar a lista de resposta
    // Campo onde ficará o ícone
    const icon = document.getElementById("fill1Icon" + i);
    // Pega a resposta do aluno
    const response = document
      .getElementById("blank" + i + "_fill1")
      .value.trim();
    // Válida se a resposta é válida
    // esse [i] é para acessar a chave (1, 2, 3...) da lista de respostas
    const isCorrect = blank_fill[i].includes(response.toLowerCase());
    // Adiciona o resultado da resposta do aluno
    resultList.push(isCorrect);
    // Altera o ícone baseado na resposta (correta/errada | true/false)
    icon.className = isCorrect ? "fill1-icon correct" : "fill1-icon incorrect";
    icon.style.display = "inline-block";
  }

  // Filtra para ver quantas questões foram acertadas
  const correctCount = resultList.filter((x) => x === true).length;

  // Seleciona o elemento onde será exibido o resultado
  var result = document.getElementById("resultFill1");

  result.innerHTML =
    "You got " +
    correctCount +
    " out of " +
    Object.keys(blank_fill).length +
    " correct.";
}
function showFill1() {
  var answerElements = document.getElementsByClassName("fill1_answer");

  for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    answerElement.style.display = "block"; // Show the answers
  }
}
function resetFill1() {
  var fill1Inputs = document.getElementsByClassName("fill1");
  var fill1Icons = document.getElementsByClassName("fill1-icon");
  var result = document.getElementById("resultFill1");

  for (var i = 0; i < fill1Inputs.length; i++) {
    fill1Inputs[i].value = "";
  }

  for (var j = 0; j < fill1Icons.length; j++) {
    fill1Icons[j].className = "fill1-icon";
    fill1Icons[j].style.display = "none";
  }

  result.innerHTML = "";

  var answerElements = document.getElementsByClassName("fill1_answer");

  for (var k = 0; k < answerElements.length; k++) {
    var answerElement = answerElements[k];
    answerElement.style.display = "none"; // Hide the answers
  }
}

// EXERCISE 1.2
// RADIOS
function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

// EXERCISE 1.3
// DROPDOWN
function checkDropdowns() {
  var answers = {
    option1a: "a",
    option1b: "c",
    option2a: "b",
    option2b: "e",
    option3a: "a",
    option3b: "a",
    option4a: "a",
    option4b: "b",
    option5a: "b",
    option5b: "f",
    option6a: "a",
    option6b: "d",
  };

  var result = document.getElementById("result-dropdown");
  var dropdownIcons = document.getElementsByClassName("dropdown-icon");

  var correctCount = 0;

  // Check each dropdown answer
  for (var key in answers) {
    if (answers.hasOwnProperty(key)) {
      var selectedValue = document.getElementById(key).value;

      if (selectedValue === answers[key]) {
        correctCount++;
        var icon = document.getElementById(key + "Icon");
        icon.className = "dropdown-icon drop correct";
      } else {
        var icon = document.getElementById(key + "Icon");
        icon.className = "dropdown-icon drop incorrect";
      }

      icon.style.display = "inline-block";
    }
  }

  result.innerHTML =
    "You got " +
    correctCount +
    " out of " +
    Object.keys(answers).length +
    " correct.";
}
function resetDropdowns() {
  var dropdowns = document.getElementsByTagName("select");
  var dropdownIcons = document.getElementsByClassName("dropdown-icon");

  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].selectedIndex = 0;
  }

  for (var j = 0; j < dropdownIcons.length; j++) {
    dropdownIcons[j].className = "dropdown-icon";
    dropdownIcons[j].style.display = "none";
  }

  document.getElementById("result-dropdown").innerHTML = "";
}

// EXERCISE 1.4
// FILL-IN-THE-BLANKS 2
function checkFill2() {
  var answers = {
    blank1_fill2: [
      "Brazil is a very big country.",
      "Brazil's a very big country.",
      "Brazil is a very big country., Brazil's a very big country.",
    ],
    blank2_fill2: ["Diamonds are not cheap.", "Diamonds aren't cheap."],
    blank3_fill2: [
      "Quebec is not in the United States.",
      "Quebec isn't in the United States.",
      "Quebec is not in the United States., Quebec isn't in the United States.",
    ],
  };

  var fill2Icon1 = document.getElementById("fill2Icon1");
  var fill2Icon2 = document.getElementById("fill2Icon2");
  var fill2Icon3 = document.getElementById("fill2Icon3");
  var result = document.getElementById("resultFill2");

  var isCorrect1 = answers.blank1_fill2.includes(
    document.getElementById("blank1_fill2").value.trim()
  );
  var isCorrect2 = answers.blank2_fill2.includes(
    document.getElementById("blank2_fill2").value.trim()
  );
  var isCorrect3 = answers.blank3_fill2.includes(
    document.getElementById("blank3_fill2").value.trim()
  );

  fill2Icon1.className = isCorrect1
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon2.className = isCorrect2
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon3.className = isCorrect3
    ? "fill2-icon correct"
    : "fill2-icon incorrect";

  fill2Icon1.style.display = "inline-block";
  fill2Icon2.style.display = "inline-block";
  fill2Icon3.style.display = "inline-block";

  var correctCount = [isCorrect1, isCorrect2, isCorrect3].filter(function (x) {
    return x === true;
  }).length;

  result.innerHTML =
    "You got " +
    correctCount +
    " out of " +
    Object.keys(answers).length +
    " correct.";
}
function showFill2() {
  var answerElements = document.getElementsByClassName("fill2_answer");

  for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    answerElement.style.display = "block"; // Show the answers
  }
}
function resetFill2() {
  var fill2Inputs = document.getElementsByClassName("fill2");
  var fill2Icons = document.getElementsByClassName("fill2-icon");
  var result = document.getElementById("resultFill2");

  for (var i = 0; i < fill2Inputs.length; i++) {
    fill2Inputs[i].value = "";
  }

  for (var j = 0; j < fill2Icons.length; j++) {
    fill2Icons[j].className = "fill2-icon";
    fill2Icons[j].style.display = "none";
  }

  result.innerHTML = "";

  var answerElements = document.getElementsByClassName("fill2_answer");

  for (var k = 0; k < answerElements.length; k++) {
    var answerElement = answerElements[k];
    answerElement.style.display = "none"; // Hide the answers
  }
}
