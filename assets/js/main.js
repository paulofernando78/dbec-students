// BUTTON DROPDOWN MENU
function buttonMenu() {
    if (links.style.display == "block") {links.style = "none"
    } else {
        links.style.display = "block"
    }
}

// CLASSWORK BUTTON TIP
function buttonTips1() {
  if (tips1.style.display == "block") {tips1.style = "none";
  } else {
    tips1.style.display = "block";
  }
}

function buttonTips2() {
  if (tips2.style.display == "block") {
    tips2.style = "none";
  } else {
    tips2.style.display = "block";
  }
}

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
  var copyLink = document.getElementById("practice-vocabulary-link");

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