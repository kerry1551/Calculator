let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

let justEvaluated = false;

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                justEvaluated = false;
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                    justEvaluated = true;
                } catch (e) {
                    display.innerText = "Error!";
                }
                break;
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                justEvaluated = false;
                break;
            case "+/-":
                display.innerText = (
                    parseFloat(display.innerText) * -1).toString();
                justEvaluated = false;
                break;

            default:

                if (justEvaluated) {
                    if (/[0-9.]/.test(e.target.innerText)) {
                        display.innerText = e.target.innerText;
                    } else {
                        display.innerText += e.target.innerText;
                    }
                    justEvaluated = false;
                } else {
                    if (display.innerText === "0" && e.target.innerText !== ".") {
                        display.innerText = e.target.innerText;
                    } else {
                        display.innerText += e.target.innerText;
                    }
                }
        }
    });
});
