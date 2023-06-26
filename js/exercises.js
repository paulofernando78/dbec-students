// RADIO RESET BUTTON

function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function (radio) {
    radio.checked = false;
  });
}

// CHECKBOX  RESET BUTTON

function resetCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

  // DROPDOWN 

  function checkAnswer(selectElement, iconId, correctValue) {
    var selectedValue = selectElement.value;
    var icon = document.getElementById(iconId);
    icon.className =
      selectedValue === correctValue ? "icon correct" : "icon incorrect";
    icon.style.display = "inline-block";
  }

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
