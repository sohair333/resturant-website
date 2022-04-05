/////////////////login form
const loginBtn =document.querySelector('.login-btn');
const cover =document.querySelector('.cover');
const overlay =document.querySelector('.overlay');


loginBtn.addEventListener('click',()=>{
    cover.classList.toggle('card');
  
});

// overlay.addEventListener('click',()=>{
//     if(cover.classList.includes('card')){
//         cover.classList.remove('card');
//         cover.classList.add('ret');
        
//     }

// });
