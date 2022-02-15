let counter = false;
const screen = document.getElementById('big-result');
const smallScreen = document.getElementById('small-result');
document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('aside').classList.toggle("open");
});
document.querySelector('main').addEventListener('click', () => {
    if (document.querySelector('aside').classList.contains('open')) {
        document.querySelector('aside').classList.toggle("open");
    }
});

function finalResult() {
    return eval(smallScreen.innerHTML + screen.innerHTML);
}
document.getElementById('big-result').innerHTML = " ";
document.querySelectorAll('.numbers').forEach(item => {
    let number = item.innerHTML;
    item.addEventListener('click', () => {
        if (screen.innerHTML === ' ') {
            if (number === ".") {
                return;
            } else {
                screen.innerHTML = number;
            }
        } else if (screen.innerHTML.charAt(screen.innerHTML.length - 1) === ".") {
            if (number === ".") {
                return;
            } else {
                screen.innerHTML += number;
            }
        } else if (number === ".") {
            if (screen.innerHTML.includes(".")) {
                return;
            } else {
                screen.innerHTML += number;
            }
        } else {
            screen.innerHTML += number;
        }
    });
});
document.getElementById('clear').addEventListener('click', () => {
    screen.innerHTML = " ";
    smallScreen.innerHTML = "";
    counter = false;
});
document.querySelectorAll('.operator').forEach(item => {
    let symbol = item.innerHTML;
    item.addEventListener('click', () => {
        if (screen.innerHTML.charAt(screen.innerHTML.length - 1) === "." || screen.innerHTML === ' ') {
            return;
        } else {
            if (!counter) {
                smallScreen.innerHTML += screen.innerHTML + symbol;
                screen.innerHTML = ' ';
                counter = true;
            } else {
                let result = finalResult();
                screen.innerHTML = " ";
                smallScreen.innerHTML = String(result) + symbol;
            }
        }
    });
});
document.getElementById('equal').addEventListener('click', () => {
    if (smallScreen.innerHTML === "" || screen.innerHTML.charAt(screen.innerHTML.length - 1) === ".") {
        return;
    } else if (screen.innerHTML === ' ') {
        screen.innerHTML = smallScreen.innerHTML.slice(0, -1);
        smallScreen.innerHTML = "";
        counter = false;
    } else {
        let result = finalResult();
        screen.innerHTML = String(result);
        smallScreen.innerHTML = "";
        counter = false;
    }
});