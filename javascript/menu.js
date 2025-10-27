const barra_menu = document.querySelector("#barra_menu");

const menu = document.querySelector("#menu");

const links_internos = [...document.querySelectorAll(".link_interno")];

function habilitar_visibilidade_menu() {
    menu.classList.add("menu_aberto");
    menu.classList.remove("menu_fechado");
}

function desabilitar_visibilidade_menu() {
    menu.classList.add("menu_fechado");
    menu.classList.remove("menu_aberto");
}

barra_menu.addEventListener("click", () => {
    if(menu.classList.contains("menu_aberto")) {
        desabilitar_visibilidade_menu();
    } else {
        habilitar_visibilidade_menu();
    }
})

links_internos.map((link) => {
    link.addEventListener("click", () => {
        desabilitar_visibilidade_menu();
    })
})