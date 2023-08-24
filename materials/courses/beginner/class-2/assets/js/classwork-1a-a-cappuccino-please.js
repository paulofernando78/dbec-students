// CHECKBOXES 1
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

// CHECKBOXES 2
function checkCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var icons = document.querySelectorAll(".checkbox-icon2");
  var totalCheckboxes = checkboxes.length;
  var correctCount = 0;

  for (var i = 0; i < totalCheckboxes; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.checked && checkbox.getAttribute("data-correct") === "true") {
      correctCount++;
    }

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible2");
    }
  }

  var resultElement = document.getElementById("resultCheckboxes2");
  resultElement.textContent =
    "You have selected " +
    correctCount +
    " correct answer(s) out of " +
    document.querySelectorAll(".checkbox[data-correct='true']").length +
    ".";
}
function resetCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var icons = document.querySelectorAll(".checkbox-icon2");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    checkbox.checked = false;
    icon.classList.add("invisible2");
  }

  var resultElement = document.getElementById("resultCheckboxes2");
  resultElement.textContent = "";
}
function showCheckboxes2() {
  var checkboxes = document.querySelectorAll(".checkbox2");
  var icons = document.querySelectorAll(".checkbox-icon2");
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
