function operacao() {
    var a = Number(document.getElementById("numero1").value);
    var b = Number(document.getElementById("numero2").value);
    var op = document.getElementById("operacao").value;
    var mensagem = "";
    var contador = 0;
    if(document.getElementById("numero1").value === ""){
        mensagem+="Preencha o campo número 1 \n";
        contador++;
    }
    if(document.getElementById("numero2").value === ""){
        mensagem+="Preencha o campo número 2";
        contador++;
    }

    if(contador !== 0){
        alert(mensagem);
        return "";
    }
    
    
    
    switch (op) {
        case "somar":
            document.getElementById("resultado").value = somar(a, b);
            break;
        case "diferenciar":
            document.getElementById("resultado").value = diferenciar(a, b);
            break;
        case "multiplicar":
            document.getElementById("resultado").value = multiplicar(a, b);
            break;
        case "dividir":
            document.getElementById("resultado").value = dividir(a, b);
            break;
    }

}

function somar(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

function diferenciar(x, y) {
    return x - y;
}

function dividir(x, y) {
    if(y===0){
        alert("NÃO PODE DIVIDIR POR ZERO!!!");
        return "";
    }
    return x / y;
}

function limpar(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}

