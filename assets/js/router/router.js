// Define a routing table or mapping object
const routes = {
  home: "home.html",
  beginner: "courses/beginner/beginner.html",
  elementary: "courses/elementary/elementary.html",
  pre_intermediate: "courses/pre-intermediate/pre-intermediate.html",
  intermediate: "courses/intermediate/intermediate.html",
  upper_intermediate: "courses/upper-intermediate/upper-intermediate.html",
  advanced: "courses/advanced/advanced.html",

  // GRAMMAR-ELEMENTARY
  grammar: "extra/grammar/grammar.html",
  grammar: "extra/grammar/grammar.html",
  grammar_elementary: "extra/grammar/elementary/elementary.html",
  grammar_elementary_unit_1_am_is_are:
    "extra/grammar/elementary/unit_1_am_is_are/unit_1_am_is_are.html",
  grammar_elementary_unit_2_am_is_are_questions:
    "extra/grammar/elementary/unit-2-am-is-are-questions/unit-2-am-is-are-questions.html",
  grammar_elementary_unit_3_i_am_doing_present_continuous:
    "extra/grammar/elementary/unit_3_i_am_doing_present_continuous/unit_3_i_am_doing_present_continuous.html",

  vocabulary: "extra/vocabulary/vocabulary.html",
  false_cognates: "extra/vocabulary/(false)_cognates/(false)_cognates.html",

  listening: "extra/listening/listening.html",
  reading: "extra/reading/reading.html",
  speaking: "extra/speaking/speaking.html",
  pronunciation: "extra/pronunciation/pronunciation.html",
  business: "extra/business/business.html",
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
