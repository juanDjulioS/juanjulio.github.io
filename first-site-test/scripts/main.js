let myImg = document.querySelector('.chrono_main');
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if (mySrc === 'images/chrono-cross-the-radical-dreamers-edition.jpg'){
		myImg.setAttribute('src','images/cc-remaster.png');
	}
	else if (mySrc === 'images/cc-remaster.png'){
		myImg.setAttribute('src','images/chrono-cross-the-radical-dreamers-edition.jpg');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName = prompt('please enter your name.');
	if(!myName){
		setUserName();
	}
	localStorage.setItem('name',myName); 
	myHeading.textContent = 'Welcome to my homepage, ' + myName;
}
if(!localStorage.getItem('name')){ //check wether the name data exists
	setUserName();
}else{
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Welcome to my homepage, ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}