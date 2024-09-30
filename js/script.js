
// section-hide
function hideElementId(ElementId){
    const element = document.getElementById(ElementId);
        element.classList.add('hidden');
}
// section-add
function showElementId(showElement){
    const elementShow = document.getElementById(showElement);
        elementShow.classList.remove('hidden');
}
// set backgroundColorById
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
//remove backgroundColorById
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
        element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;;
    return text;
}
// button click function
function play(){
    hideElementId('home-screen');
    hideElementId('final-score');
    showElementId('play-ground');
    continueGame();

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}
function gameOver(){
    hideElementId('play-ground');
    showElementId('final-score');
    //updated score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

function handleKeyboardKeyupEvent(event){
    // console.log(event.key);
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed);

    //stop the game if pressed 'esc'
    if(playerPressed==='Escape'){
        gameOver();
    }

    // get the expected to pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);
    if(playerPressed===expectedAlphabet){
        console.log('you got a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore+1;
        setTextElementValueById('current-score', updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you loss a point');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife-1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife===0){
            gameOver();
        }
    }
    }
  
//capture  keyboard key press
document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    // step -1 get a random alphabet.
    const alphabet = getARandomAlphabet();
    console.log('random alphabet', alphabet);
     
    // set randomly generated alphabet to screen show
  const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;

//    set background color id
    setBackgroundColorById(alphabet);

   
}

function getARandomAlphabet(){
    //get your alphabet create
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    // get your random index create 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets [index];
    // console.log(index, alphabet);
    return alphabet;

}
