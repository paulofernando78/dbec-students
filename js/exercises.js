// RADIO RESET BUTTON

function resetRadios() {
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function (radio) {
    radio.checked = false;
  });
}

// CHECKBOXES

function checkCheckboxes() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var icons = document.querySelectorAll(".checkbox-icon");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    if (checkbox.getAttribute("data-correct") === "true") {
      icon.classList.remove("invisible");
    }
  }
}

function resetCheckboxes() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var icons = document.querySelectorAll(".checkbox-icon");

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var icon = icons[i];

    checkbox.checked = false;
    icon.classList.add("invisible");
  }
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
