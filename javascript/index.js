// Este arquivo é destinado apenas para definir as rotas para as ferramentas disponíveis na aplicação, quando o usuário clicar na <div> respectiva.
const ferramentas = [...document.querySelectorAll(".ferramenta")];

const links_ferramentas = ["html/conversor_velocidade.html", "html/conversor_temperatura.html", "html/conversor_moedas.html", "html/calculadora_media.html", "html/calculadora_juros.html", "html/calculadora_imc.html"];

ferramentas.map((ferramenta) => {
    const link_atual = ferramentas.indexOf(ferramenta);

    ferramenta.addEventListener("click", () => {
        let acessar_ferramenta = confirm("Para acessar esta ferramenta, clique em 'OK'.");

        if(acessar_ferramenta) {
            window.location.href = links_ferramentas[link_atual];
        }
    })
})