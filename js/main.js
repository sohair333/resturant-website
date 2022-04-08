/////counter
let countDownDate = new Date('Dec 31, 2022 23:55:55').getTime();

let counter =setInterval(()=>{
    let dateNow = new Date().getTime();

    let dateDiff =countDownDate - dateNow ;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 *24));
    let hours =Math.floor((dateDiff % (1000 * 60 * 60 *24))/(1000*60*60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60))/(1000*60));
    let seconds =Math.floor((dateDiff % (1000 * 60))/(1000));

    document.querySelector('.Days').innerHTML =days<10?`0${days}`:days;
    document.querySelector('.Hours').innerHTML =hours<10?`0${hours}`:hours;
    document.querySelector('.Minutes').innerHTML =minutes<10? `0${minutes}`:minutes;
    document.querySelector('.Seconds').innerHTML =seconds <10 ? 
    `0${seconds}`:seconds;
    if(dateDiff<0)
    {
        clearInterval(counter);
    }
    

},1000);

//////////////////////////////filter menu

(function(){

    const buttons =document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.item-store');

    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            const filter =e.target.dataset.filter;

            storeImages.forEach((item)=>{
                if(filter === 'all')
                {
                    item.style.display = 'block';
                }
                else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    }else{
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}());

///////////////////chief section
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   // Or with jQuery

// $(document).ready(function(){
//     $('.carousel').carousel({
//         padding:200
//     });
//     autoplay();
//     function autoplay(){
//         $('.carousel').carousel('next');
//         setTimeout(autoplay,4000);
//     }
//   });
//////////////////button of book table effect

const btn =document.querySelector('.btn1');
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x' , x +'px');
    btn.style.setProperty('--y' , y +'px');
}
///////////////////////dark theme
const iconDarkTheme =document.getElementById('icon');
iconDarkTheme.addEventListener('click',()=>{

    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        iconDarkTheme.src ="assests/img/icons/sun.png";
    }
    else{
        iconDarkTheme.src="assests/img/icons/moon.png";
    }
});
///////////scroll top button
let scrollBtn =document.querySelector('.scroller');
window.onscroll =function(){
   
    this.scrollY >= 1000 ? scrollBtn.classList.add("show-scroll") : scrollBtn.classList.remove("show-scroll");
    
};

scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
});
