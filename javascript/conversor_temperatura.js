const temperatura_inicial = document.querySelector("#temperatura_inicial");

const escala_atual = document.querySelector("#escala_atual");

const escala_conversao = document.querySelector("#escala_conversao");

const btn_converter_temperatura = document.querySelector("#btn_converter_temperatura");

let zero_absoluto = -273.15, min_quente, min_frio;

function classificar_temperatura(param_temperatura, param_min_quente, param_min_frio) {
    let img_classificacao_temperatura;

    if(param_temperatura >= param_min_quente) {
        img_classificacao_temperatura = "../imagens/conversor_temperatura/temperatura_quente.png";
    } else if(param_temperatura <= param_min_frio) {
        img_classificacao_temperatura = "../imagens/conversor_temperatura/temperatura_fria.png";
    }

    return img_classificacao_temperatura;
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

    if(escala_conversao.value == "Celsius") {
        min_quente = 26;
        min_frio = 20;
    } else if(escala_conversao.value == "Farenheit") {
        min_quente = 79;
        min_frio = 68;
    } else {
        min_quente = 299;
        min_frio = 293;
    }
})

btn_converter_temperatura.addEventListener("click", () => {
    document.querySelector("#classificacao_temperatura").style.display = "inline-block";
    
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

    document.querySelector("#classificacao_temperatura").setAttribute("src", classificar_temperatura(temperatura_convertida, min_quente, min_frio));

    document.querySelector("#resultado_conversao").textContent = `${temperatura_convertida}${simbolo_escala}`;

    try {
        if(escala_atual.value == escala_conversao.value) throw "É impossível converter uma temperatura para a escala que ela já está.";

        if(!temperatura_inicial.value) throw "Defina um valor para a temperatura pré conversão.";

        if(temperatura_inicial.value < zero_absoluto) throw `Temperatura inválida para ${escala_atual.value}, pois ultrapassa o valor de ${zero_absoluto}`;
    } catch(erro) {
        document.querySelector("#classificacao_temperatura").setAttribute("src", "../imagens/interrogacao.png");
        
        document.querySelector("#resultado_conversao").textContent = erro;
    }
})