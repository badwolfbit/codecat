// Palina, John Chu, Melissa, Marc Choa
// 07.21.2018, 18:00
// NOTES: DUPLICATES RESOLVED, NEED TO BE MIGRATED TO THIS FILE
// FORMATTING IS COMPLETE
// NEED A PROMPTUSER FUNCTION TO PROMPT USER WITH DIFFERENT QUESTIONS
//
//
//
// create list of questions

let userName = prompt('=^._.^= ∫ Hi I am Codesmith Cat here! Who am I interviewing today?')
alert(`=^._.^= ∫ Meowie Wowie ${userName}, I've heard a lot about you. You will be asked a series of questions. Some will be multiple choice. Be sure to type in A, B, C or D if so. Good luck! `)
let userFlip = prompt('Heads or tails?')
alert(`Interview Cat flips`)
let interviewerFlip = alert(Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails')
userFlip === interviewerFlip ? alert(`I think I like you, ${userName}`) : alert(`I don't know if I like that, ${userName}.`)
alert(`=^._.^= ∫ Ok ${userName}, get ready to interview!!`)
let questions = [

    [`How do you write "Hello World" in an alert box? 

 A- alertBox("Hello World");
 B- alert("Hello World");
 C- msg("Hello World");
 D- msgBox("Hello World")`, `B`],

    [`Which of the following type of variable is visible everywhere in your JavaScript code?
  
A - global variable
B - local variable
C - Both of the above.
D - None of the above. `, `A`,
        console.log(`
Explanation for question 2:
Global Variables: A global variable has global scope which means it is visible everywhere in your JavaScript code.
`)
    ],


    [`Which of the following is correct about callbacks?

A - A callback is a plain JavaScript function passed to some method as an argument or option.
B - Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.
C - Both of the above.
D - None of the above.

`, `C`, console.log(`
Explanation for question 3
A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.
`)],

    [`Which of the following function of String object returns the characters in a string between two indexes into the string?
  
A - slice()
B - split()
C - substr()
D - substring()`

        , `D`, console.log(`
Explanation for question 4
substring() − Returns the characters in a string between two indexes into the string.
`)
    ],


    [`Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?

A - concat()
B - every()
C - push()
D - some()
`, `B`, console.log(`
Explanation for question 5
every() − Returns true if every element in this array satisfies the provided testing function.
`)],

    [`Is "false" output as false?

A - Yes
B - No
`, `B`, console.log(`
Explanation for question 6
"false" is a string and thus would output true.
`)],

    [`What is the value of "1"+2+4?

A - 6
B - 16
C - 124
D - 34

`, `C`, console.log(`
Explanation for question 7
For this one "1" + 2 will produce "12" and "12"+4 will generates "124".
`)],
    [`For var a = (2, 3, 5); what is the value of a?

A - 2
B - 3
C - 5
D - 235
`, `C`, console.log(`
Explanation for question 8
The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
`)],

    [`For var a = (1, 5 - 1) * 2 what is the value of a?

A - 10
B - (2, 4)
C - 2
D - 8
`, `D`, console.log(`
Explanation for question 9
The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
`)],

    [`What will typeof(null) return?

A - Object
B - undefined
C - null
D - 0
`, `A`, console.log(`
Explanation for question 10
null is listed as an object due to a legacy issue. It is a persistant Javascript bug
`)],

    [`If var a = 2, b =3 what would be value of a && b

A - 5
B - 6
C - 2 
D - 3
`, `D`, console.log(`
Explanation for question 11
The value of the last operand will be displayed.
`)],

    [`What is -5 % 2?

A - 1
B - -1
C - -2
D - 2
`, `B`, console.log(`
Explanation for question 12
The result of remainder always get the symbol of first operand.
`)],

    [`What will you see in the console log? 
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a); 

A - 10
B - 1
C - null
D - Undefined
`, `B`, console.log(`
Explanation for question 13
When you set a = 10;, you are setting the local variable a , not the global one. Hence, the value of global variable remain same and you get, 1 in the log.
`)],

    [`Is this a closure? \n A: function ShowName (firstName, last Name ) \n { let nameIntro = "Your name is "; \n function makeFullName () {\n return nameIntro + firstName + " " + lastName; \n} \n return makeFullName (); \n} \n ,
}

A - Yes
B - No
`, `A`, console.log(`
Explanation for question 14
Closures are inner functions with access to the outer (enclosing) function variables scope chain'
`)],

    [`Is \'undefined\' true or false?

A - True
B - False
`, `B`, console.log(`
Explanation for question 15
Undefined is falsy
`)],

    [`Can you re-invoke \n let doSomething = () = > {console.log "Hello World"}; \n using doSomething(); ?

A - Yes
B - No
`, `B`, console.log(`
Explanation for Question 16
There is no variable assigned to the arrow function

`)],
];
let correctAnswers = 0;
let questionNum = 0;

for (let i = 0; i < questions.length - 11; i++) {
    let answers = prompt(questions[Math.floor(Math.random() * questions.length)][0]);
    answers = answers.toUpperCase();

    if (answers === questions[i][1]) {
        correctAnswers++;
        questionNum++;
        console.log("Your answer no. " + questionNum + " is correct! It is " + answers + ".");
    } else {
        questionNum++;
        console.log("Your answer no. " + questionNum + " is wrong! It is " + questions[i][1] + " and not " + answers + ".");
    }
}
if (correctAnswers >= 5) {
    alert(`=^._.^= ∫ Codesmith Cat says" ${userName}  had  ${correctAnswers}  correctanswer(s). Meowie wowie!! You've been accepted into Codesmith!!"`);
}
if (correctAnswers <= 4 && correctAnswers >= 3) {
    alert(`=^._.^= ∫ Codesmith Cat says "${userName} had ${correctAnswers}  " correct answer(s). Almost made it!! Study harder!"`);
}
if (correctAnswers < 3) {
    alert(`=^._.^= ∫ Codesmith Cat says '${userName}  had  ${correctAnswers}  correct answer(s). Dogs!! You should have remembered what Will's favorite band is!! Study harder!!`);
}

//
function questionRecall(num, prevArr) {
    //remove recursive features
    //use arrays to formulate proper question generation
    let nArray = duplicates(num);
    if (
        nArray[0] === nArray[1] ||
        nArray[0] === nArray[2] ||
        nArray[0] === nArray[3] ||
        nArray[0] === nArray[4] ||
        nArray[0] === nArray[5] ||
        nArray[1] === nArray[2] ||
        nArray[1] === nArray[3] ||
        nArray[1] === nArray[4] ||
        nArray[1] === nArray[5] ||
        nArray[2] === nArray[3] ||
        nArray[2] === nArray[4] ||
        nArray[2] === nArray[5] ||
        nArray[3] === nArray[4] ||
        nArray[3] === nArray[5] ||
        nArray[4] === nArray[5] ||
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

//function coinFlip() {
// 	return Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails';
// }

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
    for (let i = 0; i < questionNum.length; i++) {
        console.log(correctAnswers[questionNum[i]])
        console.log(userAnswers[questionNum[i]])

        //if they match, PROBLEM if correctAnswers has multiple answers, then errors will occur
        if (correctAnswers.includes([questionNum[i]].tostring(), 0) === userAnswers[questionNum[i]].toString()) {
            // if(correctAnswers[questionNum[i]].toString() === userAnswers[questionNum[i]].toString()){
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


}