

let keypad = (value) => {
    if (document.getElementById("display-screen").innerText == 0) {

        (document.getElementById("display-screen").innerText = value);
    } else {
        console.log(document.getElementById("display-screen").innerText += value);

    }
}


let gone = () => {
    document.getElementById("display-screen").innerText = 0;
}


let e = () => {
    var result = document.getElementById("display-screen").innerText
    document.getElementById("display-screen").innerText = eval(result);
}
