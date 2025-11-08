const velocidade_inicial = document.querySelector("#velocidade_inicial");

const escala_inicial_velocidade = document.querySelector("#escala_inicial_velocidade");

const escala_conversao_velocidade = document.querySelector("#escala_conversao_velocidade");

const btn_converter_velocidade = document.querySelector("#btn_converter_velocidade");

escala_conversao_velocidade.addEventListener("change", () => {
    btn_converter_velocidade.textContent = `Converter para ${escala_conversao_velocidade.value}`;
})

btn_converter_velocidade.addEventListener("click", () => {
    let velocidade_convertida;
    const unidade_medida = escala_conversao_velocidade.value;

    if(escala_inicial_velocidade.value == "km/h") {
        if(escala_conversao_velocidade.value == "mph") {
            velocidade_convertida = (parseInt(velocidade_inicial.value) * 0.621371).toFixed(2);
        } else {
            velocidade_convertida = (parseInt(velocidade_inicial.value) * 0.539957).toFixed(2);
        }
    } else if(escala_inicial_velocidade.value == "mph") {
        if(escala_conversao_velocidade.value == "km/h") {
            velocidade_convertida = (parseInt(velocidade_inicial.value) / 0.621371).toFixed(0);
        } else {
            velocidade_convertida = (parseInt(velocidade_inicial.value) * 0.868976).toFixed(2);
        }
    } else {
        if(escala_conversao_velocidade.value == "km/h") {
            velocidade_convertida = (parseInt(velocidade_inicial.value) / 0.539957).toFixed(0);
        } else {
            velocidade_convertida = (parseInt(velocidade_inicial.value) * 1.15078).toFixed(2);
        }
    }

    alert(velocidade_convertida);
})