// EXERCISE 103.1
// DROPDOWN 1
function checkDropdowns() {
  var answers = {
    option1: "b",
    option2: "c",
    option3: "a",
    option4: "b",
    option5: "c",
    option6: "c",
    option7: "b",
    option8: "b",
    option9: "a",
    option10: "b",
    option11: "a",
    option12: "c",
    option13: "b",
    option14: "b",
    option15: "a",
    option16: "a",
    option17: "b",
    option18: "c",
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

// EXERCISE 103.2
// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank1_fill1: ["on"],
    blank2_fill1: ["on"],
    blank3_fill1: ["at"],
    blank4_fill1: ["in"],
    blank5_fill1: ["in"],
    blank6_fill1: ["in"],
    blank7_fill1: ["on"],
    blank8_fill1: ["on"],
    blank9_fill1: ["in"],
    blank10_fill1: ["at"],
    blank11_fill1: ["on"],
    blank12_fill1: ["on"],
    blank13_fill1: ["in"],
    blank14_fill1: ["at"],
    blank15_fill1: ["in"],
    blank16_fill1: ["on"],
    blank17_fill1: ["in"],
    blank18_fill1: ["at"],
    blank19_fill1: ["at"],
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
  var fill1Icon15 = document.getElementById("fill1Icon15");
  var fill1Icon16 = document.getElementById("fill1Icon16");
  var fill1Icon17 = document.getElementById("fill1Icon17");
  var fill1Icon18 = document.getElementById("fill1Icon18");
  var fill1Icon19 = document.getElementById("fill1Icon19");
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

  var userInput15 = document.getElementById("blank15_fill1").value.trim();
  var isCorrect15 = answers.blank15_fill1.includes(userInput15);

  var userInput16 = document.getElementById("blank16_fill1").value.trim();
  var isCorrect16 = answers.blank16_fill1.includes(userInput16);

  var userInput17 = document.getElementById("blank17_fill1").value.trim();
  var isCorrect17 = answers.blank17_fill1.includes(userInput17);

  var userInput18 = document.getElementById("blank18_fill1").value.trim();
  var isCorrect18 = answers.blank18_fill1.includes(userInput18);

  var userInput19 = document.getElementById("blank19_fill1").value.trim();
  var isCorrect19 = answers.blank19_fill1.includes(userInput19);

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
  fill1Icon15.className = isCorrect15
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon16.className = isCorrect16
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon17.className = isCorrect17
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon18.className = isCorrect18
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fill1Icon19.className = isCorrect19
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
  fill1Icon15.style.display = "inline-block";
  fill1Icon16.style.display = "inline-block";
  fill1Icon17.style.display = "inline-block";
  fill1Icon18.style.display = "inline-block";
  fill1Icon19.style.display = "inline-block";

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
    isCorrect15,
    isCorrect16,
    isCorrect17,
    isCorrect18,
    isCorrect19,
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
