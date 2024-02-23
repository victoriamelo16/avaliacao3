const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

var urlParams = new URLSearchParams(window.location.search);
var dataAfterQuestionMark = urlParams.get("s");

if (dataAfterQuestionMark == 2){
    container.classList.remove("sign-up-mode");
} else if (dataAfterQuestionMark == 1) {
    container.classList.add("sign-up-mode");
}




