// window.alert("Carregou");
const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");


if(btnMenu){
    btnMenu.addEventListener('click', function(){
        btnMenu.classList.toggle('active');
    })
}