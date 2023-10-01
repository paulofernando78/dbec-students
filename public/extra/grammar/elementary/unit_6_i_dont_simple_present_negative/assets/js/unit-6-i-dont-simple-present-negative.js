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

// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank1_fill1: [
      "I do not play the piano very well.",
      "I don't play the piano very well.",
    ],
    blank2_fill1: [
      "Anna does not play the piano very well.",
      "Anna doesn't play the piano very well.",
    ],
    blank3_fill1: [
      "They do not know my phone number.",
      "They don't know my phone number.",
    ],
    blank4_fill1: ["We do not work very hard.", "We don't work very hard"],
    blank5_fill1: [
      "He does not take a shower every day.",
      "He doesn't take a shower every day.",
    ],
    blank6_fill1: [
      "You do not do the same thing every day.",
      "You don't do the same thing every day.",
    ],
  };

  var fill1Icon1 = document.getElementById("fill1Icon1");
  var fill1Icon2 = document.getElementById("fill1Icon2");
  var fill1Icon3 = document.getElementById("fill1Icon3");
  var fill1Icon4 = document.getElementById("fill1Icon4");
  var fill1Icon5 = document.getElementById("fill1Icon5");
  var fill1Icon6 = document.getElementById("fill1Icon6");
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

// FILL-IN-THE-BLANKS 2
function checkFill2() {
  var answers = {
    // blank1_fill2: "xxx",
    blank2_fill2: ["does not like", "doesn't like"],
    blank3_fill2: ["do not like", "don't like"],
    blank4_fill2: "likes",
    blank5_fill2: "like",
    blank6_fill2: ["does not like", "doesn't like"],
  };

  var fill2Icon1 = document.getElementById("fill2Icon1");
  var fill2Icon2 = document.getElementById("fill2Icon2");
  var fill2Icon3 = document.getElementById("fill2Icon3");
  var fill2Icon4 = document.getElementById("fill2Icon4");
  var fill2Icon5 = document.getElementById("fill2Icon5");
  var fill2Icon6 = document.getElementById("fill2Icon6");
  var result = document.getElementById("resultFill2");

  // var isCorrect1 =
  //   document.getElementById("blank1_fill2").value.trim() ===
  //   answers.blank1_fill2;
  var userInput2 = document.getElementById("blank2_fill2").value.trim();
  var isCorrect2 = answers.blank2_fill2.includes(userInput2);

  var userInput3 = document.getElementById("blank3_fill2").value.trim();
  var isCorrect3 = answers.blank3_fill2.includes(userInput3);

  var isCorrect4 =
    document.getElementById("blank4_fill2").value.trim() ===
    answers.blank4_fill2;
  var isCorrect5 =
    document.getElementById("blank5_fill2").value.trim() ===
    answers.blank5_fill2;

  var userInput6 = document.getElementById("blank6_fill2").value.trim();
  var isCorrect6 = answers.blank6_fill2.includes(userInput2);

  // fill2Icon1.className = isCorrect1
  //   ? "fill2-icon correct"
  //   : "fill2-icon incorrect";
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

  // fill2Icon1.style.display = "inline-block";
  fill2Icon2.style.display = "inline-block";
  fill2Icon3.style.display = "inline-block";
  fill2Icon4.style.display = "inline-block";
  fill2Icon5.style.display = "inline-block";
  fill2Icon6.style.display = "inline-block";

  var correctCount = [
    // isCorrect1,
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

// FILL-IN-THE-BLANKS 3
function checkFill3() {
  var answers = {
    blank1_fill3: ["does not rain", "doesn't rain"],
    blank2_fill3: ["does not wash", "doesn't wash"],
    blank3_fill3: ["do not go", "don't go"],
    blank4_fill3: ["does not wear", "doesn't wear"],
    blank5_fill3: ["do not know", "don't know"],
    blank6_fill3: ["does not cost", "doesn't cost"],
    blank7_fill3: ["do not see", "don't see"],
  };

  var fill3Icon1 = document.getElementById("fill3Icon1");
  var fill3Icon2 = document.getElementById("fill3Icon2");
  var fill3Icon3 = document.getElementById("fill3Icon3");
  var fill3Icon4 = document.getElementById("fill3Icon4");
  var fill3Icon5 = document.getElementById("fill3Icon5");
  var fill3Icon6 = document.getElementById("fill3Icon6");
  var fill3Icon7 = document.getElementById("fill3Icon7");
  var result = document.getElementById("resultFill3");

  var userInput1 = document.getElementById("blank1_fill3").value.trim();
  var isCorrect1 = answers.blank1_fill3.includes(userInput1);

  var userInput2 = document.getElementById("blank2_fill3").value.trim();
  var isCorrect2 = answers.blank2_fill3.includes(userInput2);

  var userInput3 = document.getElementById("blank3_fill3").value.trim();
  var isCorrect3 = answers.blank3_fill3.includes(userInput3);

  var userInput4 = document.getElementById("blank4_fill3").value.trim();
  var isCorrect4 = answers.blank4_fill3.includes(userInput4);

  var userInput5 = document.getElementById("blank5_fill3").value.trim();
  var isCorrect5 = answers.blank5_fill3.includes(userInput5);

  var userInput6 = document.getElementById("blank6_fill3").value.trim();
  var isCorrect6 = answers.blank6_fill3.includes(userInput6);

  var userInput7 = document.getElementById("blank7_fill3").value.trim();
  var isCorrect7 = answers.blank7_fill3.includes(userInput7);

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

  fill3Icon1.style.display = "inline-block";
  fill3Icon2.style.display = "inline-block";
  fill3Icon3.style.display = "inline-block";
  fill3Icon4.style.display = "inline-block";
  fill3Icon5.style.display = "inline-block";
  fill3Icon6.style.display = "inline-block";
  fill3Icon7.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
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
    blank1_fill4: "speaks",
    blank2_fill4: ["do not like", "don't like"],
    blank3_fill4: ["do not know", "don't know"],
    blank4_fill4: ["does not talk", "doesn't talk"],
    blank5_fill4: "drinks",
    blank6_fill4: ["do not believe", "don't belive"],
    blank7_fill4: "love",
    blank8_fill4: ["does not eat", "doesn't eat"],
  };

  var fill4Icon1 = document.getElementById("fill4Icon1");
  var fill4Icon2 = document.getElementById("fill4Icon2");
  var fill4Icon3 = document.getElementById("fill4Icon3");
  var fill4Icon4 = document.getElementById("fill4Icon4");
  var fill4Icon5 = document.getElementById("fill4Icon5");
  var fill4Icon6 = document.getElementById("fill4Icon6");
  var fill4Icon7 = document.getElementById("fill4Icon7");
  var fill4Icon8 = document.getElementById("fill4Icon8");
  var result = document.getElementById("resultFill4");

  var isCorrect1 =
    document.getElementById("blank1_fill4").value.trim() ===
    answers.blank1_fill4;

  var userInput2 = document.getElementById("blank2_fill4").value.trim();
  var isCorrect2 = answers.blank2_fill4.includes(userInput2);

  var userInput3 = document.getElementById("blank3_fill4").value.trim();
  var isCorrect3 = answers.blank3_fill4.includes(userInput3);

  var userInput4 = document.getElementById("blank4_fill4").value.trim();
  var isCorrect4 = answers.blank4_fill4.includes(userInput4);

  var isCorrect5 =
    document.getElementById("blank5_fill4").value.trim() ===
    answers.blank5_fill4;

  var userInput6 = document.getElementById("blank6_fill4").value.trim();
  var isCorrect6 = answers.blank6_fill4.includes(userInput6);

  var isCorrect7 =
    document.getElementById("blank7_fill4").value.trim() ===
    answers.blank7_fill4;

  var userInput8 = document.getElementById("blank8_fill4").value.trim();
  var isCorrect8 = answers.blank8_fill4.includes(userInput8);

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

  fill4Icon1.style.display = "inline-block";
  fill4Icon2.style.display = "inline-block";
  fill4Icon3.style.display = "inline-block";
  fill4Icon4.style.display = "inline-block";
  fill4Icon5.style.display = "inline-block";
  fill4Icon6.style.display = "inline-block";
  fill4Icon7.style.display = "inline-block";
  fill4Icon8.style.display = "inline-block";

  var correctCount = [
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
    isCorrect5,
    isCorrect6,
    isCorrect7,
    isCorrect8,
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
