const number = document.querySelector("input")
const btn = document.querySelector("button")
const answer = document.querySelector("h2")

btn.onclick = function() {
    const exam = number.value % 2 == 0 ;
    if (exam) {
        answer.textContent = "Число четное"
    } else {
        answer.textContent = "Число нечетное"
    }
}