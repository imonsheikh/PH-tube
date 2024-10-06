// console.log("viddoo");
//1 - Fetch, load and show categories in html
//2-


//Create loadCategories function 1
const loadCatagories = () => {

    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
    
}


//Create DisplayCategories function 2
const displayCategories = (categories) => {
//  console.log(categories);
const categoriesContainer = document.getElementById('categories')


categories.forEach( (item) => {
    console.log(item);

    //create a button
    const button = document.createElement('button')
    button.classList = "btn"
    button.innerText = item.category

    //add button to category container
    categoriesContainer.append(button)
    
})
 
}


loadCatagories()