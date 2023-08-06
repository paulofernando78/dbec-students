// EXERCISE 3.1
        // FILL-IN-THE-BLANKS 1
        function checkFill1() {
            var answers = {
                blank1_fill1: ["She is eating", "She's eating", "She is eating / She's eating"],
                blank2_fill1: ["is waiting", "'s waiting", "is waiting / 's waiting"],
                blank3_fill1: ["are playing", "'re playing", "are playing / 're playing"],
                blank4_fill1: ["He is lying", "He's lying", "He is lying / He's lying"],
                blank5_fill1: ["They are having", "They're having", "They are having / They're having"],
                blank6_fill1: ["She is sitting", "She's sitting", "She is sitting / She's sitting"],
            };

            var fill1Icon1 = document.getElementById("fill1Icon1");
            var fill1Icon2 = document.getElementById("fill1Icon2");
            var fill1Icon3 = document.getElementById("fill1Icon3");
            var fill1Icon4 = document.getElementById("fill1Icon4");
            var fill1Icon5 = document.getElementById("fill1Icon5");
            var fill1Icon6 = document.getElementById("fill1Icon6");
            var result = document.getElementById("resultFill1");

            var isCorrect1 =
                answers.blank1_fill1.includes(document.getElementById("blank1_fill1").value.trim());
            var isCorrect2 =
                answers.blank2_fill1.includes(document.getElementById("blank2_fill1").value.trim());
            var isCorrect3 =
                answers.blank3_fill1.includes(document.getElementById("blank3_fill1").value.trim());
            var isCorrect4 =
                answers.blank4_fill1.includes(document.getElementById("blank4_fill1").value.trim());
            var isCorrect5 =
                answers.blank5_fill1.includes(document.getElementById("blank5_fill1").value.trim());
            var isCorrect6 =
                answers.blank6_fill1.includes(document.getElementById("blank6_fill1").value.trim());

            fill1Icon1.className = isCorrect1
                ? "fill1-icon correct"
                : "fill1-icon incorrect";
            fill1Icon2.className = isCorrect2
                ? "fill1-icon correct"
                : "fill1-icon incorrect";
            fill1Icon3.className = isCorrect3
                ? "fill1-icon correct"
                : "fill1-icon incorrect";
            fill1Icon4.className = isCorrect4
                ? "fill1-icon correct"
                : "fill1-icon incorrect";
            fill1Icon5.className = isCorrect5
                ? "fill1-icon correct"
                : "fill1-icon incorrect";
            fill1Icon6.className = isCorrect6
                ? "fill1-icon correct"
                : "fill1-icon incorrect";

            fill1Icon1.style.display = "inline-block";
            fill1Icon2.style.display = "inline-block";
            fill1Icon3.style.display = "inline-block";
            fill1Icon4.style.display = "inline-block";
            fill1Icon5.style.display = "inline-block";
            fill1Icon6.style.display = "inline-block";

            var correctCount = [
                isCorrect1,
                isCorrect2,
                isCorrect3,
                isCorrect4,
                isCorrect5,
                isCorrect6,
            ].filter(function (x) {
                return x === true;
            }).length;

            result.innerHTML =
                "You got " +
                correctCount +
                " out of " +
                Object.keys(answers).length +
                " correct.";
        }
        function showFill1() {
            var answerElements = document.getElementsByClassName("fill1_answer");

            for (var i = 0; i < answerElements.length; i++) {
                var answerElement = answerElements[i];
                answerElement.style.display = "block"; // Show the answers
            }
        }
        function resetFill1() {
            var fill1Inputs = document.getElementsByClassName("fill1");
            var fill1Icons = document.getElementsByClassName("fill1-icon");
            var result = document.getElementById("resultFill1");

            for (var i = 0; i < fill1Inputs.length; i++) {
                fill1Inputs[i].value = "";
            }

            for (var j = 0; j < fill1Icons.length; j++) {
                fill1Icons[j].className = "fill1-icon";
                fill1Icons[j].style.display = "none";
            }

            result.innerHTML = "";

            var answerElements = document.getElementsByClassName("fill1_answer");

            for (var k = 0; k < answerElements.length; k++) {
                var answerElement = answerElements[k];
                answerElement.style.display = "none"; // Hide the answers
            }
        }

        // EXERCISE 3.2    
        // FILL-IN-THE-BLANKS 2
        function checkFill2() {
            var answers = {
                blank1_fill2: ["am working", "'m working", "am working / 'm working"],
                blank2_fill2: ["is cooking", "'s cooking", "is cooking / 's cooking"],
                blank3_fill2: ["are standing", "'re standing", "are standing / 're standing"],
                blank4_fill2: ["is swimming", "'s swimming", "is swimming / 's swimming"],
                blank5_fill2: ["are staying", "'re staying", "are staying / 're staying"],
                blank6_fill2: ["is taking", "'s taking", "is taking / 's taking", "is having", "'s having"],
                blank7_fill2: ["are building", "'re building", "are building / 're building"],
                blank8_fill2: ["am leaving", "'m leaving", "am leaving / 'm leaving"],
            };

            var fill2Icon1 = document.getElementById("fill2Icon1");
            var fill2Icon2 = document.getElementById("fill2Icon2");
            var fill2Icon3 = document.getElementById("fill2Icon3");
            var fill2Icon4 = document.getElementById("fill2Icon4");
            var fill2Icon5 = document.getElementById("fill2Icon5");
            var fill2Icon6 = document.getElementById("fill2Icon6");
            var fill2Icon7 = document.getElementById("fill2Icon7");
            var fill2Icon8 = document.getElementById("fill2Icon8");
            var result = document.getElementById("resultFill2");

            var isCorrect1 =
                answers.blank1_fill2.includes(document.getElementById("blank1_fill2").value.trim());
            var isCorrect2 =
                answers.blank2_fill2.includes(document.getElementById("blank2_fill2").value.trim());
            var isCorrect3 =
                answers.blank3_fill2.includes(document.getElementById("blank3_fill2").value.trim());
            var isCorrect4 =
                answers.blank4_fill2.includes(document.getElementById("blank4_fill2").value.trim());
            var isCorrect5 =
                answers.blank5_fill2.includes(document.getElementById("blank5_fill2").value.trim());
            var isCorrect6 =
                answers.blank6_fill2.includes(document.getElementById("blank6_fill2").value.trim());
            var isCorrect7 =
                answers.blank7_fill2.includes(document.getElementById("blank7_fill2").value.trim());
            var isCorrect8 =
                answers.blank8_fill2.includes(document.getElementById("blank8_fill2").value.trim());

            fill2Icon1.className = isCorrect1
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon2.className = isCorrect2
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon3.className = isCorrect3
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon4.className = isCorrect4
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon5.className = isCorrect5
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon6.className = isCorrect6
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon7.className = isCorrect7
                ? "fill2-icon correct"
                : "fill2-icon incorrect";
            fill2Icon8.className = isCorrect8
                ? "fill2-icon correct"
                : "fill2-icon incorrect";

            fill2Icon1.style.display = "inline-block";
            fill2Icon2.style.display = "inline-block";
            fill2Icon3.style.display = "inline-block";
            fill2Icon4.style.display = "inline-block";
            fill2Icon5.style.display = "inline-block";
            fill2Icon6.style.display = "inline-block";
            fill2Icon7.style.display = "inline-block";
            fill2Icon8.style.display = "inline-block";

            var correctCount = [
                isCorrect1,
                isCorrect2,
                isCorrect3,
                isCorrect4,
                isCorrect5,
                isCorrect6,
                isCorrect7,
                isCorrect8,
            ].filter(function (x) {
                return x === true;
            }).length;

            result.innerHTML =
                "You got " +
                correctCount +
                " out of " +
                Object.keys(answers).length +
                " correct.";
        }
        function showFill2() {
            var answerElements = document.getElementsByClassName("fill2_answer");

            for (var i = 0; i < answerElements.length; i++) {
                var answerElement = answerElements[i];
                answerElement.style.display = "block"; // Show the answers
            }
        }
        function resetFill2() {
            var fill2Inputs = document.getElementsByClassName("fill2");
            var fill2Icons = document.getElementsByClassName("fill2-icon");
            var result = document.getElementById("resultFill2");

            for (var i = 0; i < fill2Inputs.length; i++) {
                fill2Inputs[i].value = "";
            }

            for (var j = 0; j < fill2Icons.length; j++) {
                fill2Icons[j].className = "fill2-icon";
                fill2Icons[j].style.display = "none";
            }

            result.innerHTML = "";

            var answerElements = document.getElementsByClassName("fill2_answer");

            for (var k = 0; k < answerElements.length; k++) {
                var answerElement = answerElements[k];
                answerElement.style.display = "none"; // Hide the answers
            }
        }

        // EXERCISE 3.3
        // FILL-IN-THE-BLANKS 3
        function checkFill3() {
            var answers = {
                blank1_fill3: ["She is not having dinner.", "She's not having dinner.", "She isn't having dinner."],
                blank2_fill3: ["She is watching TV.", "She's watching TV."],
                blank3_fill3: ["She is sitting on the floor.", "She's sitting on the floor."],
                blank4_fill3: ["She is not reading a book.", "She's not reading a book.", "She isn't reading a book."],
                blank5_fill3: ["She is not playing the piano.", "She's not playing the piano.", "She isn't playing the paino.",],
                blank6_fill3: ["She is laughing.", "She's laughing."],
                blank7_fill3: ["She is wearing a hat.", "She's wearing a hat."],
                blank8_fill3: ["She is not drinking coffee.", "She's not drinking coffee.", "She isn't drinking coffee."],
            };

            var fill3Icon1 = document.getElementById("fill3Icon1");
            var fill3Icon2 = document.getElementById("fill3Icon2");
            var fill3Icon3 = document.getElementById("fill3Icon3");
            var fill3Icon4 = document.getElementById("fill3Icon4");
            var fill3Icon5 = document.getElementById("fill3Icon5");
            var fill3Icon6 = document.getElementById("fill3Icon6");
            var fill3Icon7 = document.getElementById("fill3Icon7");
            var fill3Icon8 = document.getElementById("fill3Icon8");
            var result = document.getElementById("resultFill3");

            var isCorrect1 =
                answers.blank1_fill3.includes(document.getElementById("blank1_fill3").value.trim());
            var isCorrect2 =
                answers.blank2_fill3.includes(document.getElementById("blank2_fill3").value.trim());
            var isCorrect3 =
                answers.blank3_fill3.includes(document.getElementById("blank3_fill3").value.trim());
            var isCorrect4 =
                answers.blank4_fill3.includes(document.getElementById("blank4_fill3").value.trim());
            var isCorrect5 =
                answers.blank5_fill3.includes(document.getElementById("blank5_fill3").value.trim());
            var isCorrect6 =
                answers.blank6_fill3.includes(document.getElementById("blank6_fill3").value.trim());
            var isCorrect7 =
                answers.blank7_fill3.includes(document.getElementById("blank7_fill3").value.trim());
            var isCorrect8 =
                answers.blank8_fill3.includes(document.getElementById("blank8_fill3").value.trim());

            fill3Icon1.className = isCorrect1
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon2.className = isCorrect2
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon3.className = isCorrect3
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon4.className = isCorrect4
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon5.className = isCorrect5
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon6.className = isCorrect6
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon7.className = isCorrect7
                ? "fill3-icon correct"
                : "fill3-icon incorrect";
            fill3Icon8.className = isCorrect8
                ? "fill3-icon correct"
                : "fill3-icon incorrect";

            fill3Icon1.style.display = "inline-block";
            fill3Icon2.style.display = "inline-block";
            fill3Icon3.style.display = "inline-block";
            fill3Icon4.style.display = "inline-block";
            fill3Icon5.style.display = "inline-block";
            fill3Icon6.style.display = "inline-block";
            fill3Icon7.style.display = "inline-block";
            fill3Icon8.style.display = "inline-block";

            var correctCount = [
                isCorrect1,
                isCorrect2,
                isCorrect3,
                isCorrect4,
                isCorrect5,
                isCorrect6,
                isCorrect7,
                isCorrect8,
            ].filter(function (x) {
                return x === true;
            }).length;

            result.innerHTML =
                "You got " +
                correctCount +
                " out of " +
                Object.keys(answers).length +
                " correct.";
        }
        function showFill3() {
            var answerElements = document.getElementsByClassName("fill3_answer");

            for (var i = 0; i < answerElements.length; i++) {
                var answerElement = answerElements[i];
                answerElement.style.display = "block"; // Show the answers
            }
        }
        function resetFill3() {
            var fill3Inputs = document.getElementsByClassName("fill3");
            var fill3Icons = document.getElementsByClassName("fill3-icon");
            var result = document.getElementById("resultFill3");

            for (var i = 0; i < fill3Inputs.length; i++) {
                fill3Inputs[i].value = "";
            }

            for (var j = 0; j < fill3Icons.length; j++) {
                fill3Icons[j].className = "fill3-icon";
                fill3Icons[j].style.display = "none";
            }

            result.innerHTML = "";

            var answerElements = document.getElementsByClassName("fill3_answer");

            for (var k = 0; k < answerElements.length; k++) {
                var answerElement = answerElements[k];
                answerElement.style.display = "none"; // Hide the answers
            }
        }