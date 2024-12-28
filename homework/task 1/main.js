const numberDays = document.querySelector("input")
const btn = document.querySelector("button")
const answer = document.querySelector("h2")

btn.onclick = function() {
    const compareDays = numberDays.value <= 7 ;
    console.log(compareDays)
    if(compareDays) {
        const monday = numberDays.value == 1
        if(monday) {
            answer.textContent = "Понедельник"
        } else {
            const tuesdy = numberDays.value == 2
            if(tuesdy) {
                answer.textContent = "Вторник"
            } else {
                const wenday = numberDays.value == 3
                if(wenday) {
                    answer.textContent = "Среда"
                } else {
                    const thursday = numberDays.value == 4
                    if(thursday) {
                        answer.textContent = "Четверг"
                    } else {
                        const friday = numberDays.value == 5
                        if(friday) {
                            answer.textContent = "Пятница"
                        } else {
                            const saturday = numberDays.value == 6
                            if(saturday) {
                                answer.textContent = "Субота"
                            } else {
                                const sunday = numberDays.value == 7
                                if(sunday) {
                                    answer.textContent = "Воскресенье"
                                }
                            }
                        }            
                    }
                }
                console.log(wenday)
            }
            
        }
    } else {
        answer.textContent = "Ошибка:введите число от 1 до 7"
    }
}