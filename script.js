
// Array of all the students
const students = [
	{
	  name: "Adi Dzocaj",
	  image: "images/students/adi-dzocaj.jpg",
	},
	{
	  name: "Alexander Bergquist",
	  image: "images/students/alexander-bergquist.jpg",
	},
	{
	  name: "Alexander Kocman",
	  image: "images/students/alexander-kocman.jpg",
	},
	{
	  name: "Benjamin Benson",
	  image: "images/students/benjamin-benson.jpg",
	},
	{
	  name: "Benjamin Tsubarah",
	  image: "images/students/benjamin-tsubarah.jpg",
	},
	{
	  name: "Calle Nilsson",
	  image: "images/students/calle-nilsson.jpg",
	},
	{
	  name: "Chikage Takahashi Molander",
	  image: "images/students/chikage-takahashi-molander.jpg",
	},
	{
	  name: "Daniel Be",
	  image: "images/students/daniel-be.jpg",
	},
	{
	  name: "Daniel Carlsson",
	  image: "images/students/daniel-carlsson.jpg",
	},
	{
	  name: "Elin Ahlgren",
	  image: "images/students/elin-ahlgren.jpg",
	},
	{
	  name: "Emma Käck",
	  image: "images/students/emma-kack.jpg",
	},
	{
	  name: "Eric Ståhl",
	  image: "images/students/eric-stahl.jpg",
	},
	{
	  name: "Frans Gustavson Påsse",
	  image: "images/students/frans-gustavson-passe.jpg",
	},
	{
	  name: "Glafira Veretennikova",
	  image: "images/students/glafira-veretennikova.jpg",
	},
	{
	  name: "Gustaf Grönlund",
	  image: "images/students/gustaf-gronlund.jpg",
	},
	{
	  name: "Hanna Håkanson",
	  image: "images/students/hanna-hakanson.jpg",
	},
	{
	  name: "Heidi Sjöberg",
	  image: "images/students/heidi-sjoberg.jpg",
	},
	{
	  name: "Hugo Carzborn",
	  image: "images/students/hugo-carzborn.jpg",
	},
	{
	  name: "Jesper Kling",
	  image: "images/students/jesper-kling.jpg",
	},
	{
	  name: "Johan Ranestam",
	  image: "images/students/johan-ranestam.jpg",
	},
	{
	  name: "Johanna Bäckström",
	  image: "images/students/johanna-backstrom.jpg",
	},
	{
	  name: "Johanna Jönsson",
	  image: "images/students/johanna-jonsson.jpg",
	},
	{
	  name: "Jona Torsson",
	  image: "images/students/jona-torsson.jpg",
	},
	{
	  name: "Josefine Ahlstedt",
	  image: "images/students/josefine-ahlstedt.jpg",
	},
	{
	  name: "Julia Jespersdotter Högman",
	  image: "images/students/julia-jespersdotter-hogman.jpg",
	},
	{
	  name: "Julia Nemell",
	  image: "images/students/julia-nemell.jpg",
	},
	{
	  name: "Linus Lindberg",
	  image: "images/students/linus-lindberg.jpg",
	},
	{
	  name: "Malin Olsson",
	  image: "images/students/malin-olsson.jpg",
	},
	{
	  name: "Maria Haara-Lundhammar",
	  image: "images/students/maria-haara-lundhammar.jpg",
	},
	{
	  name: "Maria Lövgren",
	  image: "images/students/maria-lovgren.jpg",
	},
	{
	  name: "Nikola Dimitrijoski",
	  image: "images/students/nikola-dimitrijoski.jpg",
	},
	{
	  name: "Paulina Kiendys",
	  image: "images/students/paulina-kiendys.jpg",
	},
	{
	  name: "Raymond Lam",
	  image: "images/students/raymond-lam.jpg",
	},
	{
	  name: "Robin Karlsson",
	  image: "images/students/robin-karlsson.jpg",
	},
	{
	  name: "Sara Almqvist",
	  image: "images/students/sara-almqvist.jpg",
	},
	{
	  name: "Tim Nilsson",
	  image: "images/students/tim-nilsson.jpg",
	},
	{
	  name: "Tirapat Sukjit",
	  image: "images/students/tirapat-sukjit.jpg",
	},
	{
	  name: "Tobias Silfverberg",
	  image: "images/students/tobias-silfverberg.jpg",
	},
	{
	  name: "Wiktoria Dobrzewinska",
	  image: "images/students/wiktoria-dobrzewinska.jpg",
	},
];

//Declarations
const gameEl = document.querySelector('#game');
const studentImgEl = document.querySelector('#classmate');
const studentNameEl = document.querySelector('#buttons');
let guessesEl = document.querySelector('#guesses');
const resetEl = document.querySelector('#reset')
const highscore = [];
let answers = [];
let newStudents = [];
let rightAnswers = [];

//Variables for guesses and correct guesses
let guess = 0;
let rightGuess = 0;

//Using Fisher Yates method for shuffling the original array
const shuffleArray = (array) => {
	for(let i = array.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1))
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
  }
}

//Function to get one correct IMG/NAME and three random wrong
const getNewStudents = (newArray) => {
	//Shuffling the array
    shuffleArray(newArray);
	//Get random students
    const randomClassmates = newArray.slice(0, 4);
	//Get the first student name and IMG from newArray
	let rightStudent = randomClassmates[0];
	let correctName = rightStudent.name;
	studentImgEl.src = rightStudent.image;
	//Using .filter to filter out the wrong students
	newStudents = newArray.filter(student => student !== rightStudent);
	//Pushing rightAnswers on rightStudent so in counts for points
	rightAnswers.push(rightStudent);
	//Shuffling array so correct answer not always on same spot
    shuffleArray(randomClassmates);
	//pushing studentNameEl to be empty so I dont get new names for every buttonpress 
	studentNameEl.innerHTML = "";
	
	const randomNames = randomClassmates.map(classmate => classmate.name);

	//Creating a button for each answer
    randomNames.forEach(classmate => {	
		if(classmate == correctName){
			studentNameEl.innerHTML += `<button id="rightAnswer" class="btn">${classmate}</button>`;
		} else {
			studentNameEl.innerHTML += `<button id="wrongAnswer" class="btn">${classmate}</button>`;
		}
    })
}
//Lastly calling the function
getNewStudents(students);

//Keep track of guesses and correct answers
gameEl.addEventListener('click', e =>{
	if(e.target.tagName === 'BUTTON'){
		guess++;
		guessesEl.innerText = `${guess}/15`;
			
	if(e.target.id === 'rightAnswer'){
		rightGuess++;
		answers.push(e.target.innerText);
	} else{
		answers.push(e.target.innerText);
	}
			
	if(guess === 15) {
		highscore.push(rightGuess);
		showResults();
	} else {
		getNewStudents(newStudents);
	}
	}
});

//Show result after 15 questions asked
const showResults = () => {
	gameEl.classList.add('d-none');
	reset.classList.remove('d-none');
	guessesEl.innerText = `You got ${rightGuess}/15, Good Job!`;
}

//Event to reset the guiz at press of button
resetEl.addEventListener('click', () => {
	gameEl.classList.remove('d-none');
	reset.classList.add('d-none');
	guess = 0;
	rightGuess = 0;
	guessesEl.innerText = `${guess}/15`;
	answers = [];
	rightAnswers = [];
	getNewStudents(students);
})