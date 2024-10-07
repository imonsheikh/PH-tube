// console.log("viddoo");
//1 - Fetch, load and show categories in html
//2-

//time function 
function getTimeString(time){
  //get hour and rest seconds
  const hour = parseInt(time / 3600)
  let remainingSecond = time % 3600
  const minute = parseInt(remainingSecond / 60)
  remainingSecond = remainingSecond % 60
   return `${hour} hour ${minute} minute ${remainingSecond} second ago`
}
// console.log(getTimeString(434014));

//activ button function
const removeActiveClass = () =>{
const buttons = document.getElementsByClassName('category-btn')
// console.log(buttons);
for(let btn of buttons){
  btn.classList.remove('active')
}

}



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


//create load categories videos function 3 
const loadCategoriesVideos = (id) => {
// alert(id)
    //fetch the data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
      //sobaike activ class remove koraw
      removeActiveClass()


      //id er class ke active koro
      const activeBtn = document.getElementById(`btn-${id}`)
      // console.log(activeBtn)
      activeBtn.classList.add('active')
      
      displayVideos(data.category)
    })
    .catch(error => console.log(error))
    
}

//load details videos
const loadDetails = async(videoId) =>{
// console.log(videoId);
const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
const res = await fetch(uri)
const data = await res.json()
// console.log(data);
displayDetails(data.video)

}


//display details videos
const displayDetails = (video) =>{
// console.log(video);
const detailContainer = document.getElementById('modal-content')
detailContainer.innerHTML = `
<img src=${video.thumbnail}  alt="" />
<p>${video.description}</p>
`

//way-1
// document.getElementById('showModalData').click()

//way-2
document.getElementById('customModal').showModal()


}




//Create display videos function 3
const displayVideos = (videos) => {
   console.log(videos);
const videoContainer = document.getElementById('videos')
videoContainer.innerHTML = ""

if(videos.length === 0){
  videoContainer.classList.remove('grid')
  videoContainer.innerHTML = `
  <div class ="min-h-[300px] flex flex-col gap-5 justify-center items-center border">
  <img src="../assets/Icon.png" alt="" />
  <h2 class ="text-center font-bold text-xl text-slate-600">
  No content here in this category
  </h2>
  </div>
  `
  return
}else{
  videoContainer.classList.add('grid')
}

videos.forEach(video => {
// console.log(video);
const card = document.createElement('div')
card.classList = "card card-compact"
card.innerHTML = `
 <figure class ="h-[200px] relative" >
    <img
      class ="h-full w-full object-cover"
      src=${video.thumbnail} />

       ${
        video.others.posted_date?.length === 0? "" :
        `<span class ="absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`

       }
    
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
     <p><button onclick ="loadDetails('${video.video_id}')"  class ="btn btn-sm btn-error">Details</button></p>
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
    // console.log(item);

    //create a button
    const buttonContainer = document.createElement('div')
    buttonContainer.innerHTML = `
    <button id ="btn-${item.category_id}" onclick ="loadCategoriesVideos(${item.category_id})" class ="btn category-btn">
     ${item.category}
    </button>
    `
    // button.classList = "btn"
    // button.innerText = item.category
    // button.onclick = alert('wrong')

    //add button to category container
    // categoriesContainer.append(button)
    categoriesContainer.append(buttonContainer)
    
})
 
}




loadCatagories()
loadVideos()