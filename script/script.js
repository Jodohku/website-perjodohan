// const match = document.getElementById('match')

function generate() {

    let randomNumber = Math.ceil(Math.random() * 100);
    // console.log(`${randomNumber}%`)
    if (randomNumber >= 70) {

        localStorage.setItem("matchResult", randomNumber);

		return (window.location.href = "match-sucess.html");
		
    } else {
        
        localStorage.setItem("matchResult", randomNumber);

        return (window.location.href = "match-fail.html");
    }
    // return randomNumber
}
// console.log(generate());

document.addEventListener("DOMContentLoaded", event => {
	console.log(true);
	/// ini buat ngecek apakah value yg kita input tadi keisi atau enggak
    if (localStorage.getItem("matchResult") !== null) {
        let matchResult = localStorage.getItem("matchResult");
        let container = document.getElementById("success-rate");
        container.innerHTML = parseInt(matchResult);
    }
});
