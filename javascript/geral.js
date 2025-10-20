const barra_menu = document.querySelector("#barra_menu");

const menu = document.querySelector("#menu");

barra_menu.addEventListener("click", () => {
    if(menu.classList.contains("menu_aberto")) {
        menu.classList.remove("menu_aberto");
        menu.classList.add("menu_fechado");
    } else {
        menu.classList.add("menu_aberto");
        menu.classList.remove("menu_fechado");
    }
})