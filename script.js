function mostrarMensagem(){

alert("O futuro do agronegócio depende da união entre tecnologia, produção e preservação ambiental.");

}

window.addEventListener("scroll", ()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="#145214";

}else{

header.style.background="#1b5e20";

}

});