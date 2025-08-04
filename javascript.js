
function insert(num) {
    document.getElementById('result').value = document.getElementById('result').value + num;
}

function clean() {
    document.getElementById('result').value = '';
}

function clea() {
    const resultado = document.getElementById('result').value;
    document.getElementById('result').value = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    const resultado = document.getElementById('result').value;
    if (resultado) {
        document.getElementById('result').value = eval(resultado);
    } else {
        document.getElementById('result').value = "Nada...";
    }


}

function insert(valor) {
    const visor = document.getElementById("result");
    const ultimoCaracter = visor.value.slice(-1);

    if (valor === "/" && ultimoCaracter === "/") {
        return;
    } if (valor === "+" && ultimoCaracter === "+") {
        return;
    } if (valor === "-" && ultimoCaracter === "-") {
        return;
    } if (valor === "*" && ultimoCaracter === "*") {
        return;
    } if (valor === "." && ultimoCaracter === ".") {
        return;
    }

    visor.value += valor;
}