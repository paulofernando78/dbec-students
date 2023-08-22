// CHECKBOXES
function checkCheckboxes() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var icons = document.querySelectorAll(".checkbox-icon");
  var totalCheckboxes = checkboxes.length;
  var correctCount = 0;

  for (var i = 0; i < totalCheckboxes; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.checked && checkbox.getAttribute("data-correct") === "true") {
      correctCount++;
    }

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible");
    }
  }

  var resultElement = document.getElementById("resultCheckboxes");
  resultElement.textContent =
    "You have selected " +
    correctCount +
    " correct answer(s) out of " +
    document.querySelectorAll(".checkbox[data-correct='true']").length +
    ".";
}
function resetCheckboxes() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var icons = document.querySelectorAll(".checkbox-icon");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    checkbox.checked = false;
    icon.classList.add("invisible");
  }

  var resultElement = document.getElementById("resultCheckboxes");
  resultElement.textContent = "";
}
function showCheckboxes() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var icons = document.querySelectorAll(".checkbox-icon");
  var selectedLetters = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible");
      selectedLetters.push(checkbox.nextElementSibling.textContent.charAt(0));
    }
  }

  var resultElement = document.getElementById("resultCheckboxes");
  resultElement.textContent =
    "Correct answers: " + selectedLetters.join(", ") + ".";
}

// EXERCISE a)
// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank1_fill1: "book",
    blank2_fill1: "New York",
    blank3_fill1: "children",
    blank4_fill1: "meat",
    blank5_fill1: "pasta",
    blank6_fill1: "time",
  };

  var fill1Icon1 = document.getElementById("fill1Icon1");
  var fill1Icon2 = document.getElementById("fill1Icon2");
  var fill1Icon3 = document.getElementById("fill1Icon3");
  var fill1Icon4 = document.getElementById("fill1Icon4");
  var fill1Icon5 = document.getElementById("fill1Icon5");
  var fill1Icon6 = document.getElementById("fill1Icon6");
  var result = document.getElementById("resultFill1");

  var isCorrect1 =
    document.getElementById("blank1_fill1").value.trim() ===
    answers.blank1_fill1;
  var isCorrect2 =
    document.getElementById("blank2_fill1").value.trim() ===
    answers.blank2_fill1;
  var isCorrect3 =
    document.getElementById("blank3_fill1").value.trim() ===
    answers.blank3_fill1;
  var isCorrect4 =
    document.getElementById("blank4_fill1").value.trim() ===
    answers.blank4_fill1;
  var isCorrect5 =
    document.getElementById("blank5_fill1").value.trim() ===
    answers.blank5_fill1;
  var isCorrect6 =
    document.getElementById("blank6_fill1").value.trim() ===
    answers.blank6_fill1;

  fill1Icon1.className = isCorrect1
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon2.className = isCorrect2
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon3.className = isCorrect3
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon4.className = isCorrect4
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon5.className = isCorrect5
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon6.className = isCorrect6
    ? "fill1-icon correct"
    : "fill1-icon incorrect";

  fill1Icon1.style.display = "inline-block";
  fill1Icon2.style.display = "inline-block";
  fill1Icon3.style.display = "inline-block";
  fill1Icon4.style.display = "inline-block";
  fill1Icon5.style.display = "inline-block";
  fill1Icon6.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
  ].filter(function (x) {
    return x === true;
  }).length;

  result.innerHTML =
    "You got " +
    correctCount +
    " out of " +
    Object.keys(answers).length +
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
