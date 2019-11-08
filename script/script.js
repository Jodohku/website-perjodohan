// const match = document.getElementById('match')

function generate() {
	let randomNumber = Math.ceil(Math.random() * 100);
	// console.log(`${randomNumber}%`)
	if (randomNumber >= 70) {
		return (window.location.href = '../match-sucess.html');
    } 
    else {
		return (window.location.href = '../match-fail.html');
	}
	// return randomNumber
}
// console.log(generate());
