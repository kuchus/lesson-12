const points = document.querySelector("input")
const btn = document.querySelector("button")
const grade = document.querySelector("h2")

btn.onclick = function() {
    const examin = 0 <= points.value && points.value <= 100;
    const great = 90 <= points.value && points.value <= 100;
    const fine = 75 <= points.value && points.value <= 89;
    const satisfac = 50 <= points.value && points.value <= 74;
    const notSatisfac = 0 <= points.value && points.value <= 49;

    if(examin) {
        if (great) {
            grade.textContent = "Отлично"
        } else if (fine) {
            grade.textContent = "Хорошо"
        } else if (satisfac) {
            grade.textContent = "Удовлетворительно"
        } else if (notSatisfac) {
            grade.textContent = "Неудовлетворительно"
        }
    } else {
        grade.textContent = "Введите корректное количество баллов"
    }
}