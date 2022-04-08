const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const mealDetailsContent = document.querySelector('.meal-details-content');


searchBtn.addEventListener('click',getMealList);
mealList.addEventListener('click',getMealRecipe);
recipeCloseBtn.addEventListener('click',()=>{
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

function getMealList()
{
    let searchInputText = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(Response =>Response.json())
    .then(data=>{
        let html ='';
        if(data.meals)
        {
            data.meals.forEach(meal => {
                html+= `
                    <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="" srcset="">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                   </div>
                    
                `;
            });
            mealList.classList.remove('notFound');
        }
        else{
            html=`Sorry We can't found Your Recipe!`;
            mealList.classList.add('notFound');
        }
        mealList.innerHTML= html;
    })
}
function getMealRecipe(e)
{
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(Response=>Response.json())
        .then(data=>{
            mealResipeModal(data.meals);
        });
    }
}

function mealResipeModal(meal){
    
    meal = meal[0];
    let html =`
            <h2 class="recipe-title">
               ${meal.strMeal}
            </h2>
            <p class="recipe-category">
               ${meal.strCategory}
            </p>
            <div class="recipe-instruct">
                <h3>
                    Instructions:
                </h3>
                <p>${meal.strInstructions}</p>
            </div>
            <div class="recipe-meal-img">
                <img src="${meal.strMealThumb}" alt="" srcset="">
            </div>
            <div class="recipe-link">
                <a href="#" target="_blank">Watch Video</a>
            </div>
    
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
    
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






