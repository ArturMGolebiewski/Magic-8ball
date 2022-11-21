const ball = document.querySelector("img[src='https://cdn.pixabay.com/photo/2012/04/16/11/05/ball-35516_960_720.png']")
const input = document.querySelector("input")
const answer = document.querySelector(".answer")
const error = document.querySelector(".error")

const answerArr = ["No", "Maybe", "It's classified.", "Absolutely.", "Not what i would do but when has that stopped you?", "Do you REALLY want me to answer that?"]

const shakeBall = () => {
    ball.classList.add("shake-animation")
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== "" && input.value.slice(-1) === "?") {
        giveAnswer()
        error.textContent = ""
    } else if (input.value !== "" && input.value.slice(-1) !== "?" ) {
        error.textContent = "That is not a question(it needs to include question mark '?')."
        answer.textContent = ""
    } else {
        error.textContent = "You didn't ask anything"
        answer.textContent = ""
    }
    ball.classList.remove("shake-animation")
}

const giveAnswer = () => {
    const number = Math.floor(Math.random() * 6)
    answer.innerHTML = `${answerArr[number]}`
}

ball.addEventListener('click', shakeBall)