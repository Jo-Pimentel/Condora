const temperatura_inicial = document.querySelector("#temperatura_inicial");

const escala_atual = document.querySelector("#escala_atual");

const escala_conversao = document.querySelector("#escala_conversao");

const btn_converter_temperatura = document.querySelector("#btn_converter_temperatura");

let zero_absoluto = -273.15, img_classificacao_temperatura;

function classificar_temperatura(param_escala, param_temperatura) {
    if(param_escala.value == "Celsius") {
        if(param_temperatura > 25) {
            
        }
    }
}

escala_atual.addEventListener("change", () => {
    if(escala_atual.value == "Celsius") {
        zero_absoluto = -273.15;
    } else if(escala_atual.value == "Farenheit") {
        zero_absoluto = -459.67;
    } else {
        zero_absoluto = 0;
    }
})

escala_conversao.addEventListener("change", () => {
    btn_converter_temperatura.textContent = `Converter para ${escala_conversao.value}`;
})

btn_converter_temperatura.addEventListener("click", () => {
    let temperatura_convertida, simbolo_escala;

    if(escala_atual.value == "Celsius") {
        if(escala_conversao.value == "Farenheit") {
            temperatura_convertida = ((parseInt(temperatura_inicial.value) * 9) + (5 * 32)) / 5;

            simbolo_escala = "°F";
        } else {
            temperatura_convertida = parseInt(temperatura_inicial.value) + 273;

            simbolo_escala = "K";
        }
    } else if(escala_atual.value == "Farenheit") {
        if(escala_conversao.value == "Celsius") {
            temperatura_convertida = ((parseInt(temperatura_inicial.value) * 5) - (32 * 5)) / 9;

            simbolo_escala = "°C";
        } else {
            temperatura_convertida = (((parseInt(temperatura_inicial.value) * 5) - (32 * 5)) + (273 * 9)) / 9;

            simbolo_escala = "K";
        }
    } else {
        if(escala_conversao.value == "Celsius") {
            temperatura_convertida = parseInt(temperatura_inicial.value) - 273;

            simbolo_escala = "°C";
        } else {
            temperatura_convertida = (((parseInt(temperatura_inicial.value) * 9) - (273 * 9)) + (32 * 5)) / 5;

            simbolo_escala = "°F";
        }
    }

    document.querySelector("#conversao").textContent = temperatura_convertida + simbolo_escala;

    try {
        if(escala_atual.value == escala_conversao.value) throw "É impossível converter uma temperatura para a escala que ela já está.";

        if(!temperatura_inicial.value) throw "Defina um valor para a temperatura pré conversão.";

        if(temperatura_inicial.value < zero_absoluto) throw `Temperatura inválida para ${escala_atual.value}, pois ultrapassa o valor de ${zero_absoluto}`;
    } catch(erro) {
        document.querySelector("#conversao").textContent = erro;
    }
})