

const ul = document.getElementById("tree")


ul.addEventListener("click",(e)=>{
    /* console.log(e.target.children) */

e.target.children.length>0 && e.target.children[0].classList.toggle("hide")
    
    
})