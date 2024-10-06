// console.log("viddoo");
//1 - Fetch, load and show categories in html
//2-


//Create loadCategories
const loadCatagories = () => {
    // console.log('load categories created');

    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
    
}

//Create DisplayCategories
const displayCategories = (data) => {
 console.log(data);
 
}


loadCatagories()