var correct = 0;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var questions = ["Are you afraid of the dark?", 
								 "Do you believe in Haunted Houses?", 
								 "Do you avoid watching scary movies and tv shows?"];

var answers = ['YES', 'Y', 'NO', 'N'];

function ques1() {
	var question1 = prompt(questions[0]);
	if (answers[0] || answers[1]) {
	  one.innerHTML = 'You are a Halloweenie';
	  img1.innerHTML = '<img src= "Img/img1.jpg" width= "200" />';
	  correct++;
	} else {
	  one.innerHTML = 'Hmmm... this is going to be harder than I thought';
	}
}

function ques2() { 
	var question2 = prompt(questions[1]);
	if (answers[0] || answers[1]) {
	  two.innerHTML = 'You are a giant Halloweenie';
	  img2.innerHTML = '<img src= "Img/img2.jpg" width="200" />';
	  correct++;
	} else {
	  two.innerHTML = 'You are a tough one to scare!';
	}
}

function ques3() {
	var question3 = prompt(questions[2]);
	if (answers[0] || answers[1]) {
	  three.innerHTML = 'You are a mini Halloweenie';
	  img3.innerHTML = '<img src= "Img/img3.jpg" width="200"/>';
	  correct++;
	} else {
	  three.innerHTML = 'You are ready for Hallowen!';
	}
}

ques1();
ques2();
ques3();

alert('You are finished! You were afraid of ' + correct + ' out of three scary scenarios right... sleep with the lights on!');

