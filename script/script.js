// const match = document.getElementById('match')

function generate() {
    let randomNumber = Math.ceil(Math.random() * 100);
    // console.log(`${randomNumber}%`)
    if (randomNumber >= 70) {
        let container = document.getElementById("success-rate");
        let num = document.createElement("p");
        num.setAttribute("id", "chance");
        num.textContent(randomNumber);
        container.appendChild(num);

        return (window.location.href = "../match-sucess.html");
    } else {
        let container = document.getElementById("success-rate");
        let num = document.createElement("p");
        num.setAttribute("id", "chance");
        num.textContent(randomNumber);
        container.appendChild(num);
        return (window.location.href = "../match-fail.html");
    }
    // return randomNumber
}
// console.log(generate());
