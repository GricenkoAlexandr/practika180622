

const right=document.querySelector('.btnright');
const up=document.querySelector('.btnup');
const left=document.querySelector('.btnleft');
const down=document.querySelector('.btndown');
let squere=document.querySelector('.squere');

let steparr=[];
let step=0;
const maxw=1000;
const maxh=800;

right.addEventListener('click', ()=> {
  if (step<=maxw) {
    step+=50;
  squere.style.marginLeft=step+'px';
  console.log('right');
  } else 
  return;
})

