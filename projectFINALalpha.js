// Palina, John Chu, Melissa, Marc Choa
// 07.21.2018, 18:00
// NOTES: DUPLICATES RESOLVED, NEED TO BE MIGRATED TO THIS FILE
// FORMATTING IS COMPLETE
// ISSUE WITH ANSWERING QUESTIONS
//
//
//
// create list of questions
let challenges = [
	//nested objects of questions
	{
        id: 0,
        question: 'Is this a closure? \n A: function ShowName (firstName, last Name ) \n { let nameIntro = "Your name is "; \n function makeFullName () {\n return nameIntro + firstName + " " + lastName; \n} \n return makeFullName (); \n} \n [yes or no]?',
        answer: ['yes'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'Closures are inner functions with access to the outer (enclosing) function variables scope chain',
    },

    {
        id: 1,
        question: 'Is 1 == \'1\' \n [yes / no]?',
        answer: ['yes'],
        userAnswer: [],
        explain: '== is equal value and does not have to be equal type',
    },

    {
        id: 2,
        question: 'Is \'undefined\' [true or false]?',
        answer: ['false'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: '"Undefined" is falsy',
    },

    {
        id: 3,
        question: 'What is NOT an object? Choose (A,B,C) \n A:  const car = {\n make: "Ford",\n model: "Fiesta", \n color: "Red," \n} \n B: myObject = "Hello, World, Goodbye, Wednesday" \n\n C: function myFunction (p1, p2) {\n return p1 * p2; \n}',
        answer: ['A'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'myObject is a string or "primitive" and not an object'
    },

    {
        id: 4,
        question: 'Can you re-invoke \n let doSomething = () = > {console.log "Hello World"}; \n using doSomething();',
        answer: ['no'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: "There is no variable assigned to the arrow function"
    },

    {
        id: 5,
        question: 'which is NOT the proper notation for accessing an Object property? Choose (A,B,C)\n A: let b = person.age; \n B: let b = person["age"]; \n C: let b = person("age"); ',
        answer: ['C'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'C: is not proper Syntax'
    },

    {
        id: 6,
        question: "What is the final code output of below: \n const arr = [10, 12, 15, 21]; \n for (var i = 0; i < arr.length; i++) {\n setTimeout(function() {\n console.log('Index: ' + i + ', element: ' + arr[i]);\n }, 3000);",
        answer: ['undefined'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.'
    },

    {
        id: 7,
        question: 'Can a number 5 be added into:  new sumOf(1,2,3,4) using array.push() ',
        answer: ['no'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'An argument is an array-like object, but not an array. It lacks the array methods'
    },

    {
        id: 8,
        question: 'What is 2 + true',
        answer: ['3'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1'
    },

    {
        id: 9,
        question: 'What is the value of "1" + 2 + 4',
        answer: ['124'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: '"124". For this one "1" + 2 will produce "12" and "12"+4 will generates "124".'
    },

    {
        id: 10,
        question: 'What is the value of Math.max([2, 3, 4, 5])',
        answer: ['NaN','undefined'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'Be careful of syntax'
    },

    {
        id: 11,
        question: 'what will console.log(a) display? \n var a = 1;\n function b() {\n a = 10;\n return;\n function a() {}\n {\n b();\n console.log(a);',
        answer: ['1'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: "Hoisting:  First of all, don't use var! In this scenario, var a has been hoisted to the top .",
    },

    {
        id: 12,
        question: 'What is the console.log(customObject.get_price()) given: \n let myObject = {\n   price : 20.99,\n  get_price : function() {\n     return this.price;\n  }\n};\nlet customObject = Object.create(myObject);\ncustomObject.price = 19.99;\n delete customObject.price;   ',
        answer: ['20.99'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: "When you create object.create(myObject) you are creating new object where the myObject will be the parent of the newly created object.  The price property will be at the parent. When you are assigning some value to customObject.price, you create a new property on the child. This means, when you delete customObject.price it deletes the price property in the customObject (in the child). However, when you call the method getprice, first it looks for this.price in the child since the customObject doesn't have price property, JavaScript executor walks through the prototype chain towards the parent. Since customObject was inherited from myObject and myObject has a price property, the get_price method returns the price from parent 20.99.",
    },

    {
        id: 13,
        question: 'what will typeof(null) return?',
        answer: ['object'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: "This is a Javascript Bug that will probably never be fixed due to code legacy issues",
    },

    {
        id: 14,
        question: 'For: let a = (2, 3, 5) what is the value of a = ?',
        answer: ['5'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand',

    },

    {
        id: 15,
        question: 'What is -5 % 2',
        answer: ['-1'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'the result of remainder always get the symbol of first operand'
    },

    {
        id: 16,
        question: 'If let a = 2, and let b = 3, what is let c = a && b output?',
        answer: ['3'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: "a is truthy, so it evaluates to the second operand. Because JavaScript && and || don't work the same way they do in languages like C and Java. They use fall-through/short circuit logic.",
    },


    {
        id: 17,
        question: 'Will both functions return the same thing? \nfunction foo1() {\n  return {\n    bar: "hello"\n  };\n} \n\n function foo2() {\n  return\n  {\n     bar: "hello"\n  };\n}',
        answer: ['no'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: 'Surprisingly, these two functions will not return the same thing. The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form). As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement.'
    },

    {
        id: 18,
        question: 'if given the function below, what would be the output? \n(function() {\n    console.log(1);\n    setTimeout(function() {console.log(2)}, 1000)\n    setTimeout(function() { console.log(3) }, 0); \n    console.log(4);\n })();',
        answer: ['1432'],
        userAnswer: [], //adding a appended stored userAnswer for validation
        explain: '1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay. 2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.'
    },

    {
        id: 19,
         question: 'What is the output of: \n var str = "Hello".split(" ").reverse().join("");\n console.log(str);',
         answer: ['olleH'],
         userAnswer: [], //adding a appended stored userAnswer for validation
         explain: 'Hello is first split into individual letter, reversed, and then joined back.'
     },
];
/*************************************************************************************************************/

//starts game
startGame();

//MAIN FUNCTION
function startGame() {
	// asks name
	let name = getUserName(); //comment when needing to debug
  if (name === undefined) return;
  console.log(name)

	let numberOfQuestions = 3; //to be changed

	//fetches randomized questions and displays them
  let questionNum = questionRecall(numberOfQuestions);
  //console.log(questionNum)

	//calculates user score
	let earnedScore = getScore(questionNum);
	console.log(earnedScore);

	//scoring, passing or retry
	approval(name, numberOfQuestions, earnedScore);
}

function exit(){
  
}

// get user name
function getUserName() {
	let userName = prompt('=^._.^= ∫ Hi I am Codesmith Cat here! Who am I interviewing today?'); //change console log to prompt()
	//let userName = 'popsicle' //HARD CODED userName!!!!

	// if user didn't type anything or click button
	if (userName === '' || userName === undefined || userName === null) {
		let leaving = prompt('do you want to exit? [Y/N] =^._.^= ∫');
		if (
			(leaving.toLowerCase() === 'y' ||
				leaving.toLocaleLowerCase() === 'yes') &&
			(leaving.toLowerCase() !== 'n' || leaving.toLowerCase() !== 'no')
		) {
			alert('aww, okay =^-_-^= ∫');
			return;
		} else {
			alert('are you still there? =^@_@^= ∫');
			return getUserName();
		}
	} else {
		// if user inputs correct info, start
		return userName;
	}
}

//
function questionRecall(num, prevArr) {
	//remove recursive features
	//use arrays to formulate proper question generation
	let nArray = duplicates(num);
	if (
		nArray[0] === nArray[1] ||
		nArray[1] === nArray[2] ||
		nArray[2] === nArray[0]
	) {
		return questionRecall(num);
	} else {
		console.log('working array');
		for (let i = 0; i < num; i++) {
			// - display the question and get answer
			//let response = prompt(challenges[key].question);
			let response = prompt(challenges[nArray[i]].question);
			// - store user's response

			challenges[nArray[i]].userAnswer.push(response);
		}
	}
  return nArray
}

function duplicates(num) {
	//num = numberOfQuestions
	//numberOfQuestions currently set hardcoded fixed number for testing
	//recall three question max
	let counter = num;

	//for loop to iterate and evaluate contents for duplicates
	//loops three times
	let nArray = [];
	for (let i = 0; nArray.length < counter; i++) {
		if (nArray.indexOf(nArray) === 1) {
			getRandomInt();
		} else if (1 !== nArray.indexOf(nArray)) {
			nArray.push(getRandomInt());
		}
	}
	console.log(nArray);
	return nArray;
}

function coinFlip() {
	return Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails';
}

// random question # generator
function getRandomInt() {
	//CONDITIONAL, IF PREVIOUS ROLL WAS GIVEN #, NEXT # CANNOT EQUAL TO PREVIOUS #
	let max = Object.keys(challenges).length; //gets max number of questions
	let key = Math.floor(Math.random() * Math.floor(max)); //random * max question amount
	return key;
}

// get the score of each answer
function getScore(questionNum) {
	let points = 0;

	let correctAnswers = challenges.map(correct => correct.answer);
  let userAnswers = challenges.map(user => user.userAnswer);
  for (let i = 0; i < questionNum.length; i++){
    console.log(correctAnswers[questionNum[i]])
    console.log(userAnswers[questionNum[i]])
    
    //if they match, PROBLEM if correctAnswers has multiple answers, then errors will occur
    if(correctAnswers[questionNum[i]].toString() === userAnswers[questionNum[i]].toString()){
      points += 3
      console.log(points)
    } else {
      points += 0
    }
  }
  console.log('\n')
  //console.log(challenges)
	//console.log(correctAnswers)

  //return 9 //passing
  return points; //didn't make it
  
}
//we are already scoring points in the function above
//would you guys like to combine these two functions
//RE: after we have the code working w/ prompts we can start streamlineing the code
function approval(name, numberOfQuestions, scoreEarned) {
	//will be streamlined after basics are set
	let scoreTotal = 3 * numberOfQuestions; //points for each question TIMES number of questions asked

	//have an equation for setting points to percentage of passing
	let percentage = scoreEarned / scoreTotal * 100;

	if (scoreEarned < 0 || scoreEarned === undefined) {
		return 'error'; //alert error
	} else if (percentage >= 60) {
		//percentage for passing >= 60%
		//want to add userName & concat to console.log output
		alert(
			'Congratulations ' + name + " on entering Codesmith's Cohort!!"
		);
	} else {
		//want to add userName & concat to console.log output
		alert(
			'Sorry, ' + name + "\nyou didn't make it.\nBetter luck next time"
		);
    //prompt('would you like to try again')
	}
}
