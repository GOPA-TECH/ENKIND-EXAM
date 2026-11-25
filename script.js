// CODING-EXAM-2 — Updated question bank
// Replace the placeholder below with your Google Apps Script Web App URL.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzP3R-cUteysC6cHmOdRX1ibsqRof4z3XQ-_9x7ST1XbgYZDNIJywBNnR3FEFpQKhoy/exec";

// Correct-answer indexes: 0 = A, 1 = B, 2 = C, 3 = D.
function q(question, options, answer) {
  return { question, options, answer };
}

const jss1Questions = [
  q("What is Scratch?", ["A character or object in a project", "A computer keyboard", "A printer", "A folder"], 0),
  q("What is the Stage in Scratch?", ["Where the project is displayed", "Where the computer is repaired", "Where documents are printed", "Where passwords are stored"], 0),
  q("What does the Move 10 Steps block do?", ["Moves a sprite 10 steps forward", "Turns a sprite 10 degrees", "Stops a sprite", "Deletes a sprite"], 0),
  q("Which category contains the Move 10 Steps block?", ["Looks", "Motion", "Sound", "Events"], 1),
  q("What does the Turn 15 Degrees block do?", ["Moves the sprite 15 steps", "Turns the sprite by 15 degrees", "Changes the sprite's colour", "Makes the sprite disappear"], 1),
  q("Which block makes a sprite move to a random location on the Stage?", ["Move 10 Steps", "Next Costume", "Go to Random Position", "Repeat 10"], 2),
  q("What happens when the Go to Random Position block is used?", ["The sprite moves to an unpredictable position on the Stage", "The sprite disappears", "The sprite stops moving forever", "The sprite changes its costume"], 0),
  q("Which block makes a sprite bounce when it touches the edge of the Stage?", ["Move 10 Steps", "If on Edge, Bounce", "Next Costume", "Repeat 10"], 1),
  q("What happens when a sprite touches the edge and uses the If on Edge, Bounce block?", ["It bounces and changes direction", "It disappears", "It changes its name", "It stops permanently"], 0),
  q("Which of these blocks belongs to the Motion category?", ["Next Costume", "Forever", "Move 10 Steps", "When Green Flag Clicked"], 2),
  q("What is the function of the Forever block?", ["To repeat instructions continuously", "To stop the project", "To delete a sprite", "To change the background"], 0),
  q("Which category contains the Forever block?", ["Motion", "Looks", "Control", "Events"], 2),
  q("What does the Repeat 10 block do?", ["Repeats an instruction 10 times", "Moves a sprite 10 steps", "Turns a sprite 10 degrees", "Changes a sprite's costume 10 times automatically"], 0),
  q("If a Move 10 Steps block is placed inside a Repeat 10 block, how many steps will the sprite move in total, assuming it moves without interruption?", ["10 steps", "20 steps", "100 steps", "15 steps"], 2),
  q("Which of the following blocks repeats instructions without a specified ending?", ["Repeat 10", "Forever", "Move 10 Steps", "Next Costume"], 1),
  q("What is the function of the When Green Flag Clicked block?", ["To start a script when the green flag is clicked", "To stop the computer", "To delete a sprite", "To change the sprite's size"], 0),
  q("Which category contains the When Green Flag Clicked block?", ["Motion", "Events", "Sound", "Looks"], 1),
  q("What is the function of the Next Costume block?", ["Moves the sprite forward", "Changes the sprite to its next costume", "Deletes the costume", "Stops the animation"], 1),
  q("Which Scratch category contains the Next Costume block?", ["Motion", "Control", "Looks", "Events"], 2),
  q("What is a costume in Scratch?", ["The appearance or design of a sprite", "A computer game", "A keyboard shortcut", "A sound effect"], 0),
  q("If a sprite has two different costumes and the Next Costume block is used repeatedly, what will happen?", ["The sprite will switch between its available costumes", "The sprite will disappear permanently", "The Stage will close", "The sprite will stop responding"], 0),
  q("Which of the following combinations can make a sprite move continuously and bounce at the edge?", ["When Green Flag Clicked → Forever → Move 10 Steps → If on Edge, Bounce", "When Green Flag Clicked → Next Costume", "When Green Flag Clicked → Repeat 10 → Stop All", "When Green Flag Clicked → Go to Random Position"], 0)
];

