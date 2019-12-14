const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const pause = document.getElementById("pause")
const heart = document.getElementById("heart")
const likes = document.querySelector(".likes")
const form = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")
let pauseClicked = false


let countUp = setInterval(increaseCounter, 1000);


function increaseCounter() {
    if (pauseClicked == false) {
        let counterNum = parseInt(counter.innerText)
        counterNum += 1
        counter.innerText = counterNum
    }

}

minus.addEventListener("click", function () {
    if (pauseClicked == false) {
        let counterNum = parseInt(counter.innerText)
        counterNum -= 1
        counter.innerText = counterNum
    }
})

plus.addEventListener("click", function () {
    if (pauseClicked == false) {
        let counterNum = parseInt(counter.innerText)
        counterNum += 1
        counter.innerText = counterNum
    }
})

pause.addEventListener("click", function () {
    if (pauseClicked === false) {
        pause.innerText = "resume"
        pauseClicked = true
    } else {
        pause.innerText = "pause"
        pauseClicked = false
    }
})

heart.addEventListener("click", function () {
    if (pauseClicked === false) {
        let id = `number-${counter.innerText}-like`
        let like = document.getElementById(id)
        if (like === null) {
        console.log(like)
            let li = `<li id="number-${counter.innerText}-like">
                    ${counter.innerText} has been liked <span class="counter">1</span> <span class="times">time</span>
                </li>`
            likes.innerHTML += li
        } else {
            let counter = like.querySelector(".counter")
            like.querySelector(".times").innerText = "times"
            likeCount = parseInt(counter.innerText) + 1
            counter.innerText = likeCount           
        }
    }
    
})

form.addEventListener("submit", function(event) {
    event.preventDefault()
    let commentContent = commentInput.value
    let comment = `<div class="comment"><p>${commentContent}</p></div>`
    list.innerHTML += comment
    commentInput.value = ""
})

