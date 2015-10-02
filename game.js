var correct = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var questions = ["Are you afraid of the dark?", 
								 "Do you believe in Haunted Houses?", 
								 "Do you avoid watching scary movies and tv shows?"];

var answers = ['YES', 'Y', 'NO', 'N'];

function ques1() {
	var question1 = prompt(questions[0]);
	if (answers[0] || answers[1]) {
	  one.innerHTML = 'You are a Halloweenie';
	  correct++;
	} else {
	  one.innerHTML = 'Hmmm... this is going to be harder than I thought';
	}
}

function ques2() { 
	var question2 = prompt(questions[1]);
	if (answers[0] || answers[1]) {
	  two.innerHTML = 'You are a giant Halloweenie';
	  correct++;
	} else {
	  two.innerHTML = 'You are a tough one to scare!';
	}
}

function ques3() {
	var question3 = prompt(questions[2]);
	if (answers[0] || answers[1]) {
	  three.innerHTML = 'You are a mini Halloweenie';
	  correct++;
	} else {
	  three.innerHTML = 'You are ready for Hallowen!';
	}
}

ques1();
ques2();
ques3();

alert('You are finished! You were afraid of ' + correct + ' out of three scary scenarios right... sleep with the lights on!');

