let buttonlist = document.querySelectorAll(".dropdown")
let droplist = document.querySelectorAll(".list")
for (let i = 0; i < buttonlist.length; i++) {
    buttonlist[i].addEventListener("click", function () {
        droplist[i].classList.toggle("drop")
    })

}