const jss23Questions = [
  q("Which programming application is commonly used to create the Apple Falling Game?", ["Microsoft Word", "Scratch", "Microsoft Excel", "CorelDRAW"], 1),
  q("In the Apple Falling Game, what is the main function of the apple sprite?", ["To catch the bowl", "To fall from the top of the screen", "To display messages", "To stop the game"], 1),
  q("What is the main function of the bowl in the game?", ["To catch the falling apple", "To create music", "To change the background", "To display instructions"], 0),
  q("Which Scratch block is used to make the apple move downwards?", ["Change y by 10", "Change y by -10", "Change x by 10", "Say Hello"], 1),
  q("In Scratch, which coordinate controls vertical movement?", ["X", "Y", "Z", "W"], 1),
  q("Which coordinate controls horizontal movement in Scratch?", ["X", "Y", "Z", "A"], 0),
  q("What happens when the bowl moves to the right?", ["Its X position increases", "Its X position decreases", "Its Y position increases", "Its Y position decreases"], 0),
  q("Which keyboard keys can be programmed to move the bowl left and right?", ["Enter and Space", "Left Arrow and Right Arrow", "Caps Lock and Shift", "Ctrl and Alt"], 1),
  q("Which Scratch block can be used to detect whether a key is pressed?", ["Say", "Move 10 steps", "Key pressed?", "Hide"], 2),
  q("What does the Forever block do in Scratch?", ["Runs a set of instructions repeatedly", "Stops the game permanently", "Deletes a sprite", "Changes the backdrop once"], 0),
  q("Which block is used to pause a sprite's actions for a specified time?", ["Move", "Wait", "Hide", "Broadcast"], 1),
  q("What does the touching block help a sprite to do?", ["Detect contact with another object", "Change its name", "Delete the stage", "Record a sound"], 0),
  q("What should happen when the apple touches the bowl?", ["The game should recognise that the apple has been caught", "The computer should shut down", "The bowl should disappear permanently", "The backdrop should be deleted"], 0),
  q("Which Scratch block can be used to move an apple back to the top after it falls?", ["Go to x: y:", "Say Hello", "Stop all", "Play sound"], 0),
  q("What is the purpose of a score variable in the Apple Falling Game?", ["To count successful catches", "To change the computer's volume", "To control the keyboard", "To change the sprite's name"], 0),
  q("Which Scratch category contains the Forever and Repeat blocks?", ["Motion", "Looks", "Control", "Sound"], 2),
  q("What is a sprite in Scratch?", ["A character or object used in a project", "A computer virus", "A type of keyboard", "A web browser"], 0),
  q("What is the Stage in Scratch?", ["Where the game or project is displayed", "Where the keyboard is stored", "Where HTML is written", "Where files are deleted"], 0),
  q("Which block category contains the Change X by and Change Y by blocks?", ["Events", "Motion", "Sound", "Sensing"], 1),
  q("What is the purpose of a backdrop in Scratch?", ["To provide the background of the game", "To move the apple", "To catch falling objects", "To increase the score automatically"], 0),
  q("What is a broadcast message in Scratch?", ["A message sent to trigger actions in other sprites", "A message sent through WhatsApp", "A message used to shut down a computer", "A message used to delete a sprite"], 0),
  q("Which Scratch block is used to send a broadcast message?", ["When green flag clicked", "Broadcast [message1]", "Say Hello", "Wait 1 second"], 1),
  q("Which block is used to receive a broadcast message?", ["When I receive [message1]", "When green flag clicked", "Move 10 steps", "Change X by 10"], 0),
  q("Which block is used to make a sprite display a message?", ["Move 10 steps", "Say [Hello!]", "Broadcast [message1]", "Hide"], 1),
  q('What does the block "Say Hello! for 5 seconds" do?', ["Displays Hello! for five seconds", "Displays Hello! permanently", "Hides the sprite for five seconds", "Stops the entire project for five seconds"], 0),
  q("Which block starts a Scratch project when clicked?", ["Stop", "When green flag clicked", "When I receive message1", "Say Hello"], 1),
  q('If Sprite A broadcasts message1, what happens to Sprite B if it has a "When I receive message1" block?', ["Sprite B responds by executing the instructions attached to that block", "Sprite B is deleted", "Sprite B changes its name", "Nothing can happen"], 0),
  q("Which of these is the correct block for making a sprite respond to message1?", ["When I receive [message1]", "Broadcast [message1]", "Move 10 steps", "Change Y by -10"], 0),
  q("What is the purpose of the Wait 5 seconds block?", ["To delay the next instruction for five seconds", "To delete the sprite", "To broadcast a message", "To move the sprite five steps"], 0),
  q("What is the difference between Broadcast and When I Receive?", ["Broadcast sends a message, while When I Receive responds to it", "Both blocks delete sprites", "Broadcast moves sprites, while When I Receive hides them", "Both blocks are used only for movement"], 0),
  q("Which of the following is an example of a conversation between two sprites?", ['One sprite says "Hello" and another responds "How are you?"', "Both sprites disappear", "One sprite moves 10 steps", "The backdrop changes colour"], 0),
  q("If a sprite receives message1, which block can make it reply for five seconds?", ["Say [Hello] for 5 seconds", "Move 5 steps", "Hide", "Change X by 5"], 0),
  q("What happens if a sprite broadcasts message1 but no sprite is programmed to receive it?", ["The computer crashes", "Nothing responds to the message", "All sprites disappear", "The project closes"], 1),
  q("Which Scratch block allows a sprite to start responding when it receives a particular message?", ["When I receive [message1]", "When green flag clicked", "Repeat 10", "Change size by 10"], 0),
  q('Study these instructions: When green flag clicked → Broadcast [message1]; When I receive [message1] → Say [Welcome!] for 5 seconds. What will happen when the green flag is clicked?', ["The sprite will disappear", 'The sprite will display "Welcome!" for five seconds', "The sprite will move backwards", "The game will stop immediately"], 1)
];

