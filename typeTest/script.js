const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var textChgs = document.querySelector("#textChg");
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

var txType = document.querySelector("#typeTx");

var texts = [
"Living valley had silent eat merits esteem bed. In last an or went wise as left." ,			 
"Visited civilly am demesne so colonel he calling." ,		 
"So unreserved do interested increasing sentiments." , 		 
"Vanity day giving points within six not law." ,			 
"Few impression difficulty his use has comparison decisively.",			 
"Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant.",
"Improve has message besides shy himself cheered however how son." ,			 
"Arrived compass prepare an on as. Reasonable particular on my it in sympathize." ,			 
"He do of consulted sometimes concluded mr. An household behaviour if pretended."
];


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero (time) {
	
	if(time <= 9) {
		time = "0" + time;
	}
	
	return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer () {
	let  currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
	theTimer.innerHTML = currentTime;
	timer[3] ++;
	

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck () {
	
	let textEnterd = testArea.value;
	
	let originTextMatch = txType.innerHTML.substring(0,textEnterd.length);
		
	if(textEnterd == txType.innerHTML) {
		
		clearInterval(interval);
		testWrapper.style.borderColor = "#429890";		
	} else {
		if(textEnterd == originTextMatch) {
			testWrapper.style.borderColor = "#65CCf3";
		} else {
			testWrapper.style.borderColor = "#E95D0F";
						
		} 
	}
	//console.log(textEnterd);
}

// Start the timer:
function start() { 

	let textEnterdLenght = testArea.value.length;
	if(textEnterdLenght === 0 && !timerRunning) {
		timerRunning = true;
		interval = setInterval(runTimer,10);
		
		
	}
	//console.log(textEnterdLenght);
}

// Reset everything:
function reset () {
	//console.log("reset botton has been clicked");
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "grey";		
}


function swipe ()  {
	//this function changes the text in the test box.
	var textRnd = Math.floor(Math.random() * texts.length);
	txType.innerHTML = texts[textRnd];
	
}

//Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
textChgs.addEventListener("click",swipe,false);

/*clockbox*/

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);