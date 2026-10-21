const root=document.documentElement;
const toggle=document.getElementById("color-changer");
const menu=document.getElementById("theme-menu");
const saved=localStorage.getItem("theme")||"fall";
root.setAttribute("data-theme",saved);
function openMenu(open){
    menu.hidden=!open;
    toggle.setAttribute("aria-expanded",open)
}
toggle.addEventListener("click",(e)=>{
    e.stopPropagation();
    openMenu(menu.hidden);
})