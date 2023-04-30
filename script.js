window.addEventListener('load' ,init);

let time=15;
let score=0;
let isplaying;



const WordInput=document.querySelector('#label');
const Currentword=document.querySelector('#currentword');
const seconds=document.querySelector('#number');
const message=document.querySelector('#message');
const TimeDisplay=document.querySelector('#time');
const ScoreDispaly =document.querySelector('#score');



const words=[
    'jacob stood on his tiptoes',
    'the car turned the corner',
    'kelly twirled in circles',
    'aaron made a picture',
    'the staff performed well',
    'white shirt always looks sharp',
    'the cat and the dog yowled',
    'open the jar carefully',
    'make the best of things',
    'the cat and dog ate',
    'i opened all the gift',
    'when i go to the beach',
    'i went to the beach',
    'i will shop at the store',
    'wolf ate steak at the zoo',
    'they have to be short',
    'they have to be long',
    'Life is a journey, enjoy the ride',
    'Dreams come true with hard work',
    'Love conquers all, spread it freely',
    'The sun always rises after the storm',
    'Your potential is limitless, reach for it',
    'Never give up on what you believe',
    'Laughter is the best medicine for everything',
    'The sky is the limit, reach for it',
    'Time heals all wounds, trust the process',
    'Life is what you make it, own it',
    'Success is a journey, not a destination',
    'Kindness is always in fashion, wear it',
    'Positive thoughts attract positive outcomes, believe it',
    'Be yourself, everyone else is taken',
    'Change starts with one small step forward',
    'Today is a gift, make the most of it',
    'Patience is a virtue, cultivate it',
    'Actions speak louder than words, prove it',
    'Life is a canvas, paint it boldly',
    'The best is yet to come, believe it',
    'The world is your oyster, seize it',
    'Stay curious, learn something new every day',
    'A grateful heart is a happy heart',
    'Believe in your dreams, they are possible',
    'The power of love can move mountains',
    'Embrace the journey, not just the destination',
    'Hope is a light in the darkness',
    'Change is inevitable, growth is optional',
    'Learn from yesterday, live for today, hope for tomorrow',
    'Life is a series of moments, make them count',
    'Perseverance is key to overcoming obstacles',
    'Everything happens for a reason, trust it',
    'Be the change you wish to see',
    'Success is a state of mind',
    'Life is a puzzle, figure it out',
    'The best way out is always through',
    'The only limit is the one you set',
    'Gratitude is the gateway to abundance',
    'Take the road less traveled, its worth it',
    'The future belongs to the dreamers',
    'Let your light shine, it inspires others',
    'Life is about balance, find your center',
    'The journey of a thousand miles begins with a single step',
    'Success is not final, failure is not fatal',
    'Dream big, work hard, stay focused',
    'Life is too short for regrets, live boldly',
    'Believe in yourself, you are capable of greatness',
    'Challenges are opportunities in disguise, embrace them',
    'Love is the answer, no matter the question',
    'Make every day count, its a gift'
    
];
function init(){
    showWords(words);
    WordInput.addEventListener('input',Startmatch)
    setInterval(countdown, 1000);
    setInterval(checkstatus, 50)

}

function Startmatch(){
    if(match()){
        isplaying= true;
        time=15;
        showWords(words);
        WordInput.value='';
        score++;
    }
    if(score==-1){
        ScoreDispaly.innerHTML=0

    }else{
        ScoreDispaly.innerHTML=score
    }

    }
    

function match(){
    if (WordInput.value==Currentword.innerHTML){
        message.innerHTML='Correct!!'
        return true;
    }else {
        message.innerHTML='';
        return false;
    }

}
function showWords(words){
    const randIndex=Math.floor(Math.random()*words.length);
    Currentword.innerHTML=words[randIndex];
}

function countdown(){
    if(time>0){
        time--;

    } else if(time==0){
        isplaying= false;
    }
    TimeDisplay.innerHTML=time;
}
function checkstatus(){
    if (!isplaying && time==0){
        message.innerHTML="Game over!!! Better Luck Next Time";
        score=-1;
    }
}