const password = "123";
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
};
const passwordInputDisabler = () => {
    document.querySelector(".line").setAttribute("disabled","true");
    document.querySelector(".input-checkbox").setAttribute("disabled","true");
};
const checkboxChecker = () => {
    let flag = true;
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(element => {
        if (!element.checked)
            flag = false;
    })
    return flag;
};
const leverChecker = () => {
    let flag = true;
    let levers = document.querySelectorAll(".panel-levers");
    levers.forEach(element => {
        if (element.value < "5") {
            flag = false;
        }
    })
    return flag;
};
document.querySelectorAll(".checkbox").forEach(element => element.onchange =function(){
    if(checkboxChecker() && leverChecker()) {
        document.querySelector(".launch-button").removeAttribute("disabled");
    }
});
document.querySelectorAll(".panel-levers").forEach(element => element.onchange= function(){
    if(checkboxChecker() && leverChecker()) {
        document.querySelector(".launch-button").removeAttribute("disabled");
    }
});
document.querySelector(".launch-button").addEventListener("click", function (){
    let rocket = document.querySelector(".rocket");
    let parameterLeft = Number(document.getElementById("first-lever").value) - 2*Number(document.getElementById("third-lever").value) + Number(document.getElementById("fifth-lever").value);
    let parameterBottom = Number(document.getElementById("second-lever").value) + Number(document.getElementById("fourth-lever").value);
    rocket.animate([
        {
            left: '32%',
            bottom: '40%'
        },
        {
            left: String(150+3*parameterLeft)+'%',
            bottom: '150%'
        }
    ], {
        duration: 200*(21-parameterBottom),
        iterations: 1
    })
    document.querySelector(".launch-button").setAttribute("disabled", "true");
    setTimeout(() => {rocket.remove();},2000)
});

