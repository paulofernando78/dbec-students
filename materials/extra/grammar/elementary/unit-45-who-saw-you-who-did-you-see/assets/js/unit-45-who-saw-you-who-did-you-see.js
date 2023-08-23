// EXERCISE 45.1
// FILL-IN-THE-BLANKS 1
function checkFill1() {
  var answers = {
    blank1_fill1: "Who broke the window?",
    blank2_fill1: "What felt off the shelf?",
    blank3_fill1: "Who wants to see you?",
    blank4_fill1: "Who took your umbrella?",
    blank5_fill1: "What made you you sick?",
    blank6_fill1: "Who's coming.",
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

// EXERCISE XXX
// FILL-IN-THE-BLANKS 2
function checkFill2() {
  var answers = {
    blank1_fill2: "What did you buy?",
    blank2_fill2: "Who lives in this house?",
    blank3_fill2: "Who did you phone?",
    blank4_fill2: "What happened last night?",
    blank5_fill2: "Who knows the answer?",
    blank6_fill2: "Who did the dishes?",
    blank7_fill2: "What did Jane do?",
    blank8_fill2: "What woke you up?",
    blank9_fill2: "Who saw the accident?",
    blank10_fill2: "Who did you see?",
    blank11_fill2: "Who has your pen?",
    blank12_fill2: ["What does this word mean?"],
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
