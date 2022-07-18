const password = "TrustNo1";
document.querySelector(".input-checkbox").addEventListener("click", function(){
    let userPassword = document.querySelector(".line").value;
    if (password === userPassword) {
        enabler();
        passwordInputDisabler();
    }
});
const enabler = () => {
    let temp = document.querySelectorAll(".panel-levers");
    temp.forEach(element => element.disabled = false);
    temp = document.querySelectorAll(".checkbox");
    temp.forEach(element => element.disabled = false);
    document.querySelector(".launch-button").disabled = false;
}
const passwordInputDisabler = () => {
    document.querySelector(".line").setAttribute("disabled","true");
    document.querySelector(".input-checkbox").setAttribute("disabled","true");
}
document.querySelectorAll(".checkbox").("change", function(){
    ready++;
})

