// RADIOS
function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

// EXERCISE XXX
// CHECKBOXES 1
function checkCheckboxes1() {
  var checkboxes = document.querySelectorAll(".checkbox1");
  var correctIcons = document.querySelectorAll(".checkbox-correct-icon1");
  var incorrectIcons = document.querySelectorAll(".checkbox-incorrect-icon1");
  var totalCheckboxes = checkboxes.length;
  var correctCount = 0;

  for (var i = 0; i < totalCheckboxes; i++) {
    var checkbox = checkboxes[i];
    var correctIcon = correctIcons[i];
    var incorrectIcon = incorrectIcons[i];

    if (checkbox.checked) {
      if (checkbox.getAttribute("data-correct") === "true") {
        correctCount++;
        correctIcon.classList.remove("invisible1");
        incorrectIcon.classList.add("invisible1");
      } else {
        correctIcon.classList.add("invisible1");
        incorrectIcon.classList.remove("invisible1");
      }
    } else {
      correctIcon.classList.add("invisible1");
      incorrectIcon.classList.add("invisible1");
    }
  }

  var resultElement = document.getElementById("resultCheckboxes1");
  resultElement.textContent =
    "You have selected " +
    correctCount +
    " correct answer(s) out of " +
    document.querySelectorAll(".checkbox1[data-correct='true']").length +
    ".";
}
function showCheckboxes1() {
  var checkboxes = document.querySelectorAll(".checkbox1");
  var icons = document.querySelectorAll(".checkbox-correct-icon1");
  var selectedLetters = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible1");
      selectedLetters.push(checkbox.nextElementSibling.textContent.charAt(0));
    }
  }

  var resultElement = document.getElementById("resultCheckboxes1");
  resultElement.textContent =
    "Correct answers: " + selectedLetters.join(", ") + ".";
}
function resetCheckboxes1() {
  var checkboxes = document.querySelectorAll(".checkbox1");
  var correctIcons = document.querySelectorAll(".checkbox-correct-icon1");
  var incorrectIcons = document.querySelectorAll(".checkbox-incorrect-icon1");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var correctIcon = correctIcons[i];
    var incorrectIcon = incorrectIcons[i];

    checkbox.checked = false;
    correctIcon.classList.add("invisible1");
    incorrectIcon.classList.add("invisible1");
  }

  var resultElement = document.getElementById("resultCheckboxes1");
  resultElement.textContent = "";
}

// EXERCISE XXX
// CHECKBOXES 2
function checkCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var correctIcons = document.querySelectorAll(".checkbox-correct-icon2");
  var incorrectIcons = document.querySelectorAll(".checkbox-incorrect-icon2");
  var totalCheckboxes = checkboxes.length;
  var correctCount = 0;

  for (var i = 0; i < totalCheckboxes; i++) {
    var checkbox = checkboxes[i];
    var correctIcon = correctIcons[i];
    var incorrectIcon = incorrectIcons[i];

    if (checkbox.checked) {
      if (checkbox.getAttribute("data-correct") === "true") {
        correctCount++;
        correctIcon.classList.remove("invisible2");
        incorrectIcon.classList.add("invisible2");
      } else {
        correctIcon.classList.add("invisible2");
        incorrectIcon.classList.remove("invisible2");
      }
    } else {
      correctIcon.classList.add("invisible2");
      incorrectIcon.classList.add("invisible2");
    }
  }

  var resultElement = document.getElementById("resultCheckboxes2");
  resultElement.textContent =
    "You have selected " +
    correctCount +
    " correct answer(s) out of " +
    document.querySelectorAll(".checkbox1[data-correct='true']").length +
    ".";
}
function showCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var icons = document.querySelectorAll(".checkbox-correct-icon2");
  var selectedLetters = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible2");
      selectedLetters.push(checkbox.nextElementSibling.textContent.charAt(0));
    }
  }

  var resultElement = document.getElementById("resultCheckboxes2");
  resultElement.textContent =
    "Correct answers: " + selectedLetters.join(", ") + ".";
}
function resetCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var correctIcons = document.querySelectorAll(".checkbox-correct-icon2");
  var incorrectIcons = document.querySelectorAll(".checkbox-incorrect-icon2");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var correctIcon = correctIcons[i];
    var incorrectIcon = incorrectIcons[i];

    checkbox.checked = false;
    correctIcon.classList.add("invisible2");
    incorrectIcon.classList.add("invisible2");
  }

  var resultElement = document.getElementById("resultCheckboxes2");
  resultElement.textContent = "";
}
