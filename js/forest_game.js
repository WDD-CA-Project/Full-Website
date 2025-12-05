//Questions information
// Interaction developed working with ChatGPT for the correct implementation and fixing errors. 


//An array with all the information of the questions
let steps = [
	//Question 1
	{
		title: "What is deforestation?",
		text: "Forests are shrinking fast. Pick the closest number.",
		options: [
			{ text: "Trees losing their leaves naturally", correct: false, value: 0 },
			{ text: "Removing forests and converting the land to another use", correct: true, value: 1 },
			{ text: "Forests growing after rainfall", correct: false, value: 0 }
		],
		feedbackCorrect: "Correct. Deforestation means removing forests and changing how the land is used.",
		feedbackWrong: "No. Deforestation is when forests are removed and the land is converted to another use."
	},
	
	//Question 2
	{
		title: "Main cause of global forest loss",
		text: "Which human activity causes most deforestation worldwide?",
		options: [
			{ text: "Agriculture", correct: true, value: 1 },
			{ text: "Tourism", correct: false, value: 0 },
			{ text: "Public transport", correct: false, value: 0}
		],
		feedbackCorrect: "Correct. Agriculture is the main cause of global forest loss.",
		feedbackWrong: "No. Agriculture is the activity that causes most deforestation worldwide."
	},

	//Question 3
	{
		title: "Forest degradation",
		text: "What is forest degradation?",
		options: [
			{ text: "When new trees are planted", correct: false, value: 0 },
			{ text: "When a forest grows faster than normal", correct: false, value: 0 },
			{ text: "When a forest becomes damaged but is not completely removed", correct: true, value: 1 }
		],
		feedbackCorrect: "Exactly. Degradation means the forest remains, but its quality declines.",
		feedbackWrong: "Not quite. Forest degradation happens when a forest is damaged but not completely removed."
	},


	//Question 4
	{
		title: "Forests and climate",
		text: "How do forests help the climate?",
		options: [
			{ text: "They absorb carbon dioxide from the atmosphere", correct: true, value: 1 },
			{ text: "They create fossil fuels naturally", correct: false, value: 0 },
			{ text: "They stop all storms from forming", correct: false, value: 0 }
		],
		feedbackCorrect: "Yes. Forests store carbon and help regulate the climate.",
		feedbackWrong: "Not right. Forests help the climate by absorbing carbon dioxide."
	},

	//Question 5
	{
		title: "Forest importance",
		text: "Why are forests essential for life on Earth?",
		options: [
			{ text: "They stop volcanoes from erupting", correct: false, value: 0 },
			{ text: "They produce electricity naturally", correct: false, value: 0 },
			{ text: "They support biodiversity and help regulate the climate", correct: true, value: 1 }
		],
		feedbackCorrect: "Right! Forests protect biodiversity and play a key role in stabilizing the climate.",
		feedbackWrong: "No. Forests are essential because they support biodiversity and regulate the climate."
	}
  
];

let currentStep = 0;
let answered = false;
let score = 0; // to make the result at the end, based on this

//Getting the elements from html
let stepNumber = document.getElementById("stepNumber");
let stepTitle  = document.getElementById("stepTitle");
let stepText   = document.getElementById("stepText");
let stepOptions = document.getElementById("stepOptions");
let feedbackText = document.getElementById("feedbackText");
let nextStepBtn  = document.getElementById("nextStepBtn");
let dots = document.querySelectorAll(".step-progress .dot");

function renderStep() {

	let step = steps[currentStep];

	stepNumber.textContent    = currentStep + 1;
	stepTitle.textContent     = step.title;
	stepText.textContent      = step.text;
	feedbackText.textContent  = "";
	nextStepBtn.textContent   = currentStep === steps.length - 1 ? "Finish" : "Next";
	nextStepBtn.disabled      = true;
	answered                  = false;

	// Updating dots
	dots.forEach((dot, i) => {
	dot.classList.toggle("active", i === currentStep);
	});

	// Build options
	stepOptions.innerHTML = "";
	step.options.forEach(opt => {
		let btn = document.createElement("button");
			btn.className   = "option-btn";
			btn.textContent = opt.text;

			// send the object with all the information, so the next funtion can read if the answer was correct or not.
			btn.addEventListener("click", () => handleOptionClick(btn, opt));
			stepOptions.appendChild(btn);
		});
}


function handleOptionClick(btn, opt) {
	if (answered) return;
	answered = true;

	// Score to get a result at the end
	if (opt.correct) {
	score += opt.value;   // value is 1 or 0 
}

// disable buttons and and indicated correct or not.
document.querySelectorAll(".option-btn").forEach(b => {
b.disabled = true;
if (b === btn) {
	b.classList.add(opt.correct ? "correct" : "wrong");
}
});

let step = steps[currentStep];
	feedbackText.textContent = opt.correct ? step.feedbackCorrect : step.feedbackWrong;

	nextStepBtn.disabled = false;
}


// Check if the questionarie is finished and show the end of the game
nextStepBtn.addEventListener("click", () => {

	if (currentStep < steps.length - 1) {
		currentStep++;
		renderStep();
	} else {
		// End of the game
		showResult();
	}
});

//Running the fuction declared above
renderStep();


//Final step once the quiz is done
function showResult() {
	const quizQuestions = document.getElementById("quizQuestions"); 
	const quizResult = document.getElementById("quizResult");
	const resultTitle = document.getElementById("resultTitle");
	const resultText = document.getElementById("resultText");

	// hide quiz 
	if (quizQuestions) {
		quizQuestions.style.display = "none";
	}

	// and show the result for the quiz 
	quizResult.style.display = "block";

	// depending on the score: 
	let title, text;

	if (score <= 2) {
		title = "Not that good… ";
		text  = "Your choices are still putting a lot of pressure on forests and the climate. Small changes can make a big difference: reduce meat consumption, choose certified wood and paper, and support reforestation projects.";
	} else if (score <= 4) {
		title = "Good";
		text  = "You’re already making some good choices for forests and the climate, but there’s still room to improve. Try to reduce waste, choose sustainable products more often, and share what you learn with others.";
	} else { // score === 5
		title = "Fantastic!";
		text  = "Your habits actively help protect forests and reduce global warming. Keep going, talk to others about these actions, and support organisations that protect forests and restore degraded land.";
	}

	resultTitle.textContent = title;
	resultText.textContent  = text;
}
