let hamburguer = document.querySelector('#menu-hamburguer')
let menuUl = document.querySelector('.menuUl')

document.querySelector('#menu-hamburguer').onclick = function () {
    if (hamburguer.checked) {
        // console.log("Está selecionado!")
        menuUl.style.display = "block"
        
    }else{
        // console.log('Não está selecionado!')
        menuUl.style.display = "none"
    }
}
function menuOff() {
    hamburguer.checked = false
    menuUl.style.display = "none"

}