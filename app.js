let scrolling =  document.querySelector(".scroll");
let x  = 0 ;
window.addEventListener("scroll",(e)=>{
x  = Math.floor( window.scrollY / window.scrollMaxY *100);
scrolling.style.right=  `${100- x}%`

})
