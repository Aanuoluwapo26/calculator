

let all = (value) => {
    if (document.getElementById("display-screen").innerText == 0) {

        console.log(document.getElementById("display-screen").innerText = value);
    } else {
        document.getElementById("display-screen").innerText += value;

    }
}
let clear = () => {
    document.getElementById("display-screen").innerText = 0;
}


let e = () => {
    var result = document.getElementById("display-screen").innerText
    document.getElementById("display-screen").innerText = eval(result);
}

