
let plus = document.querySelector(".plus"),
    javob = document.querySelector(".javob"),
    input = document.querySelector("input");

let a,
    pulsamal = 0;

// let pulsFunc = () => {
//     if (pulsamal === 0) {
//         a = +input.value
//         javob.innerHTML = a
//         input.value = ""
//         pulsamal = 1
//     }
//     else {
//         b = +input.value
//         javob.innerHTML = a + b
//         input.value = ""
//         pulsamal = 0
//     }
//}

let pulsFunc = () => {
    if (input.value !== "") {
        if (pulsamal === 0) {
            a = +input.value;
            javob.innerHTML = a;
            input.value = "";
            pulsamal = 1;
        }
        else {
            javob.innerHTML = +javob.textContent + parseFloat(input.value);
            input.value = "";
        }
    }
    else {
        alert("inputga malumot kiriting")
    }
}

let minusFunc = () => {
    if (input.value !== "") {
        if (pulsamal === 0) {
            a = +input.value;
            javob.innerHTML = a;
            input.value = "";
            pulsamal = 1;
        }
        else {
            javob.innerHTML = +javob.textContent - parseFloat(input.value);
            input.value = "";
        }
    }
    else {
        alert("inputga malumot kiriting")
    }
}

let kopaytruFunc = () => {
    if (input.value !== "") {
        if (pulsamal === 0) {
            a = +input.value;
            javob.innerHTML = a;
            input.value = "";
            pulsamal = 1;
        }
        else {
            javob.innerHTML = +javob.textContent * parseFloat(input.value);
            input.value = "";
        }
    }
    else {
        alert("inputga malumot kiriting")
    }
}

let boluvFunc = () => {
    if (input.value !== "") {
        if (pulsamal === 0) {
            a = +input.value;
            javob.innerHTML = a;
            input.value = "";
            pulsamal = 1;
        }
        else {
            javob.innerHTML = +javob.textContent / parseFloat(input.value);
            input.value = "";
        }
    }
    else {
        alert("inputga malumot kiriting")
    }
}