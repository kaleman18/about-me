let pointsScored = 0;
function askName(){
    let userName = prompt('Hello! What is your name?');
            document.write('Hello, '+ userName +'. Welcome to my "about me" website. I hope you enjoy!');
}

function askQuestions(){
    let usrQuestion = prompt("Would you like to answer a couple of yes or no questions about me?");
    let letter = usrQuestion.substring(0,1);
    if(usrQuestion === 'y')
        alert('okay!')
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
                alert('Too low,Try again!')
            }else if (guess > 4){
                alert('Too high, Try again!')
            }
        }if (!correctGuess) {
            alert("Sorry, you didn't guess correctly. The answer is 4 :)");
            
        }
}

function seventhQuestion(){
    let maxAttempts = 6;
    let favoriteSport = ['snowboarding','football','mma','boxing'];
    let correctGuess = false;
    let numberOfGuesses = 0;
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
                    }
                }
            }
            if (found){
                correctGuess = true;
                break;
            }
        }
        if (!correctGuess){
            alert('Nice try, but my favorite sports are football, boxing, mma, and snowboarding!')
        }
}

askName()
sixthQuestion()
seventhQuestion()

alert('Thanks for playing. You scored ' +pointsScored+ ' points!')