const temperatura_inicial = document.querySelector("#temperatura_inicial");

const escala_atual = document.querySelector("#escala_atual");

const escala_conversao = document.querySelector("#escala_conversao");

const btn_converter_temperatura = document.querySelector("#btn_converter_temperatura");

const escalas_termometricas = ["Celsius", "Farenheit", "Kelvin"];

const zeros_absolutos = [-273.15, -459.67, 0];

let temperatura_valida, temperatura_convertida;

temperatura_inicial.addEventListener("input", () => {
    let zero_absoluto;

    for(let i = 0; i < 3; i++) {
        if(escalas_termometricas.indexOf(escala_atual.value) == zeros_absolutos.indexOf(zeros_absolutos[i])) {
            zero_absoluto = zeros_absolutos[i];
        }
    }

    if(temperatura_inicial.value < zero_absoluto) {
        setTimeout(() => {
            temperatura_inicial.value = "";

            temperatura_valida = false;

            escala_conversao.setAttribute("disabled", true);
            btn_converter_temperatura.setAttribute("disabled", true);
        }, 1000)
    } else {
        temperatura_valida = true;

        setTimeout(() => {
            escala_conversao.removeAttribute("disabled");
            btn_converter_temperatura.removeAttribute("disabled");
        }, 1000)
    }
})

escala_conversao.addEventListener("change", () => {
    btn_converter_temperatura.textContent = `Converter para ${escala_conversao.value}`;
})

btn_converter_temperatura.addEventListener("click", () => {
    if(escala_atual.value == "Celsius") {
        if(escala_atual.value == "Farenheit") {

        } else {
            temperatura_convertida = parseInt(temperatura_inicial.value) + 273;
            alert(`${temperatura_convertida} K`);
        }
    }
})