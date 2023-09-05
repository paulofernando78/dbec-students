// EXERCISE XXX
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
