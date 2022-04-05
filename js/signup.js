const nextFirst = document.querySelector('.next-first');
const btnNext1 =document.querySelector('.next-1');
const btnPrev1 =document.querySelector('.prev-1');
const btnNext2 =document.querySelector('.next-2');
const btnPrev2 =document.querySelector('.prev-2');
const submitBtn =document.querySelector('.submit');
const btnPrev3 =document.querySelector('.prev-3');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page2');
const page1 = document.querySelector('.page1');
const bullte1 = document.querySelector('.span1');
const bullte2 = document.querySelector('.span2');
const bullte3 = document.querySelector('.span3');
const bullte4 = document.querySelector('.span4');



nextFirst.addEventListener('click',()=>{
   
    page2.style.marginLeft = '10px';
    page1.style.display = 'none';
    // if(!bulltes.classList.contains('active')){
    //     bulltes.classList.add('active');
    //}
    bullte1.classList.add('active');
    
});
submitBtn.addEventListener('click',()=>{
    bullte4.classList.add('active');
})
btnNext1.addEventListener('click',()=>{

    page3.style.marginLeft = '10px';
    page2.style.display = 'none';
   bullte2.classList.add('active');
    
});
btnNext2.addEventListener('click',()=>{

    page4.style.marginLeft = '10px';
    page3.style.display = 'none';
    bullte3.classList.add('active');
});
btnPrev1.addEventListener('click',()=>{

    page1.style.display = '';
    page2.style.display = 'none';
    bullte2.classList.remove('active');
});
btnPrev2.addEventListener('click',()=>{

    page2.style.display = '';
    page3.style.display = 'none';
    bullte3.classList.remove('active');
});
btnPrev3.addEventListener('click',()=>{

    page3.style.display = '';
    page4.style.display = 'none';
    bullte4.classList.remove('active');
});














