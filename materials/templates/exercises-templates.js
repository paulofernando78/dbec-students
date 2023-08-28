// HANGMAN

// <!-- An array of words -->
// var words = ["english", "student"];

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

// EXERCISE XXX
// DROPDOWN
function checkDropdowns() {
  var answers = {
    option1: "a",
    option2: "a",
    option3: "a",
    option4: "a",
    option5: "a",
    option6: "a",
    option7: "a",
    option8: "a",
    option9: "a",
    option10: "a",
    option11: "a",
    option12a: "a",
    option12b: "a",
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

// EXERCISE XXX
// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank1_fill1: ["xxx", "xxx"],
    blank2_fill1: ["xxx", "xxx"],
    blank3_fill1: ["xxx", "xxx"],
    blank4_fill1: ["xxx", "xxx"],
    blank5_fill1: ["xxx", "xxx"],
    blank6_fill1: ["xxx", "xxx"],
    blank7_fill1: ["xxx", "xxx"],
    blank8_fill1: ["xxx", "xxx"],
    blank9_fill1: ["xxx", "xxx"],
    blank10_fill1: ["xxx", "xxx"],
    blank11_fill1: ["xxx", "xxx"],
    blank12_fill1: ["xxx", "xxx"],
    blank13_fill1: ["xxx", "xxx"],
    blank14_fill1: ["xxx", "xxx"],
  };

  var fill1Icon1 = document.getElementById("fill1Icon1");
  var fill1Icon2 = document.getElementById("fill1Icon2");
  var fill1Icon3 = document.getElementById("fill1Icon3");
  var fill1Icon4 = document.getElementById("fill1Icon4");
  var fill1Icon5 = document.getElementById("fill1Icon5");
  var fill1Icon6 = document.getElementById("fill1Icon6");
  var fill1Icon7 = document.getElementById("fill1Icon7");
  var fill1Icon8 = document.getElementById("fill1Icon8");
  var fill1Icon9 = document.getElementById("fill1Icon9");
  var fill1Icon10 = document.getElementById("fill1Icon10");
  var fill1Icon11 = document.getElementById("fill1Icon11");
  var fill1Icon12 = document.getElementById("fill1Icon12");
  var fill1Icon13 = document.getElementById("fill1Icon13");
  var fill1Icon14 = document.getElementById("fill1Icon14");
  var result = document.getElementById("resultFill1");

  var userInput1 = document.getElementById("blank1_fill1").value.trim();
  var isCorrect1 = answers.blank1_fill1.includes(userInput1);

  var userInput2 = document.getElementById("blank2_fill1").value.trim();
  var isCorrect2 = answers.blank2_fill1.includes(userInput2);

  var userInput3 = document.getElementById("blank3_fill1").value.trim();
  var isCorrect3 = answers.blank3_fill1.includes(userInput3);

  var userInput4 = document.getElementById("blank4_fill1").value.trim();
  var isCorrect4 = answers.blank4_fill1.includes(userInput4);

  var userInput5 = document.getElementById("blank5_fill1").value.trim();
  var isCorrect5 = answers.blank5_fill1.includes(userInput5);

  var userInput6 = document.getElementById("blank6_fill1").value.trim();
  var isCorrect6 = answers.blank6_fill1.includes(userInput6);

  var userInput7 = document.getElementById("blank7_fill1").value.trim();
  var isCorrect7 = answers.blank7_fill1.includes(userInput7);

  var userInput8 = document.getElementById("blank8_fill1").value.trim();
  var isCorrect8 = answers.blank8_fill1.includes(userInput8);

  var userInput9 = document.getElementById("blank9_fill1").value.trim();
  var isCorrect9 = answers.blank9_fill1.includes(userInput9);

  var userInput10 = document.getElementById("blank10_fill1").value.trim();
  var isCorrect10 = answers.blank10_fill1.includes(userInput10);

  var userInput11 = document.getElementById("blank11_fill1").value.trim();
  var isCorrect11 = answers.blank11_fill1.includes(userInput11);

  var userInput12 = document.getElementById("blank12_fill1").value.trim();
  var isCorrect12 = answers.blank12_fill1.includes(userInput12);

  var userInput13 = document.getElementById("blank13_fill1").value.trim();
  var isCorrect13 = answers.blank13_fill1.includes(userInput13);

  var userInput14 = document.getElementById("blank14_fill1").value.trim();
  var isCorrect14 = answers.blank14_fill1.includes(userInput14);

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
  fill1Icon7.className = isCorrect7
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon8.className = isCorrect8
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon9.className = isCorrect9
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon10.className = isCorrect10
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon11.className = isCorrect11
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon12.className = isCorrect12
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon13.className = isCorrect13
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon14.className = isCorrect14
    ? "fill1-icon correct"
    : "fill1-icon incorrect";

  fill1Icon1.style.display = "inline-block";
  fill1Icon2.style.display = "inline-block";
  fill1Icon3.style.display = "inline-block";
  fill1Icon4.style.display = "inline-block";
  fill1Icon5.style.display = "inline-block";
  fill1Icon6.style.display = "inline-block";
  fill1Icon7.style.display = "inline-block";
  fill1Icon8.style.display = "inline-block";
  fill1Icon9.style.display = "inline-block";
  fill1Icon10.style.display = "inline-block";
  fill1Icon11.style.display = "inline-block";
  fill1Icon12.style.display = "inline-block";
  fill1Icon13.style.display = "inline-block";
  fill1Icon14.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
    isCorrect9,
    isCorrect10,
    isCorrect11,
    isCorrect12,
    isCorrect13,
    isCorrect14,
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

// EXERCISE XXX
// FILL-IN-THE-BLANKS 2
function checkFill2() {
  var answers = {
    blank1_fill2: "xxx",
    blank2_fill2: "xxx",
    blank3_fill2: "xxx",
    blank4_fill2: "xxx",
    blank5_fill2: "xxx",
    blank6_fill2: "xxx",
    blank7_fill2: "xxx",
    blank8_fill2: "xxx",
    blank9_fill2: "xxx",
    blank10_fill2: "xxx",
    blank11_fill2: "xxx",
    blank12_fill2: ["xxx", "xxx"],
  };

  var fill2Icon1 = document.getElementById("fill2Icon1");
  var fill2Icon2 = document.getElementById("fill2Icon2");
  var fill2Icon3 = document.getElementById("fill2Icon3");
  var fill2Icon4 = document.getElementById("fill2Icon4");
  var fill2Icon5 = document.getElementById("fill2Icon5");
  var fill2Icon6 = document.getElementById("fill2Icon6");
  var fill2Icon7 = document.getElementById("fill2Icon7");
  var fill2Icon8 = document.getElementById("fill2Icon8");
  var fill2Icon9 = document.getElementById("fill2Icon9");
  var fill2Icon10 = document.getElementById("fill2Icon10");
  var fill2Icon11 = document.getElementById("fill2Icon11");
  var fill2Icon12 = document.getElementById("fill2Icon12");
  var result = document.getElementById("resultFill2");

  var isCorrect1 =
    document.getElementById("blank1_fill2").value.trim() ===
    answers.blank1_fill2;
  var isCorrect2 =
    document.getElementById("blank2_fill2").value.trim() ===
    answers.blank2_fill2;
  var isCorrect3 =
    document.getElementById("blank3_fill2").value.trim() ===
    answers.blank3_fill2;
  var isCorrect4 =
    document.getElementById("blank4_fill2").value.trim() ===
    answers.blank4_fill2;
  var isCorrect5 =
    document.getElementById("blank5_fill2").value.trim() ===
    answers.blank5_fill2;
  var isCorrect6 =
    document.getElementById("blank6_fill2").value.trim() ===
    answers.blank6_fill2;
  var isCorrect7 =
    document.getElementById("blank7_fill2").value.trim() ===
    answers.blank7_fill2;
  var isCorrect8 =
    document.getElementById("blank8_fill2").value.trim() ===
    answers.blank8_fill2;
  var isCorrect9 =
    document.getElementById("blank9_fill2").value.trim() ===
    answers.blank9_fill2;
  var isCorrect10 =
    document.getElementById("blank10_fill2").value.trim() ===
    answers.blank10_fill2;
  var isCorrect11 =
    document.getElementById("blank11_fill2").value.trim() ===
    answers.blank11_fill2;
  var userInput12 = document.getElementById("blank12_fill2").value.trim();
  var isCorrect12 = answers.blank12_fill2.includes(userInput12);

  fill2Icon1.className = isCorrect1
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon2.className = isCorrect2
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon3.className = isCorrect3
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon4.className = isCorrect4
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon5.className = isCorrect5
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon6.className = isCorrect6
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon7.className = isCorrect7
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon8.className = isCorrect8
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon9.className = isCorrect9
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon10.className = isCorrect10
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon11.className = isCorrect11
    ? "fill2-icon correct"
    : "fill2-icon incorrect";
  fill2Icon12.className = isCorrect12
    ? "fill2-icon correct"
    : "fill2-icon incorrect";

  fill2Icon1.style.display = "inline-block";
  fill2Icon2.style.display = "inline-block";
  fill2Icon3.style.display = "inline-block";
  fill2Icon4.style.display = "inline-block";
  fill2Icon5.style.display = "inline-block";
  fill2Icon6.style.display = "inline-block";
  fill2Icon7.style.display = "inline-block";
  fill2Icon8.style.display = "inline-block";
  fill2Icon9.style.display = "inline-block";
  fill2Icon10.style.display = "inline-block";
  fill2Icon11.style.display = "inline-block";
  fill2Icon12.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
    isCorrect9,
    isCorrect10,
    isCorrect11,
    isCorrect12,
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

// EXERCISE XXX
// FILL-IN-THE-BLANKS 3
function checkFill3() {
  var answers = {
    blank1_fill3: "xxx",
    blank2_fill3: "xxx",
    blank3_fill3: "xxx",
    blank4_fill3: "xxx",
    blank5_fill3: "xxx",
    blank6_fill3: "xxx",
    blank7_fill3: "xxx",
    blank8_fill3: "xxx",
    blank9_fill3: "xxx",
    blank10_fill3: "xxx",
    blank11_fill3: "xxx",
    blank12_fill3: ["xxx", "xxx"],
  };

  var fill3Icon1 = document.getElementById("fill3Icon1");
  var fill3Icon2 = document.getElementById("fill3Icon2");
  var fill3Icon3 = document.getElementById("fill3Icon3");
  var fill3Icon4 = document.getElementById("fill3Icon4");
  var fill3Icon5 = document.getElementById("fill3Icon5");
  var fill3Icon6 = document.getElementById("fill3Icon6");
  var fill3Icon7 = document.getElementById("fill3Icon7");
  var fill3Icon8 = document.getElementById("fill3Icon8");
  var fill3Icon9 = document.getElementById("fill3Icon9");
  var fill3Icon10 = document.getElementById("fill3Icon10");
  var fill3Icon11 = document.getElementById("fill3Icon11");
  var fill3Icon12 = document.getElementById("fill3Icon12");
  var result = document.getElementById("resultFill3");

  var isCorrect1 =
    document.getElementById("blank1_fill3").value.trim() ===
    answers.blank1_fill3;
  var isCorrect2 =
    document.getElementById("blank2_fill3").value.trim() ===
    answers.blank2_fill3;
  var isCorrect3 =
    document.getElementById("blank3_fill3").value.trim() ===
    answers.blank3_fill3;
  var isCorrect4 =
    document.getElementById("blank4_fill3").value.trim() ===
    answers.blank4_fill3;
  var isCorrect5 =
    document.getElementById("blank5_fill3").value.trim() ===
    answers.blank5_fill3;
  var isCorrect6 =
    document.getElementById("blank6_fill3").value.trim() ===
    answers.blank6_fill3;
  var isCorrect7 =
    document.getElementById("blank7_fill3").value.trim() ===
    answers.blank7_fill3;
  var isCorrect8 =
    document.getElementById("blank8_fill3").value.trim() ===
    answers.blank8_fill3;
  var isCorrect9 =
    document.getElementById("blank9_fill3").value.trim() ===
    answers.blank9_fill3;
  var isCorrect10 =
    document.getElementById("blank10_fill3").value.trim() ===
    answers.blank10_fill3;
  var isCorrect11 =
    document.getElementById("blank11_fill3").value.trim() ===
    answers.blank11_fill3;
  var userInput12 = document.getElementById("blank12_fill3").value.trim();
  var isCorrect12 = answers.blank12_fill3.includes(userInput12);

  fill3Icon1.className = isCorrect1
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon2.className = isCorrect2
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon3.className = isCorrect3
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon4.className = isCorrect4
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon5.className = isCorrect5
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon6.className = isCorrect6
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon7.className = isCorrect7
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon8.className = isCorrect8
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon9.className = isCorrect9
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon10.className = isCorrect10
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon11.className = isCorrect11
    ? "fill3-icon correct"
    : "fill3-icon incorrect";
  fill3Icon12.className = isCorrect12
    ? "fill3-icon correct"
    : "fill3-icon incorrect";

  fill3Icon1.style.display = "inline-block";
  fill3Icon2.style.display = "inline-block";
  fill3Icon3.style.display = "inline-block";
  fill3Icon4.style.display = "inline-block";
  fill3Icon5.style.display = "inline-block";
  fill3Icon6.style.display = "inline-block";
  fill3Icon7.style.display = "inline-block";
  fill3Icon8.style.display = "inline-block";
  fill3Icon9.style.display = "inline-block";
  fill3Icon10.style.display = "inline-block";
  fill3Icon11.style.display = "inline-block";
  fill3Icon12.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
    isCorrect9,
    isCorrect10,
    isCorrect11,
    isCorrect12,
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
function showFill3() {
  var answerElements = document.getElementsByClassName("fill3_answer");

  for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    answerElement.style.display = "block"; // Show the answers
  }
}
function resetFill3() {
  var fill3Inputs = document.getElementsByClassName("fill3");
  var fill3Icons = document.getElementsByClassName("fill3-icon");
  var result = document.getElementById("resultFill3");

  for (var i = 0; i < fill3Inputs.length; i++) {
    fill3Inputs[i].value = "";
  }

  for (var j = 0; j < fill3Icons.length; j++) {
    fill3Icons[j].className = "fill3-icon";
    fill3Icons[j].style.display = "none";
  }

  result.innerHTML = "";

  var answerElements = document.getElementsByClassName("fill3_answer");

  for (var k = 0; k < answerElements.length; k++) {
    var answerElement = answerElements[k];
    answerElement.style.display = "none"; // Hide the answers
  }
}

// EXERCISE XXX
// FILL-IN-THE-BLANKS 4
function checkFill4() {
  var answers = {
    blank1_fill4: "xxx",
    blank2_fill4: "xxx",
    blank3_fill4: "xxx",
    blank4_fill4: "xxx",
    blank5_fill4: "xxx",
    blank6_fill4: "xxx",
    blank7_fill4: "xxx",
    blank8_fill4: "xxx",
    blank9_fill4: "xxx",
    blank10_fill4: "xxx",
    blank11_fill4: "xxx",
    blank12_fill4: ["xxx", "xxx"],
  };

  var fill4Icon1 = document.getElementById("fill4Icon1");
  var fill4Icon2 = document.getElementById("fill4Icon2");
  var fill4Icon3 = document.getElementById("fill4Icon3");
  var fill4Icon4 = document.getElementById("fill4Icon4");
  var fill4Icon5 = document.getElementById("fill4Icon5");
  var fill4Icon6 = document.getElementById("fill4Icon6");
  var fill4Icon7 = document.getElementById("fill4Icon7");
  var fill4Icon8 = document.getElementById("fill4Icon8");
  var fill4Icon9 = document.getElementById("fill4Icon9");
  var fill4Icon10 = document.getElementById("fill4Icon10");
  var fill4Icon11 = document.getElementById("fill4Icon11");
  var fill4Icon12 = document.getElementById("fill4Icon12");
  var result = document.getElementById("resultFill4");

  var isCorrect1 =
    document.getElementById("blank1_fill4").value.trim() ===
    answers.blank1_fill4;
  var isCorrect2 =
    document.getElementById("blank2_fill4").value.trim() ===
    answers.blank2_fill4;
  var isCorrect3 =
    document.getElementById("blank3_fill4").value.trim() ===
    answers.blank3_fill4;
  var isCorrect4 =
    document.getElementById("blank4_fill4").value.trim() ===
    answers.blank4_fill4;
  var isCorrect5 =
    document.getElementById("blank5_fill4").value.trim() ===
    answers.blank5_fill4;
  var isCorrect6 =
    document.getElementById("blank6_fill4").value.trim() ===
    answers.blank6_fill4;
  var isCorrect7 =
    document.getElementById("blank7_fill4").value.trim() ===
    answers.blank7_fill4;
  var isCorrect8 =
    document.getElementById("blank8_fill4").value.trim() ===
    answers.blank8_fill4;
  var isCorrect9 =
    document.getElementById("blank9_fill4").value.trim() ===
    answers.blank9_fill4;
  var isCorrect10 =
    document.getElementById("blank10_fill4").value.trim() ===
    answers.blank10_fill4;
  var isCorrect11 =
    document.getElementById("blank11_fill4").value.trim() ===
    answers.blank11_fill4;
  var userInput12 = document.getElementById("blank12_fill4").value.trim();
  var isCorrect12 = answers.blank12_fill4.includes(userInput12);

  fill4Icon1.className = isCorrect1
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon2.className = isCorrect2
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon3.className = isCorrect3
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon4.className = isCorrect4
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon5.className = isCorrect5
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon6.className = isCorrect6
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon7.className = isCorrect7
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon8.className = isCorrect8
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon9.className = isCorrect9
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon10.className = isCorrect10
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon11.className = isCorrect11
    ? "fill4-icon correct"
    : "fill4-icon incorrect";
  fill4Icon12.className = isCorrect12
    ? "fill4-icon correct"
    : "fill4-icon incorrect";

  fill4Icon1.style.display = "inline-block";
  fill4Icon2.style.display = "inline-block";
  fill4Icon3.style.display = "inline-block";
  fill4Icon4.style.display = "inline-block";
  fill4Icon5.style.display = "inline-block";
  fill4Icon6.style.display = "inline-block";
  fill4Icon7.style.display = "inline-block";
  fill4Icon8.style.display = "inline-block";
  fill4Icon9.style.display = "inline-block";
  fill4Icon10.style.display = "inline-block";
  fill4Icon11.style.display = "inline-block";
  fill4Icon12.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
    isCorrect9,
    isCorrect10,
    isCorrect11,
    isCorrect12,
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
function showFill4() {
  var answerElements = document.getElementsByClassName("fill4_answer");

  for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    answerElement.style.display = "block"; // Show the answers
  }
}
function resetFill4() {
  var fill4Inputs = document.getElementsByClassName("fill4");
  var fill4Icons = document.getElementsByClassName("fill4-icon");
  var result = document.getElementById("resultFill4");

  for (var i = 0; i < fill4Inputs.length; i++) {
    fill4Inputs[i].value = "";
  }

  for (var j = 0; j < fill4Icons.length; j++) {
    fill4Icons[j].className = "fill4-icon";
    fill4Icons[j].style.display = "none";
  }

  result.innerHTML = "";

  var answerElements = document.getElementsByClassName("fill4_answer");

  for (var k = 0; k < answerElements.length; k++) {
    var answerElement = answerElements[k];
    answerElement.style.display = "none"; // Hide the answers
  }
}

// EXERCISE XXX
// FILL-IN-THE-BLANK (TEXT)
function checkFilltext() {
  var answers = {
    blank1_text: "xxx",
    blank2_text: "xxx",
    blank3_text: "xxx",
    blank4_text: "xxx",
    blank5_text: "xxx",
    blank6_text: "xxx",
    blank7_text: "xxx",
    blank8_text: "xxx",
    blank9_text: "xxx",
    blank10_text: "xxx",
    blank11_text: "xxx",
    blank12_text: ["xxx", "xxx"],
  };

  var filltextIcon1 = document.getElementById("filltextIcon1");
  var filltextIcon2 = document.getElementById("filltextIcon2");
  var filltextIcon3 = document.getElementById("filltextIcon3");
  var filltextIcon4 = document.getElementById("filltextIcon4");
  var filltextIcon5 = document.getElementById("filltextIcon5");
  var filltextIcon6 = document.getElementById("filltextIcon6");
  var filltextIcon7 = document.getElementById("filltextIcon7");
  var filltextIcon8 = document.getElementById("filltextIcon8");
  var filltextIcon9 = document.getElementById("filltextIcon9");
  var filltextIcon10 = document.getElementById("filltextIcon10");
  var filltextIcon11 = document.getElementById("filltextIcon11");
  var filltextIcon12 = document.getElementById("filltextIcon12");
  var result = document.getElementById("resultFilltext");

  var isCorrect1 =
    document.getElementById("blank1_text").value.trim() === answers.blank1_text;
  var isCorrect2 =
    document.getElementById("blank2_text").value.trim() === answers.blank2_text;
  var isCorrect3 =
    document.getElementById("blank3_text").value.trim() === answers.blank3_text;
  var isCorrect4 =
    document.getElementById("blank4_text").value.trim() === answers.blank4_text;
  var isCorrect5 =
    document.getElementById("blank5_text").value.trim() === answers.blank5_text;
  var isCorrect6 =
    document.getElementById("blank6_text").value.trim() === answers.blank6_text;
  var isCorrect7 =
    document.getElementById("blank7_text").value.trim() === answers.blank7_text;
  var isCorrect8 =
    document.getElementById("blank8_text").value.trim() === answers.blank8_text;
  var isCorrect9 =
    document.getElementById("blank9_text").value.trim() === answers.blank9_text;
  var isCorrect10 =
    document.getElementById("blank10_text").value.trim() ===
    answers.blank10_text;
  var isCorrect11 =
    document.getElementById("blank11_text").value.trim() ===
    answers.blank11_text;
  var isCorrect12 = answers.blank12_text.includes(
    document.getElementById("blank12_text").value.trim()
  );

  filltextIcon1.className = isCorrect1
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon2.className = isCorrect2
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon3.className = isCorrect3
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon4.className = isCorrect4
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon5.className = isCorrect5
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon6.className = isCorrect6
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon7.className = isCorrect7
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon8.className = isCorrect8
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon9.className = isCorrect9
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon10.className = isCorrect10
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon11.className = isCorrect11
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";
  filltextIcon12.className = isCorrect12
    ? "fill-text-icon correct"
    : "fill-text-icon incorrect";

  filltextIcon1.style.display = "inline-block";
  filltextIcon2.style.display = "inline-block";
  filltextIcon3.style.display = "inline-block";
  filltextIcon4.style.display = "inline-block";
  filltextIcon5.style.display = "inline-block";
  filltextIcon6.style.display = "inline-block";
  filltextIcon7.style.display = "inline-block";
  filltextIcon8.style.display = "inline-block";
  filltextIcon9.style.display = "inline-block";
  filltextIcon10.style.display = "inline-block";
  filltextIcon11.style.display = "inline-block";
  filltextIcon12.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
    isCorrect9,
    isCorrect10,
    isCorrect11,
    isCorrect12,
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
function showFilltext() {
  var answerElements = document.getElementsByClassName("fill-text-answer");

  for (var i = 0; i < answerElements.length; i++) {
    var answerElement = answerElements[i];
    answerElement.style.display = "block"; // Show the answers
  }
}
function resetFilltext() {
  var filltextInputs = document.getElementsByClassName("fill-text");
  var filltextIcons = document.getElementsByClassName("fill-text-icon");
  var result = document.getElementById("resultFilltext");

  for (var i = 0; i < filltextInputs.length; i++) {
    filltextInputs[i].value = "";
  }

  for (var j = 0; j < filltextIcons.length; j++) {
    filltextIcons[j].className = "fill-text-icon";
    filltextIcons[j].style.display = "none";
  }

  result.innerHTML = "";

  var answerElements = document.getElementsByClassName("fill-text-answer");

  for (var k = 0; k < answerElements.length; k++) {
    var answerElement = answerElements[k];
    answerElement.style.display = "none"; // Hide the answers
  }
}
