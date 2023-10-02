// Define a routing table or mapping object
const routes = {
  home: "home.html",
  beginner: "courses/beginner/beginner.html",
  elementary: "courses/elementary/elementary.html",
  pre_intermediate: "public/courses/pre-intermediate/pre-intermediate.html",
  intermediate: "courses/intermediate/intermediate.html",
  upper_intermediate: "courses/upper-intermediate/upper-intermediate.html",
  advanced: "courses/advanced/advanced.html",

  // BEGINEER
  beginner_class_2_classwork_1a_a_cappuccino_please:
    "courses/beginner/class_2/classwork_1a_a_cappuccino_please.html",
  beginner_class_3: "",
  beginner_class_4: "",
  beginner_class_5: "",
  beginner_class_6: "",
  beginner_class_7: "",
  beginner_class_8: "",
  beginner_class_9: "",
  beginner_class_10: "",
  beginner_class_11: "",
  beginner_class_12: "",
  beginner_class_13: "",
  beginner_class_14: "",
  beginner_class_15: "",
  beginner_class_16: "",
  beginner_class_17: "",
  beginner_class_18: "",
  beginner_class_19_classwork_5_6_review_quiz:
    "courses/beginner/class_19/classwork_5_6_review_quiz.html",
  beginner_class_20: "",
  beginner_class_21: "",
  beginner_class_22: "",
  beginner_class_23: "",
  beginner_class_24: "",
  beginner_class_25: "",
  beginner_class_26: "",
  beginner_class_27: "",
  beginner_class_28: "",
  beginner_class_29: "",
  beginner_class_30: "",
  beginner_class_31: "",
  beginner_class_32: "",
  beginner_class_33: "",
  beginner_class_34: "",
  beginner_class_35: "",
  beginner_class_36: "",
  beginner_class_37: "",

  // GRAMMAR-ELEMENTARY
  grammar: "extra/grammar/grammar.html",
  grammar_elementary: "extra/grammar/elementary/elementary.html",
  grammar_elementary_unit_1_am_is_are:
    "extra/grammar/elementary/unit_1_am_is_are/unit_1_am_is_are.html",
  grammar_elementary_unit_2_am_is_are_questions:
    "extra/grammar/elementary/unit_2_am_is_are_questions/unit_2_am_is_are_questions.html",
  grammar_elementary_unit_3_i_am_doing_present_continuous:
    "extra/grammar/elementary/unit_3_i_am_doing_present_continuous/unit_3_i_am_doing_present_continuous.html",
  grammar_elementary_unit_4_are_you_doing_present_continuous_questions:
    "extra/grammar/elementary/unit_4_are_you_doing_present_continuous_questions/unit_4_are_you_doing_present_continuous_questions.html",
  grammar_elementary_unit_5_i_do_work_like_etc_simple_present:
    "extra/grammar/elementary/unit_5_i_do_work_like_etc_simple_present/unit_5_i_do_work_like_etc_simple_present.html",
  grammar_elementary_unit_6_i_dont_simple_present_negative:
    "extra/grammar/elementary/unit_6_i_dont_simple_present_negative/unit_6_i_dont_simple_present_negative.html",

  vocabulary: "extra/vocabulary/vocabulary.html",
  essential_words: "extra/vocabulary/essential_words/essential_words.html",
  false_cognates: "extra/vocabulary/(false)_cognates/(false)_cognates.html",

  listening: "extra/listening/listening.html",
  penguin_kids: "extra/listening/penguin_kids/penguin_kids.html",
  penguin_kids_level_1_dumbo: "extra/listening/penguin_kids/dumbo/dumbo.html",

  reading: "extra/reading/reading.html",
  speaking: "extra/speaking/speaking.html",
  pronunciation: "extra/pronunciation/pronunciation.html",
  business: "extra/business/business.html",
  temp: "/exercises-templates/exercises-templates.html",
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
