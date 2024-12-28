const numberDays = document.querySelector("input")
const btn = document.querySelector("button")
const answer = document.querySelector("h2")




btn.onclick = function() {
    const monday = numberDays.value == 1
    const tuesdy = numberDays.value == 2
    const wenday = numberDays.value == 3
    const thursday = numberDays.value == 4
    const friday = numberDays.value == 5
    const saturday = numberDays.value == 6
    const sunday = numberDays.value == 7
    const compareDays = numberDays.value <= 7 ;
   if(compareDays) {
    if (monday) {
        answer.textContent = "Понедельник"
    } else if (tuesdy) {
        answer.textContent = "Вторник"
    } else if (wenday) {
        answer.textContent = "Среда"     
    } else if (thursday) {
        answer.textContent = "Четверг"
    } else if (friday) {
        answer.textContent = "Пятница"
    } else if (saturday) {
        answer.textContent = "Субота"
    } else if (sunday) {
        answer.textContent = "Воскресенье"
    }
   } else {
       answer.textContent = "Ошибка:введите число от 1 до 7"
   }
}