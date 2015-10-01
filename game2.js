var yes;
yes = 0;

var question1 = prompt("Are you afraid of the dark?");
if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  alert('You are a Halloweenie');
  yes++;
} else {
  alert('Hmmm... this is going to be harder than I thought');
}

var question2 = prompt("Do you believe in Haunted Houses?");
if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
  alert('You are a giant Halloweenie');
  yes++;
} else {
  alert('You are a tough one to scare!');
}

var question3 = prompt("Do you avoid watching scary movies and tv shows?");
if (question3.toUpperCase() === 'YES' || question3.toUpperCase() ==='Y') {
  alert('You are a mini Halloweenie');
  yes++;
} else {
  alert('You are ready for Hallowen!');
}

var yes = prompt('You are finished!');
if (yes >= 2) {
  alert('You were afraid of 2 scary scenarios... sleep with the lights on!');
} else {
  alert('You were only afraid on one creepy thing... good job!');
}


//console.log('Question1 response: ' + question1);
//console.log('Question2 response: ' + question2);
//console.log('Question3 response: ' + question3);

