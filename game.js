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
  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    one.innerHTML = 'You are a Halloweenie';
    img1.innerHTML = '<img src= "Img/img1.jpg" width= "200" />';
    one.className = 'correct';
    correct++;
  } else {
    one.innerHTML = 'Hmmm... this is going to be harder than I thought';
    one.className = 'incorrect';
  }
}

function ques2() {
  var question2 = prompt(questions[1]);
  if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
    two.innerHTML = 'You are a giant Halloweenie';
    img2.innerHTML = '<img src= "Img/img2.jpg" width="200" />';
    two.className = "correct";
    correct++;
  } else {
    two.innerHTML = 'You are a tough one to scare!';
    two.className = "incorrect";
  }
}

function ques3() {
  var question3 = prompt(questions[2]);
  if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
    three.innerHTML = 'You are a mini Halloweenie';
    img3.innerHTML = '<img src= "Img/img3.jpg" width="200"/>';
    three.className = "correct";
    correct++;
  } else {
    three.innerHTML = 'You are ready for Hallowen!';
    three.className = "incorrect";
  }

	var question1 = prompt(questions[0]);
	if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
	  one.innerHTML = 'You are a Halloweenie';
	  img1.innerHTML = '<img src= "Img/img1.jpg" width= "200" />';
	  one.className = 'correct';
	  correct++;
	} else {
	  one.innerHTML = 'Hmmm... this is going to be harder than I thought';
	  one.className = 'incorrect';
	}
}

function ques2() { 
	var question2 = prompt(questions[1]);
	if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
	  two.innerHTML = 'You are a giant Halloweenie';
	  img2.innerHTML = '<img src= "Img/img2.jpg" width="200" />';
	  two.className = "correct";
	  correct++;
	} else {
	  two.innerHTML = 'You are a tough one to scare!';
	  two.className = "incorrect";
	}
}

function ques3() {
	var question3 = prompt(questions[2]);
	if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
	  three.innerHTML = 'You are a mini Halloweenie';
	  img3.innerHTML = '<img src= "Img/img3.jpg" width="200"/>';
	  three.className = "correct";
		correct++;
	} else {
	  three.innerHTML = 'You are ready for Hallowen!';
	  three.className = "incorrect";
	}
}

ques1();
ques2();
ques3();

alert('You are finished! You were afraid of ' + correct + ' out of three scary scenarios right... sleep with the lights on!');
