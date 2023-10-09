// Define a routing table or mapping object
const routes = {
  home: "../pages/home.html",
  beginner: "../pages/courses/1_beginner/beginner.html",
  elementary: "../pages/courses/2_elementary/elementary.html",
  pre_intermediate: "../pages/courses/3_pre_intermediate/pre_intermediate.html",
  intermediate: "../pages/courses/4_intermediate/intermediate.html",
  upper_intermediate:
    "../pages/courses/5_upper_intermediate/upper_intermediate.html",
  advanced: "../pages/courses/6_advanced/advanced.html",

  // BEGINNER
  beginner_class_2_flipped_classroom_1a_a_cappuccino_please:
    "../pages/courses/1_beginner/class_2/flipped_classroom_1a_a_cappuccino_please.html",
  beginner_class_2_classwork_1a_a_cappuccino_please:
    "../pages/courses/1_beginner/class_2/classwork_1a_a_cappuccino_please.html",
  beginner_class_2_homework_1a_a_cappuccino_please:
    "../pages/courses/1_beginner/class_2/homework_1a_a_cappuccino_please.html",

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
    "../pages/courses/beginner/class_19/classwork_5_6_review_quiz.html",
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
  grammar: "../pages/extra/grammar/grammar.html",
  grammar_elementary: "../pages/extra/grammar/elementary/elementary.html",
  grammar_elementary_unit_1_am_is_are:
    "../pages/extra/grammar/elementary/unit_1_am_is_are/unit_1_am_is_are.html",
  grammar_elementary_unit_2_am_is_are_questions:
    "../pages/extra/grammar/elementary/unit_2_am_is_are_questions/unit_2_am_is_are_questions.html",
  grammar_elementary_unit_3_i_am_doing_present_continuous:
    "../pages/extra/grammar/elementary/unit_3_i_am_doing_present_continuous/unit_3_i_am_doing_present_continuous.html",
  grammar_elementary_unit_4_are_you_doing_present_continuous_questions:
    "../pages/extra/grammar/elementary/unit_4_are_you_doing_present_continuous_questions/unit_4_are_you_doing_present_continuous_questions.html",
  grammar_elementary_unit_5_i_do_work_like_etc_simple_present:
    "../pages/extra/grammar/elementary/unit_5_i_do_work_like_etc_simple_present/unit_5_i_do_work_like_etc_simple_present.html",
  grammar_elementary_unit_6_i_dont_simple_present_negative:
    "../pages/extra/grammar/elementary/unit_6_i_dont_simple_present_negative/unit_6_i_dont_simple_present_negative.html",

  vocabulary: "../pages/extra/vocabulary/vocabulary.html",
  essential_words:
    "../pages/extra/vocabulary/essential_words/essential_words.html",
  false_cognates:
    "../pages/extra/vocabulary/(false)_cognates/(false)_cognates.html",
  homophone_homograph_homonym:
    "../pages/extra/vocabulary/homophone_homograph_homonym/homophone_homograph_homonym.html",

  // LISTENING
  listening: "../pages/extra/listening/listening.html",

  // LISTENING PENGUIN KIDS
  penguin_kids: "../pages/extra/listening/penguin_kids/penguin_kids.html",
  penguin_kids_level_1_dumbo:
    "../pages/extra/listening/penguin_kids/dumbo/dumbo.html",

  // LISTENING PENGUIN READERS
  penguin_readers:
    "../pages/extra/listening/penguin-readers/penguin-readers.html",
  penguin_readers_flying_home:
    "../pages/extra/listening/penguin-readers/easystarts/flying-home/flying-home.html",
  penguin_readers_newspaper_chase:
    "../pages/extra/listening/penguin-readers/easystarts/newspaper-chase/newspaper-chase.html",
  penguin_readers_new_zealand_adventure:
    "../pages/extra/listening/penguin-readers/easystarts/new-zealand-adventure/new-zealand-adventure.html",
  penguin_readers_a_new_zealand_adventure:
    "../pages/extra/listening/penguin-readers/easystarts/a-new-zealand-adventure/a-new-zealand-adventure.html",
  penguin_readers_marcel_and_the_white_star:
    "../pages/extra/listening/penguin-readers/easystarts/marcel-and-the-white-star/marcel-and-the-white-star.html",
  penguin_readers_simon_and_the_spy:
    "../pages/extra/listening/penguin-readers/easystarts/simon-and-the-spy/simon-and-the-spy.html",
  penguin_readers_the_last_photo:
    "../pages/extra/listening/penguin-readers/easystarts/the-last-photo/the-last-photo.html",
  penguin_readers_the_leopard_and_the_lighthouse:
    "../pages/extra/listening/penguin-readers/easystarts/the-leopard-and-the-lighthouse/the-leopard-and-the-lighthouse.html",
  penguin_readers_the_pearl_girl:
    "../pages/extra/listening/penguin-readers/easystarts/the-pearl-girl/the-pearl-girl.html",
  penguin_readers_tinkers_island:
    "../pages/extra/listening/penguin-readers/easystarts/xxx/xxx.html",
  penguin_readers_the_fireboy:
    "../pages/extra/listening/penguin-readers/easystarts/the-fireboy/the-fireboy.html",
  penguin_readers_who_wants_to_be_a_star:
    "../pages/extra/listening/penguin-readers/easystarts/who-wants-to-be-a-star/who-wants-to-be-a-star.html",

  reading: "../pages/extra/reading/reading.html",
  speaking: "../pages/extra/speaking/speaking.html",
  pronunciation: "../pages/extra/pronunciation/pronunciation.html",
  pronunciation_letter_u: "../pages/extra/pronunciation/letter_u/letter_u.html",

  expressions: "../pages/extra/expressions/expressions.html",

  business: "../pages/extra/business/business.html",

  temp: "../pages/_exercises_templates/exercises_templates.html",
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
