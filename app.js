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
        for(let i = 0; i < maxAttempts; i++){
            let guess = prompt('What are my favorite sports?');
            guess = guess.toLowerCase();
            if (favoriteSport.includes(guess)){
                correctGuess = true
            }if(guess === 'football'){
                alert('Correct! My favoite team is the dolphins.');
                break;
            }else if(guess === 'boxing'){
                alert('Correct! My favoite boxer is Canelo.') ;
                break;
            }else if(guess === 'mma'){
                alert('Correct! My favoite fighter is Nate Diaz.');
                break;
            }else if(guess === 'snowbaording'){
                alert('Correct! I love the mountains.');
                break;
            }
        }if (!correctGuess){
            alert('better luck next time')
        }
}