const ss1Questions = [
  q("What is the full meaning of HTML?", ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Markup Language"], 1),
  q("What is HTML used for?", ["Creating the structure of web pages", "Editing pictures", "Playing music only", "Designing computer hardware"], 0),
  q("HTML is classified as a ______ language.", ["Programming", "Markup", "Machine", "Database"], 1),
  q('What does the word "HyperText" refer to?', ["Text that contains links to other documents or pages", "Text written in capital letters", "Text that is always bold", "Text that cannot be edited"], 0),
  q("What is the importance of HTML in web development?", ["It provides the structure of a webpage", "It repairs computers", "It increases internet speed", "It protects computers from viruses"], 0),
  q("Which of the following is NOT an importance of HTML?", ["Organising webpage content", "Creating headings and paragraphs", "Structuring web pages", "Charging a laptop battery"], 3),
  q("Which technology is mainly responsible for structuring web content?", ["CSS", "HTML", "Photoshop", "Microsoft Excel"], 1),
  q("What does CSS mainly do in web development?", ["Structures the webpage", "Styles and decorates the webpage", "Stores passwords", "Creates computer viruses"], 1),
  q("Which of the following is a common file extension for an HTML document?", [".jpg", ".mp3", ".html", ".exe"], 2),
  q("Which application can be used to write HTML code?", ["Notepad", "Calculator", "Camera", "Music Player"], 0),
  q("Which tag indicates the beginning of an HTML document?", ["<body>", "<html>", "<head>", "<title>"], 1),
  q("Which tag contains information about the webpage, such as its title?", ["<body>", "<p>", "<head>", "<h1>"], 2),
  q("Which HTML tag is used to give a webpage a title?", ["<heading>", "<title>", "<h1>", "<name>"], 1),
  q("The title tag is placed inside which HTML tag?", ["<body>", "<html>", "<head>", "<p>"], 2),
  q("Where does the title of an HTML page usually appear?", ["At the bottom of the webpage", "On the browser tab", "Inside every paragraph", "At the centre of the webpage"], 1),
  q("Which of the following is the correct way to write a title tag?", ["<title>My Website</title>", "<head>My Website</head>", "<title=My Website>", "<h1>My Website</h1>"], 0),
  q("Which of the following represents the correct order for the beginning of an HTML document?", ["<head> <html> <title>", "<html> <head> <title>", "<title> <body> <html>", "<body> <title> <head>"], 1),
  q("Which tag contains the visible content of a webpage?", ["<head>", "<title>", "<body>", "<html>"], 2),
  q("Which of the following is a correct basic HTML document structure?", ["<html> <head> <title>My Page</title> </head> <body> Welcome </body> </html>", "<head> <html> <body> <title>My Page</title> </body> </html>", "<title> <html> <body> </html>", "<body> <head> <html> </body>"], 0),
  q("Which tag is used to close the HTML document's body section?", ["<body>", "</body>", "</html>", "<close>"], 1),
  q("What is the closing tag for <title>?", ["<title>", "<endtitle>", "</title>", "<close>"], 2),
  q("Which of these is the correct closing tag for the head section?", ["<head>", "</head>", "<closehead>", "</html>"], 1),
  q("How many heading levels are available in HTML?", ["3", "4", "6", "8"], 2),
  q("Which HTML heading tag represents the highest level heading?", ["<h6>", "<h3>", "<h1>", "<h2>"], 2),
  q("Which heading tag represents the lowest level heading?", ["<h1>", "<h2>", "<h4>", "<h6>"], 3),
  q("Which of the following is the correct way to create a first-level heading?", ["<heading1>Hello</heading1>", "<h1>Hello</h1>", "<head>Hello</head>", "<p1>Hello</p1>"], 1),
  q("Which heading is normally displayed largest by default?", ["<h1>", "<h3>", "<h5>", "<h6>"], 0),
  q("Which heading tag comes immediately after <h3> in the heading sequence?", ["<h2>", "<h5>", "<h4>", "<h6>"], 2),
  q("Which of these is NOT a valid HTML heading tag?", ["<h1>", "<h4>", "<h6>", "<h7>"], 3),
  q("What is the purpose of HTML heading tags?", ["To create passwords", "To organise titles and subtitles on a webpage", "To create dates", "To highlight images"], 1),
  q("Which HTML tag is used to create a paragraph?", ["<para>", "<text>", "<p>", "<paragraph>"], 2),
  q("What is the correct way to write a paragraph in HTML?", ["<p>This is my paragraph</p>", "<paragraph>This is my paragraph</paragraph>", "<text>This is my paragraph</text>", "<p>This is my paragraph<p>"], 0),
  q("Which tag closes an HTML paragraph?", ["<p>", "</p>", "</paragraph>", "<close>"], 1),
  q("What happens when you write two separate paragraph elements in HTML?", ["They appear as two separate paragraphs with spacing between them", "They become one heading", "They disappear", "They automatically become bold"], 0),
  q("Which of the following is the correct combination for creating a webpage title, heading and paragraph?", ["<head> <title>My School</title> </head> <body> <h1>Welcome</h1> <p>Welcome to my school.</p> </body>", "<body> <title>My School</title> <head> <h1>Welcome</h1> <p>Welcome</p> </body>", "<title>My School</title> <h1>Welcome</h1> <paragraph>Welcome</paragraph>", "<head> <h1>Welcome</h1> <p>Welcome</p> </head>"], 0)
];

const ss23Questions = [
  q("Which HTML tag is used to make text bold?", ["<i>", "<b>", "<u>", "<p>"], 1),
  q("Which HTML tag gives text strong importance?", ["<strong>", "<small>", "<big>", "<del>"], 0),
  q("Which tag is used to italicize text?", ["<u>", "<b>", "<i>", "<mark>"], 2),
  q("Which HTML tag is used to underline text?", ["<u>", "<i>", "<sup>", "<sub>"], 0),
  q("Which tag is used to highlight text?", ["<strong>", "<mark>", "<del>", "<small>"], 1),
  q("Which HTML tag is used to display subscript text?", ["<sup>", "<sub>", "<small>", "<b>"], 1),
  q("Which tag is used to display superscript text?", ["<sub>", "<mark>", "<sup>", "<del>"], 2),
  q("Which HTML tag is used to show deleted text?", ["<del>", "<ins>", "<b>", "<u>"], 0),
  q("Which HTML tag makes text bigger?", ["<small>", "<big>", "<mark>", "<sub>"], 1),
  q("Which HTML tag makes text smaller?", ["<big>", "<strong>", "<small>", "<sup>"], 2),
  q("Which of the following tags is used to represent strong importance rather than just bold appearance?", ["<b>", "<strong>", "<i>", "<u>"], 1),
  q("What will this code produce? <p>H<sub>2</sub>O</p>", ["H2O with 2 above H", "H2O with 2 below the line", "H2O in bold", "H2O underlined"], 1),
  q("What is the output of this code? <p>10<sup>2</sup></p>", ["102", "10²", "10₂", "10"], 1),
  q('Which tag would you use to display the word "SALE" with a highlight?', ["<mark>SALE</mark>", "<del>SALE</del>", "<sub>SALE</sub>", "<small>SALE</small>"], 0),
  q("Which of the following is the correct way to write bold text in HTML?", ["<bold>Hello</bold>", "<b>Hello</b>", "<strong>Hello>", "<text>Hello</text>"], 1),
  q("Which HTML tag is used to create an ordered list?", ["<ul>", "<li>", "<ol>", "<dl>"], 2),
  q("Which HTML tag is used to create an unordered list?", ["<ul>", "<ol>", "<li>", "<list>"], 0),
  q("What does OL stand for in HTML?", ["Open List", "Ordered List", "Ordinary List", "Output List"], 1),
  q("What does UL stand for in HTML?", ["Underline List", "Unique List", "Unordered List", "Upper List"], 2),
  q("Which tag is used to define each item in an HTML list?", ["<item>", "<li>", "<ol>", "<ul>"], 1),
  q("Which of these produces a numbered list?", ["<ul>", "<ol>", "<li>", "<b>"], 1),
  q("Which of the following produces a bulleted list?", ["<ol>", "<ul>", "<sub>", "<strong>"], 1),
  q("What is the correct way to create an unordered list containing Rice and Beans?", ["<ul> <li>Rice</li> <li>Beans</li> </ul>", "<ol> <li>Rice</li> <li>Beans</li> </ol>", "<ul> <p>Rice</p> <p>Beans</p> </ul>", "<li> Rice Beans </li>"], 0),
  q("What will an ordered list display by default?", ["Bullets", "Numbers", "Stars", "Circles"], 1),
  q("Which of these tags must be used inside an ordered or unordered list to create list items?", ["<p>", "<h1>", "<li>", "<br>"], 2),
  q("Which input type is used to collect ordinary text from a user?", ["number", "date", "text", "password"], 2),
  q("Which input type is used to collect numerical values?", ["text", "number", "date", "password"], 1),
  q("Which input type allows a user to select a date?", ["text", "number", "date", "password"], 2),
  q("Which input type hides the characters entered by a user?", ["text", "number", "date", "password"], 3),
  q("Which of the following is the correct syntax for a text input?", ['<input type="text">', '<input text="type">', "<text input>", '<input="text">'], 0),
  q("Which of these is the correct syntax for a number input?", ['<input type="number">', '<number type="input">', "<input number>", "<number>"], 0),
  q("Which HTML code allows a user to enter their date of birth?", ['<input type="text">', '<input type="date">', '<input type="password">', '<input type="number">'], 1),
  q("What is the purpose of the password input type?", ["To display numbers only", "To select a date", "To hide entered characters", "To highlight text"], 2),
  q('What is the output of this HTML code? <input type="number">', ["A password field", "A date picker", "A field for numerical input", "A field for ordinary text only"], 2),
  q("Which of the following is NOT an HTML input type among the topics taught?", ["text", "number", "password", "bold"], 3)
];

// Both SS and SSS class labels are supported.
const questions = {
  "JSS 1": jss1Questions,
  "JSS 2": jss23Questions,
  "JSS 3": jss23Questions,
  "SS 1": ss1Questions,
  "SS 2": ss23Questions,
  "SS 3": ss23Questions,
  "SSS 1": ss1Questions,
  "SSS 2": ss23Questions,
  "SSS 3": ss23Questions
};

let currentQuestions = [];
let examStarted = false;
let examSubmitted = false;
let timerInterval = null;
let examEndTime = null;
const EXAM_DURATION_SECONDS = 10 * 60;

function getElement(id) {
  return document.getElementById(id);
}

function showElement(element) {
  if (element) element.classList.remove("hidden");
}

function hideElement(element) {
  if (element) element.classList.add("hidden");
}

function startExam() {
  const name = getElement("studentName")?.value.trim() || "";
  const studentClass = getElement("studentClass")?.value.trim() || "";

  if (!name || !studentClass) {
    alert("Please enter your name and select your class.");
    return false;
  }

  currentQuestions = questions[studentClass];

  if (!currentQuestions || currentQuestions.length === 0) {
    alert("Questions are not available for the selected class. Please check the class selection.");
    return false;
  }

  examStarted = true;
  examSubmitted = false;

  hideElement(getElement("registration"));
  hideElement(getElement("resultSection"));
  showElement(getElement("examSection"));

  if (getElement("examTitle")) {
    getElement("examTitle").textContent = "Coding Examination";
  }

  if (getElement("studentInfo")) {
    getElement("studentInfo").textContent = `${name} — ${studentClass}`;
  }

  if (getElement("saveStatus")) {
    getElement("saveStatus").textContent = "";
  }

  displayQuestions();
  startTimer();

  return false;
}

function displayQuestions() {
  const examForm = getElement("examForm");

  if (!examForm) {
    alert('The exam form element with id="examForm" was not found in your HTML.');
    return;
  }

  examForm.innerHTML = "";

  currentQuestions.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionTitle = document.createElement("p");
    questionTitle.textContent = `${index + 1}. ${item.question}`;
    questionDiv.appendChild(questionTitle);

    item.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${index}`;
      radio.value = String(optionIndex);

      label.appendChild(radio);

      label.appendChild(
        document.createTextNode(
          ` ${String.fromCharCode(65 + optionIndex)}. ${option}`
        )
      );

      questionDiv.appendChild(label);
    });

    examForm.appendChild(questionDiv);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit Examination";

  submitButton.addEventListener("click", () => submitExam("manual"));

  examForm.appendChild(submitButton);
}

function startTimer() {
  const timerElement = getElement("timer");

  clearInterval(timerInterval);

  examEndTime = Date.now() + EXAM_DURATION_SECONDS * 1000;

  function updateTimer() {
    const secondsLeft = Math.max(
      0,
      Math.ceil((examEndTime - Date.now()) / 1000)
    );

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    if (timerElement) {
      timerElement.textContent =
        `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      submitExam("time");
    }
  }

  updateTimer();

  timerInterval = setInterval(updateTimer, 250);
}

