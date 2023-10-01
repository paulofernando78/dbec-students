// RADIOS
function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

// DROPDOWN

function checkDropdowns() {
  var answers = {
    option1: "b",
    option2: "b",
    option3: "c",
    option4: "b",
    option5: "c",
    option6: "a",
    option7: "b",
    option8: "c",
    option9: "c",
    option10: "b",
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

// FILL-IN-THE-BLANKS

function showFill1() {
  var answers = {
    blank1: "Although he has a very important job",
    blank2: "Although I had never seen her before",
    blank3: "although it was quite cold",
    blank4: "although we don't like them very much",
    blank5: "Although I didn't speak the language well",
    blank6: "Although the heating was on",
    blank7: "although I'd met her twice before",
    blank8: "although we've known each other a long time",
  };

  // Set the values of the input fields to the corresponding answers
  for (var key in answers) {
    if (answers.hasOwnProperty(key)) {
      document.getElementById(key).value = answers[key];
    }
  }
}
function checkFill1() {
  var answers = {
    blank1: "Although he has a very important job",
    blank2: "Although I had never seen her before",
    blank3: "although it was quite cold",
    blank4: "although we don't like them very much",
    blank5: "Although I didn't speak the language well",
    blank6: "Although the heating was on",
    blank7: "although I'd met her twice before",
    blank8: "although we've known each other a long time",
  };

  var fillIcon1 = document.getElementById("fillIcon1");
  var fillIcon2 = document.getElementById("fillIcon2");
  var fillIcon3 = document.getElementById("fillIcon3");
  var fillIcon4 = document.getElementById("fillIcon4");
  var fillIcon5 = document.getElementById("fillIcon5");
  var fillIcon6 = document.getElementById("fillIcon6");
  var fillIcon7 = document.getElementById("fillIcon7");
  var fillIcon8 = document.getElementById("fillIcon8");
  var result = document.getElementById("resultFill1");

  var isCorrect1 =
    document.getElementById("blank1").value.trim() === answers.blank1;
  var isCorrect2 =
    document.getElementById("blank2").value.trim() === answers.blank2;
  var isCorrect3 =
    document.getElementById("blank3").value.trim() === answers.blank3;
  var isCorrect4 =
    document.getElementById("blank4").value.trim() === answers.blank4;
  var isCorrect5 =
    document.getElementById("blank5").value.trim() === answers.blank5;
  var isCorrect6 =
    document.getElementById("blank6").value.trim() === answers.blank6;
  var isCorrect7 =
    document.getElementById("blank7").value.trim() === answers.blank7;
  var isCorrect8 =
    document.getElementById("blank8").value.trim() === answers.blank8;

  fillIcon1.className = isCorrect1
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon2.className = isCorrect2
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon3.className = isCorrect3
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon4.className = isCorrect4
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon5.className = isCorrect5
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon6.className = isCorrect6
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon7.className = isCorrect7
    ? "fill1-icon correct"
    : "fill1-icon incorrect";
  fillIcon8.className = isCorrect8
    ? "fill1-icon correct"
    : "fill1-icon incorrect";

  fillIcon1.style.display = "inline-block";
  fillIcon2.style.display = "inline-block";
  fillIcon3.style.display = "inline-block";
  fillIcon4.style.display = "inline-block";
  fillIcon5.style.display = "inline-block";
  fillIcon6.style.display = "inline-block";
  fillIcon7.style.display = "inline-block";
  fillIcon8.style.display = "inline-block";

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
function resetFill1() {
  var fillInputs = document.getElementsByClassName("fill1");
  var fillIcons = document.getElementsByClassName("fill1-icon");

  for (var i = 0; i < fillInputs.length; i++) {
    fillInputs[i].value = "";
  }

  for (var j = 0; j < fillIcons.length; j++) {
    fillIcons[j].className = "fill1-icon";
    fillIcons[j].style.display = "none";
  }

  document.getElementById("resultFill1").innerHTML = "";
}
