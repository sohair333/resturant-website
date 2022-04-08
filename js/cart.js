const productlist =document.querySelector('.product-list');
const cartContainer =document.querySelector('.cart-container'); 
const cartList =document.querySelector('.cart-list');
const cartTotlaValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');

let cartItemId=1;


(function eventlisteners(){

    document.getElementById('cart-btn').addEventListener('click',()=>{
        cartContainer.classList.toggle('show-cart-conatiner');
    });
    window.addEventListener('DOMContentLoaded',()=>{
        fetch('products.json')
        .then(Response=>Response.json())
        .then(data=>{
            let html= ``;
            data.forEach(product => {
                html+= `
                    <div class="product-item">
                    <div class="product-img">
                    <img src="${product.imgSrc}" alt="" srcset="">
                    <button type="button" class="add-to-cart-btn">
                        <i class="fas fa-shopping-cart">
                            
                        </i>
                        Add To Cart
                    </button>
                </div>
            
                <div class="product-content">
                    <h3 class="product-name">
                            ${product.name}
                        </h3>
                        <span class="product-category">
                            ${product.category}
                        </span>
                        <p class="product-price">${product.price}</p>
                    </div>
                </div>
                        
                `;
                
            });
            productlist.innerHTML =html;
        }).catch(err=>{
            alert(`user live server or local server`);
        })
    });
    loadCart();

    productlist.addEventListener('click',(e)=>{
       if(e.target.classList.contains('add-to-cart-btn')){
           let product =e.target.parentElement.parentElement;
           getProductInfo(product);
       }
    });
    cartList.addEventListener('click',deleteProduct);

})();
function deleteProduct(e){
    let cartItem;
    if(e.target.tagName === "BUTTON"){
        cartItem =e.target.parentElement;
        cartItem.remove();
    }
    else if(e.target.tagName === "I"){
        cartItem = e.target.parentElement;
        cartItem.remove();

    }
    let products =getProductFromLocalStorage();
    let upbateProducts = products.filter(product=>{
        return product.id ===parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products',JSON.stringify(upbateProducts));
    updateCartInfo();
}

function getProductInfo(product){
    let productInfo ={
        id:cartItemId,
        imgSrc:product.querySelector('.product-img img').src,
        name:product.querySelector('.product-name').textContent,
        category:product.querySelector('.product-category').textContent,
        price:product.querySelector('.product-price').textContent
    } 
    cartItemId++;
    addToCart(productInfo);
    saveProductToLocalStorage(productInfo);
}

function addToCart(product){
    const cartItem =document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id',`${product.id}`);
    cartItem.innerHTML=`
    
            <img src="${product.imgSrc}" alt="">
            <div class="cart-item-info">
                <h5 class="cart-item-name">${product.name}</h5>
                <span class="cart-item-price">${product.price}
                </span>
            </div>
            <button type="button" class="cart-item-del-btn">
                <i class="fas fa-times"></i>
            </button>
    
    `;
    cartList.appendChild(cartItem);
   
}
function saveProductToLocalStorage(product){
    let products = getProductFromLocalStorage();
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
    updateCartInfo();
}
function getProductFromLocalStorage(){
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}
function loadCart(){
    let products =getProductFromLocalStorage();
    if(products.length <1 ){
        cartItemId=1;

    }else{
        cartItemId =products[products.length -1].id;
        cartItemId++;
    }
    products.forEach(product=>addToCart(product));
    updateCartInfo();
    
}
function updateCartInfo(){

    let cartInfo = findCartInfo();
    cartCountInfo.textContent =cartInfo.productCount;
    cartTotlaValue.textContent = cartInfo.total;

};


function findCartInfo(){

let products =getProductFromLocalStorage();
let total = products.reduce((acc,product)=>{
    let price =parseFloat(product.price.substr(1));
    return acc+=price;
},0);
return {

total:total.toFixed(2),
productCount:products.length

}


};

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
