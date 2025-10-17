const temperatura_inicial = document.querySelector("#temperatura_inicial");

const escala_atual = document.querySelector("#escala_atual");

const escala_conversao = document.querySelector("#escala_conversao");

const btn_converter_temperatura = document.querySelector("#btn_converter_temperatura");

let zero_absoluto = -273.15;

escala_atual.addEventListener("change", () => {
    if(escala_atual.value == "Celsius") {
        zero_absoluto = -273.15;
    }

    if(escala_atual.value == "Farenheit") {
        zero_absoluto = -459.67;
    }

    if(escala_atual.value == "Kelvin") {
        zero_absoluto = 0;
    }
})

escala_conversao.addEventListener("change", () => {
    btn_converter_temperatura.textContent = `Converter para ${escala_conversao.value}`;
})

btn_converter_temperatura.addEventListener("click", () => {
    let temperatura_convertida;

    if(escala_atual.value == "Celsius") {
        if(escala_conversao.value == "Farenheit") {
            temperatura_convertida = ((parseInt(temperatura_inicial.value) * 9) + (5 * 32)) / 5;
        } else {
            temperatura_convertida = parseInt(temperatura_inicial.value) + 273;
        }
    } else if(escala_atual.value == "Farenheit") {
        if(escala_conversao.value == "Celsius") {
            temperatura_convertida = ((parseInt(temperatura_inicial.value) * 5) - (32 * 5)) / 9;
        } else {
            temperatura_convertida = (((parseInt(temperatura_inicial.value) * 5) - (32 * 5)) + (273 * 9)) / 9;
        }
    } else {
        if(escala_conversao.value == "Celsius") {
            temperatura_convertida = parseInt(temperatura_inicial.value) - 273;
        } else {
            temperatura_convertida = (((parseInt(temperatura_inicial.value) * 9) - (273 * 9)) + (32 * 5)) / 5;
        }
    }

    document.querySelector("#resposta_temperatura_convertida").textContent = temperatura_convertida;

    try {
        if(escala_atual.value == escala_conversao.value) throw "É impossível converter uma temperatura para a escala que ela já está.";

        if(!temperatura_inicial.value) throw "Defina um valor para a temperatura pré conversão.";

        if(temperatura_inicial.value < zero_absoluto) throw `Temperatura inválida para ${escala_atual.value}, pois ultrapassa o valor de ${zero_absoluto}`;
    } catch(erro) {
        document.querySelector("#resposta_temperatura_convertida").textContent = erro;
    }
})