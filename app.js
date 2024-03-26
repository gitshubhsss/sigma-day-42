let heading=document.querySelector('h1');
heading.classList.add("center");
let img=document.querySelector('img')
let imgs=document.querySelectorAll('img');

for(i=0;i<imgs.length;i++){
    imgs[i].classList.add("images-size")
}

let para=document.querySelector('p');
para.classList.add("para")
para.style.color="blue";

let boxes=document.querySelectorAll('.box li')
for(i=0;i<boxes.length;i++){
    boxes[i].style.color="red";
}
let box=document.querySelector(".box")
let listparent=document.querySelector("ul");
