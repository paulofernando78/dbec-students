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

      // Scroll the page to the top
      // window.scrollTo(0, 0);

      // Find and load associated JavaScript files within the loaded HTML content.
      const scriptElements = document
        .getElementById("content")
        .querySelectorAll("script");
      scriptElements.forEach((scriptElement) => {
        const src = scriptElement.getAttribute("src");
        if (src) {
          const script = document.createElement("script");
          script.src = src;
          document.body.appendChild(script);
        } else {
          // Execute inline scripts
          eval(scriptElement.innerHTML);
        }
      });

      //  const linkElements = document
      //   .getElementById("content")
      //   .querySelectorAll("link[rel='stylesheet']");
      // linkElements.forEach((linkElement) => {
      //   const href = linkElement.getAttribute("href");
      //   if (href) {
      //     const stylesheet = document.createElement("link");
      //     stylesheet.rel = "stylesheet";
      //     stylesheet.href = href;
      //     document.head.appendChild(stylesheet);
      //   }
      // });
    })

    .catch((error) => {
      console.error("There was a problem fetching the HTML:", error);
    });
}

// Self-invoking function to load "home.html" when the site initiates
(function () {
  loadPage("../pages/home.html");
})();
