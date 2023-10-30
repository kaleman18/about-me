let pointsScored = 0;



function checkYesNo(question, correctAnswer){
  let userAnswer = prompt(question);
  let normalilzedAnswer = userAnswer.toLowerCase();
  if (normalilzedAnswer.startsWith('y') && correctAnswer === 'yes'){
    pointsScored++;
    return true;
  } else if (normalilzedAnswer.startsWith('n')&& correctAnswer === 'no'){
    pointsScored++;
    return true;
  } else {
    alert('Sorry, that was incorrect');
    return false;
  }
}

function greeting(){
  let userName = prompt('Hello! What is your name?');
  alert('Hello, '+ userName +'. Welcome to my "about me" website. I hope you enjoy!');

}
greeting();

if (checkYesNo('Would you like to answer a couple of yes or no questions about me?', 'yes')){
  alert(`Okay! Lets go!`);
}

if (checkYesNo(`Did I serve in the Navy?`, `yes`)){
  alert('Correct!');
}

if (checkYesNo(`Do I have a cat named Daisey?`, `yes`)){
  alert(`Right!, She's a good girl...sometimes`);
}
if (checkYesNo(`Is my favorite food pasta?`, `no`)){
  alert(`Eww gross`);
}
if (checkYesNo(`Do I work in the ER`, `yes`)){
  alert('Correct!');
}


function sixthQuestion(){
  let correctGuess = false;
  let maxAttempts = 4;
  for(let i = 0; i < maxAttempts; i++){
    let guess = prompt("How many animal's do I take care of");
    guess = Number(guess);
    if(guess===4){
      alert('You are correct!');
      correctGuess = true;
      pointsScored++;
      break;
    }else if (guess < 4){
      alert('Too low,Try again!');
    }else if (guess > 4){
      alert('Too high, Try again!');
    }
  }if (!correctGuess) {
    alert("Sorry, you didn't guess correctly. The answer is 4 :)");
  }
}

function seventhQuestion(){
  let maxAttempts = 6;
  let favoriteSport = ['snowboarding','football','mma','boxing'];
  let correctGuess = false;
  for(let i = 0; i < maxAttempts; i++){
    let guess = prompt('What are my favorite sports?');
    guess = guess.toLowerCase();
    let found = false;
    for (let j = 0; j < favoriteSport.length; j++){
      if (guess === favoriteSport[j]){
        found = true;
        pointsScored++;
        if(guess === 'football'){
          alert('Correct! My favorite team is the Dolphins.');
        }else if(guess === 'boxing'){
          alert('Correct! My favorite boxer is Canelo.') ;
        }else if(guess === 'mma'){
          alert('Correct! My favorite fighter is Nate Diaz.');
        }else if(guess === 'snowboarding'){
          alert('Correct! I love the mountains.');
        }else {
          alert('Nope, think of stewie from Family Guy');
        }
      }
    }
    if (found){
      correctGuess = true;
      break;
    }
  }
  if (!correctGuess){
    alert('Nice try, but my favorite sports are football, boxing, mma, and snowboarding!');
  }
}


sixthQuestion();
seventhQuestion();

alert('Thanks for playing. You scored ' +pointsScored+ ' points!');



