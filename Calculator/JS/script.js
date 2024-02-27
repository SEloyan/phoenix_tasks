const screen = document.getElementById("calcscreen");

let acButton = document.getElementById("AC")
let posNeg = document.getElementById("plus")
let buttonPercent = document.getElementById("percent");
let buttonDiv = document.getElementById("division")
let buttonMul = document.getElementById("multiply");
let buttonSub = document.getElementById("subtract");
let buttonAdd = document.getElementById("addition");
let buttonEqual = document.getElementById("equal")
let buttonfloat = document.getElementById("float") 
let button0 = document.getElementById("zero")
let button00 = document.getElementById("doublezero")
let button1 = document.getElementById("one");
let button2 = document.getElementById("two");
let button3 = document.getElementById("three");
let button4 = document.getElementById("four");
let button5 = document.getElementById("five");
let button6 = document.getElementById("six");
let button7 = document.getElementById("seven");
let button8 = document.getElementById("eight");
let button9 = document.getElementById("nine");

acButton.addEventListener("click", () => {
    if (screen.value !== "0") {
        screen.value = 0;
    }
})

posNeg.addEventListener("click", () => {
    let currentValue = parseFloat(screen.value);
    if (!isNaN(currentValue)) {
        screen.value = -currentValue; 
    }
});

buttonAdd.addEventListener("click", () => {
    screen.value += "+";
});

buttonSub.addEventListener("click", () => {
    screen.value += "-";
});

buttonMul.addEventListener("click", () => {
    screen.value += "*";
});

buttonDiv.addEventListener("click", () => {
    screen.value += "/";
});

buttonfloat.addEventListener("click", () => {
    screen.value += "."
})

buttonPercent.addEventListener("click", () => {
    let currentValue = parseFloat(screen.value);
    if (!isNaN(currentValue)) {
        screen.value = currentValue / 100;
    }
});

buttonEqual.addEventListener("click", () => {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
});

button0.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 0
    } else {
        screen.value += "0"
    }
});
button00.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 0
    } else {
        screen.value += "00"
    }
});

button1.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 1
    } else {
        screen.value += "1"
    }
});
button2.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 2;
    } else {
        screen.value += "2"
    }
});
button3.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 3;
    } else {
        screen.value += "3"
    }
});
button4.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 4;
    } else {
        screen.value += "4"
    }
});
button5.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 5;
    } else {
        screen.value += "5"
    }
});
button6.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 6;
    } else {
        screen.value += "6"
    }
});
button7.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 7;
    } else {
        screen.value += "7"
    }
});
button8.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 8;
    } else {
        screen.value += "8"
    }
});
button9.addEventListener("click", () => {
    if (screen.value === "0" || screen.value === "number") {
        screen.value = 9;
    } else {
        screen.value += "9"
    }
});
