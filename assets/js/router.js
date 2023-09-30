// Define a routing table or mapping object
const routes = {
  home: "home.html",
  beginner: "materials/courses/beginner/beginner.html",
  elementary: "materials/courses/elementary/elementary.html",
  pre_intermediate: "materials/courses/pre-intermediate/pre-intermediate.html",
  intermediate: "materials/courses/intermediate/intermediate.html",
  upper_intermediate:
    "materials/courses/upper-intermediate/upper-intermediate.html",
  advanced: "materials/courses/advanced/advanced.html",

  grammar: "materials/extra/grammar/grammar.html",
  grammar_elementary: "materials/extra/grammar/elementary/elementary.html",
  grammar_elementary_unit_1_am_is_are:
    "materials/extra/grammar/elementary/unit-1-am-is-are/unit-1-am-is-are.html",
};

// Function to load content based on the fragment
function loadContent() {
  const fragment = window.location.hash.substring(1); // Get the fragment without the '#'
  const defaultRoute = "404.html"; // Default route

  // Look up the route in the routing table, or use the default route if not found
  const route = routes[fragment] || defaultRoute;

  // Load the content based on the route using the loadPage function
  loadPage(route);
}

// Listen for hash changes and load content
window.addEventListener("hashchange", loadContent);

// Load initial content when the page loads
loadContent();