function submitExam(reason = "manual") {
  if (!examStarted || examSubmitted) return;

  examSubmitted = true;
  examStarted = false;

  clearInterval(timerInterval);

  let score = 0;

  currentQuestions.forEach((item, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    if (selected && Number(selected.value) === item.answer) {
      score++;
    }
  });

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  const result = {
    name: getElement("studentName")?.value.trim() || "",
    studentClass: getElement("studentClass")?.value.trim() || "",
    subject: getElement("subject")?.value.trim() || "Coding",
    score: `${score * 2}/${total * 2}`,
    percentage
  };

  hideElement(getElement("examSection"));
  showElement(getElement("resultSection"));

  if (getElement("resultText")) {
    getElement("resultText").textContent =
      "Your examination has been submitted successfully.";
  }

  if (getElement("saveStatus")) {
    getElement("saveStatus").textContent =
      reason === "time"
        ? "Time is up. Your answers have been submitted."
        : reason === "tab"
          ? "Your examination was submitted because you left the exam tab."
          : "Submitting your result...";
  }

  saveResult(result);
}

function saveResult(result) {
  const saveStatus = getElement("saveStatus");

if (
  !SCRIPT_URL ||
  SCRIPT_URL === "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
) {
    if (saveStatus) {
      saveStatus.textContent =
        "Exam submitted, but the Google Apps Script link has not been added yet.";
    }
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(result)
  })
    .then(() => {
      if (saveStatus) {
        saveStatus.textContent = "Your result has been submitted.";
      }
    })
    .catch((error) => {
      console.error("Error submitting result:", error);

      if (saveStatus) {
        saveStatus.textContent =
          "Your exam was submitted, but there was a problem sending the result.";
      }
    });
}

// Automatically submit when a student switches away from the exam tab.
document.addEventListener("visibilitychange", () => {
  if (document.hidden && examStarted && !examSubmitted) {
    submitExam("tab");
  }
});

// Supports existing HTML that calls startExam() or submitExam() inline.
window.startExam = startExam;
window.submitExam = submitExam;
