//variables for data and api call
var apiCall=new XMLHttpRequest(); 
var apiUrl='https://api.unsplash.com/search/photos/?client_id=f22bd1da324ce68cb2e00b193d9dc58e0d4ecae16b515259c8d3411301882389&page=1&query=kittens&per_page=9';
var images="";
var htmlData="";
var animateObj=document.getElementById('catImage');
var changeFontColor=document.getElementById('title');
//function to be used when I am calling the window load event listener to load the 
//api data into the html document
function imageGallery()
{
    fetch(apiUrl)
    .then(response=>response.json())
    .then(responseAsJson=>{
//looping through the api data results
    for(var i=0; i<responseAsJson.results.length; i++)
    {
//assining the data to a new variable and creating html structure
            images+='<div class="cat"><img src="'+responseAsJson.results[i]["urls"]["regular"]+'" alt="kitten" srcset="'+responseAsJson.results[i]["urls"]["thumb"]+' 160w, '+responseAsJson.results[i]["urls"]["small"]+' 320w, '+responseAsJson.results[i]["urls"]["regular"]+' 300w"'+'sizes="(max-width: 425px) 66vw, (max-width: 700px) 33vw, (max-width: 2000px) 15vw">';
            images+='<div class="overlay">';
            images+='<img src="assets/user-icon.svg" alt="user" id="userIcon">';
            images+='<h2>'+responseAsJson.results[i]['user']['name']+'</h2>';
            images+='<img src="assets/heart.svg" alt="likes" id="heart">';
            images+='<h3>'+responseAsJson.results[i]['likes']+'</h3>';
            images+='</div></div>';
        }
//grabbing the image container dive that I have my index.html
      htmlData=document.getElementById('imageContainer');
//if the page has this image containter the data will be loaded into the document
      if(htmlData)
      {
//replacing image containers inner html with the newly loaded api data
          document.getElementById('imageContainer').innerHTML=images;
      }
    })
}
//Event listener for when the window loads the data is loaded into the container
window.addEventListener('load', imageGallery, false);

//function for whenever the cat logo icon/image is clicked to add a classname
//and an animation
function catClick()
{
    //checking to see if the icon has the class name of animation
    if(animateObj.className.match('clickAnimation'))
    {
        //if it does already I reassign the classname to change the animation effect
        animateObj.className='backwardsRotation';
    }
    else
    {
        //if the classname is backwards rotation
        //it is renamed to clickAnimation to change the animation
       animateObj.className='clickAnimation';
    }
    //adding another conditional to check the heading 1 elements class name
    //if the class name matches font 1 then I am renaming it to color1 to add an animation to
    if(changeFontColor.className.match('font1'))
    {
        changeFontColor.className='color1';
    }
    //if its classname is already color one then I am replacing it with the original classname
    else
    {
        changeFontColor.className='font1';
    }
}
//event listener for when the logo is clicked so I can add an animation to the 
//h1 heading element and the logo
animateObj.addEventListener('click', catClick, false);