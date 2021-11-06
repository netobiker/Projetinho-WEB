let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//chama a função(opcional)
});

searchBtn.addEventListener("click", ()=>{ // abre o sidebar quando vc clica no icone de busca 
  sidebar.classList.toggle("open");
  menuBtnChange(); //chama a função(opcional)
});

// para mudar o botão do sidebar (opcional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//substitui os iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//substitui os iocns class
 }
}
