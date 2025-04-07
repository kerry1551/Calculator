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
                    const expression = display.innerText;

                    if (/\/0(?!\d)/.test(expression)) {
                        display.innerText = "0";
                    } else {
                        const result = eval(expression);
                        if (result === Infinity || result === -Infinity || isNaN(result)) {
                            display.innerText = "0";
                        } else {
                            display.innerText = result;
                        }
                    }

                    justEvaluated = true;
                } catch (e) {
<<<<<<< HEAD
                    display.innerText = "На ноль делить нельзя";
=======
                    display.innerText = "0";
>>>>>>> 6b25bcf44cb1391b70e0eb39684dc392648dcd5f
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
