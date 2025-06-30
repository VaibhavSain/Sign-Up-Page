const SignBtn = document.querySelector("#SignBtn");
const SignBtn2 = document.querySelector("#SignBtn2");
const con1 = document.querySelector("#con1");
const con2 = document.querySelector("#con2");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const myAudio = document.querySelector("#myAudio");
const failAudio = document.querySelector("#failAudio");
SignBtn.addEventListener("click", () => {

    con1.style.display = "none";
    con2.style.display = "block";
})
SignBtn2.addEventListener("click", () => {
    if (name.value.length > 1 && email.value.length > 1 && password.value.length > 1) {
        myAudio.play();
        show();
    }
    else {
        failAudio.play();
        alert("Fill the Form");
    }
});

function show() {
    alert("Congratutlations You have Created Account");

}