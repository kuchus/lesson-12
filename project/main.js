const btnOrderCall = document.querySelector(".banner__buttom :nth-child(2)")
const windowOrderCall = document.querySelector(".banner__order-call")
const exitOrderCall = document.querySelector(".banner__call i")
const checkbox = document.querySelector(".banner__checkbox input")
const name = document.querySelector(".banner__name input")
const phoneNumber = document.querySelector(".banner__number input")
const leaveRequest = document.querySelector(".banner__call button")


btnOrderCall.onclick = function () {
    windowOrderCall.style.display = "flex"
}
exitOrderCall.onclick = function () {
    windowOrderCall.style.display = "none"
}

leaveRequest.onclick = function () {
    if(name.value != "" && phoneNumber.value != "" && checkbox.checked) {
        const nameField = document.querySelector(".banner__name")
        nameField.style.display = "none"
        const numberField = document.querySelector(".banner__number")
        numberField.style.display = "none"
        const foneWindow = document.querySelector(".banner__call")
        foneWindow.style.backgroundColor = "rgba(254, 200, 11, 1)"
        const h2 = document.querySelector(".banner__call h2")
        h2.style.marginTop = "140px"
        h2.textContent = "Успешно!"
        const p = document.querySelector(".banner__call p")
        p.textContent = "Ваши данные направлены нашему менеджеру. Мы свяжемся с вами в ближайшее время!"
        const checkboxField = document.querySelector(".banner__checkbox")
        checkboxField.style.display = "none"
        leaveRequest.style.border = "2px solid rgba(0, 0, 0, 1)"
        leaveRequest.onmouseover = function () {
            leaveRequest.style.backgroundColor = "rgba(0, 0, 0, 1)"
            leaveRequest.style.color = "rgba(255, 255, 255, 1)"
        }

        leaveRequest.onmouseout = function () {
            leaveRequest.style.backgroundColor = "rgba(254, 200, 11, 1)"
            leaveRequest.style.color = "rgba(0, 0, 0, 1)"

        }

        leaveRequest.textContent = "Закрыть"
        leaveRequest.style.marginTop = "0px"
        leaveRequest.onclick = function () {
            windowOrderCall.style.display = "none"
        }
    }
}

/*
checkbox.onchange = function () {
    if(name.value != "" && phoneNumber != "") {
        leaveRequest.onclick = function () {
            const nameField = document.querySelector(".banner__name")
            nameField.style.display = "none"
        }
    }
} 
*/