// function play(){
//     // step-1: home screen hidden
//     const homeScreen = document.getElementById('home-screen');
//         homeScreen.classList.add('hidden');
//     // step-2: play ground hidden class remove
//     const playGround = document.getElementById('play-ground');
//         playGround.classList.remove('hidden');  
// }

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
function play(){
    hideElementId('home-screen');
    showElementId('play-ground');
    continueGame();
}
// game continue
function getRandomAlphabet(){
    // create alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('')
    // create alphabet random number
    const randomNumber = Math.random()*25;
    const random = Math.round(randomNumber);
    console.log(random);

    const alphabetNum = alphabet[index];
    // console.log(random, alphabetNum);
    return alphabetNum;
}
function continueGame(){
    const gameStart = getRandomAlphabet();
    console.log(gameStart);
}