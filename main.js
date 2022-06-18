

const right=document.querySelector('.btnright');
const up=document.querySelector('.btnup');
const left=document.querySelector('.btnleft');
const down=document.querySelector('.btndown');
let squere=document.querySelector('.squere');

let step=0;
const maxw=1100;
const maxh=650;

right.addEventListener('click', ()=> {
  if (step<=maxw) {
    step+=50;
  squere.style.left=step+'px';
  return step;
  } else 
  return;
})

left.addEventListener('click', ()=> {
  if (step>=50) {
    step-=50;
  squere.style.left=step+'px';
  } else 
  return;
})

down.addEventListener('click', ()=> {
  if (step<=maxh) {
    step+=50;
  squere.style.top=step+'px';
  return step;
  } else 
  return;
})

up.addEventListener('click', ()=> {
  if (step>=50) {
    step-=50;
  squere.style.top=step+'px';
  } else 
  return;
})