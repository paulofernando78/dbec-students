// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank2_fill1: "Are you leaving now?",
    blank3_fill1: "Is it raining?",
    blank4_fill1: "Are you enjoying the movie?",
    blank5_fill1: "Is that clock working?",
    blank6_fill1: "Are you waiting for a bus?",
  };

  var fill1Icon2 = document.getElementById("fill1Icon2");
  var fill1Icon3 = document.getElementById("fill1Icon3");
  var fill1Icon4 = document.getElementById("fill1Icon4");
  var fill1Icon5 = document.getElementById("fill1Icon5");
  var fill1Icon6 = document.getElementById("fill1Icon6");
  var result = document.getElementById("resultFill1");

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

  fill1Icon2.style.display = "inline-block";
  fill1Icon3.style.display = "inline-block";
  fill1Icon4.style.display = "inline-block";
  fill1Icon5.style.display = "inline-block";
  fill1Icon6.style.display = "inline-block";

  var correctCount = [
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
    blank2_fill2: ["Where is she going?", "Where's she going?"],
    blank3_fill2: "What are you eating?",
    blank4_fill2: "Why are you crying?",
    blank5_fill2: "What are they looking at?",
    blank6_fill2: ["Why is he laughing?", "Why's he laughing?"],
  };

  var fill2Icon2 = document.getElementById("fill2Icon2");
  var fill2Icon3 = document.getElementById("fill2Icon3");
  var fill2Icon4 = document.getElementById("fill2Icon4");
  var fill2Icon5 = document.getElementById("fill2Icon5");
  var fill2Icon6 = document.getElementById("fill2Icon6");
  var result = document.getElementById("resultFill2");

  var userInput2 = document.getElementById("blank2_fill2").value.trim();
  var isCorrect2 = answers.blank2_fill2.includes(userInput2);
  var isCorrect3 =
    document.getElementById("blank3_fill2").value.trim() ===
    answers.blank3_fill2;
  var isCorrect4 =
    document.getElementById("blank4_fill2").value.trim() ===
    answers.blank4_fill2;
  var isCorrect5 =
    document.getElementById("blank5_fill2").value.trim() ===
    answers.blank5_fill2;
  var userInput6 = document.getElementById("blank6_fill2").value.trim();
  var isCorrect6 = answers.blank6_fill2.includes(userInput6);

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

  fill2Icon2.style.display = "inline-block";
  fill2Icon3.style.display = "inline-block";
  fill2Icon4.style.display = "inline-block";
  fill2Icon5.style.display = "inline-block";
  fill2Icon6.style.display = "inline-block";

  var correctCount = [
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
    blank1_fill3: "Is Ben working today?",
    blank2_fill3: "What are the children doing?",
    blank3_fill3: "Are you listening to me?",
    blank4_fill3: "Where are your friends going?",
    blank5_fill3: "Are your parents watching TV?",
    blank6_fill3: ["What is Jessica cooking?", "What's Jessica cooking?"],
    blank7_fill3: "Why are you looking at me?",
    blank8_fill3: "Is the bus coming?",
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
  var userInput6 = document.getElementById("blank6_fill3").value.trim();
  var isCorrect6 = answers.blank6_fill3.includes(userInput6);
  var isCorrect7 =
    document.getElementById("blank7_fill3").value.trim() ===
    answers.blank7_fill3;
  var isCorrect8 =
    document.getElementById("blank8_fill3").value.trim() ===
    answers.blank8_fill3;

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

  fill3Icon1.style.display = "inline-block";
  fill3Icon2.style.display = "inline-block";
  fill3Icon3.style.display = "inline-block";
  fill3Icon4.style.display = "inline-block";
  fill3Icon5.style.display = "inline-block";
  fill3Icon6.style.display = "inline-block";
  fill3Icon7.style.display = "inline-block";
  fill3Icon8.style.display = "inline-block";

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
