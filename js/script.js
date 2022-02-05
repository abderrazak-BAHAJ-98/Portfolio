
/* Animet  */
let header = document.getElementById('header-nav')
window.addEventListener('scroll',(event)=>{
   if(Number(document.documentElement.scrollTop) >= 488)
   {
    header.classList.add('cls-header-white');
   }
   else{
    header.classList.remove('cls-header-white');
   }
})