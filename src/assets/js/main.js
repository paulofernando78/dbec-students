// BUTTON DROPDOWN MENU
function buttonMenu() {
  const links = document.getElementById("nav_bar");
  if (links.style.display == "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
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

    alert("Link URL copied to clipboard.");
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

// COLLAPSE
function toggleCollapse(triangle) {
  // Find the closest parent section element
  var section = triangle.parentElement;

  // Find the content element within the section
  var content = section.querySelector(".content");

  // Toggle the display of the content
  content.style.display = content.style.display === "block" ? "none" : "block";

  // Toggle the "expanded" class on the section element
  section.classList.toggle("expanded");
}

// FLIP CARD
const flipCardContainers = document.querySelectorAll(".flip-card-container");

flipCardContainers.forEach((container) => {
  const flipCard = container.querySelector(".flip-card");

  flipCard.addEventListener("click", (e) => {
    flipCard.classList.toggle("flipped");
  });
});
