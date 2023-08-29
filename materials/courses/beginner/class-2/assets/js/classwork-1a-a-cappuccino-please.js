// xxx
// CLASSWORK PRACTICE COPY LINK

// GRAMMAR
document.addEventListener("DOMContentLoaded", function () {
  var copyLink = document.getElementById("practice-grammar-link");

  copyLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var linkUrl = copyLink.getAttribute("href");

    // Create a temporary input element to copy the URL
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px;";
    tempInput.value = linkUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Link copied to clipboard.");
  });
});

// VOCABULARY
document.addEventListener("DOMContentLoaded", function () {
  var copyLink = document.getElementById(
    "https://paulofernando78.github.io/dbec-students/materials/courses/beginner/-templates/classwork.html#practice-vocabulary"
  );

  copyLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var linkUrl = copyLink.getAttribute("href");

    // Create a temporary input element to copy the URL
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px;";
    tempInput.value = linkUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Link copied to clipboard.");
  });
});

// xxx
// RADIOS
function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

// xxx
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

// PRACTICE (Vocabulary)
// DROPDOWN
function checkDropdowns() {
  var answers = {
    option1: "b",
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
