// RADIO RESET BUTTON

function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function (radio) {
    radio.checked = false;
  });
}

// CHECKBOX

function checkCheckboxes() {
  var checkboxes = document.getElementsByClassName("checkbox");
  var correctIcons = document.getElementsByClassName("correct-icon");
  var incorrectIcons = document.getElementsByClassName("incorrect-icon");
  var result = document.getElementById("result");
  var correctCount = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var correctIcon = correctIcons[i];
    var incorrectIcon = incorrectIcons[i];

    if (checkbox.dataset.correct === "true") {
      if (checkbox.checked) {
        correctIcon.classList.remove("invisible");
        incorrectIcon.classList.add("invisible");
        correctCount++;
      } else {
        correctIcon.classList.add("invisible");
        incorrectIcon.classList.remove("invisible");
      }
    }
  }

  result.textContent = "Correct answers: " + correctCount;
}

function resetCheckboxes() {
  var checkboxes = document.getElementsByClassName("checkbox");
  var correctIcons = document.getElementsByClassName("correct-icon");
  var incorrectIcons = document.getElementsByClassName("incorrect-icon");
  var result = document.getElementById("result");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    checkbox.checked = false;
  }

  for (var i = 0; i < correctIcons.length; i++) {
    var correctIcon = correctIcons[i];
    correctIcon.classList.add("invisible");
  }

  for (var i = 0; i < incorrectIcons.length; i++) {
    var incorrectIcon = incorrectIcons[i];
    incorrectIcon.classList.add("invisible");
  }

  result.textContent = "";
}

// DROPDOWN 



// DROPDOWN RESET BUTTON

function resetDropdowns() {
  var selects = document.getElementsByTagName("select");
  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
  }

  var icons = document.querySelectorAll(".icon");
  icons.forEach(function (icon) {
    icon.style.display = "none";
  });
}
