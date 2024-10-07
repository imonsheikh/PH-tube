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

//Create load videos function 2 
const loadVideos = () => {

    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
    
}




//Create display videos function 3
const displayVideos = (videos) => {
//    console.log(videos);
const videoContainer = document.getElementById('videos')

videos.forEach(video => {
// console.log(video);
const card = document.createElement('div')
card.classList = "card card-compact"
card.innerHTML = `
 <figure class ="h-[200px] relative" >
    <img
      class ="h-full w-full object-cover"
      src=${video.thumbnail} />
      <span class ="absolute right-2 bottom-2 bg-black text-white rounded p-1">${video.others.posted_date}</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">

   <div>
     <img class ="rounded-full object-cover w-10 h-10" src=${video.authors[0].profile_picture} alt="" />
   </div>

   <div>
     <h2 class ="font-bold">${video.title}</h2>
     <div class ="flex items-center gap-2" >
     <p class ="text-gray-400">${video.authors[0].profile_name}</p>
         
              
      ${video.authors[0].verified === true? `<img class ="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="" />` : ''}
     
     </div>
     <p></p>
   </div>

  </div>
`

//add card to video container 
videoContainer.append(card)

})
   
}



//Create DisplayCategories function 4
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
loadVideos()