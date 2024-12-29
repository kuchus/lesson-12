const year = document.querySelector("input")
const btn = document.querySelector("button")
const answer = document.querySelector("h2")

btn.onclick = function() {
    const exam = year.value % 4 == 0;
    const exam2 = year.value % 100 == 0;
    const exam3 = year.value % 400 == 0;
    console.log
    if(exam) {
       if(exam2) {
        if(exam3) {
            answer.textContent = "Год высокостный"
        } else {
            answer.textContent = "Год не высокостный"
        }
       } else {
        answer.textContent = "Год высокостный"
       }
    } else {
        answer.textContent = "Год не высокостный"
    }
}