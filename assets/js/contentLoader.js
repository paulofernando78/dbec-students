// Function to fetch and display HTML content in the main section.
function loadPage(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((htmlContent) => {
      // Set the fetched HTML content as the innerHTML of the main section.
      document.getElementById("content").innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error("There was a problem fetching the HTML:", error);
    });
}

// Self-invoking function to load "home.html" when the site initiates
(function () {
  loadPage("index.html");
})();
