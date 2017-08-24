var apiCall=new XMLHttpRequest(); 
var apiUrl='https://api.unsplash.com/search/photos/?client_id=f22bd1da324ce68cb2e00b193d9dc58e0d4ecae16b515259c8d3411301882389&page=1&query=kittens&per_page=9';
var images="";
var htmlData="";
var animateObj=document.getElementById('catImage');
function imageGallery()
{
    fetch(apiUrl)
    .then(response=>response.json())
    .then(responseAsJson=>{
      for(var i=0; i<responseAsJson.results.length; i++)
      {console.log(responseAsJson.results)

            images+='<div class="cat"><img src="'+responseAsJson.results[i]["urls"]["regular"]+'" alt="kitten" srcset="'+responseAsJson.results[i]["urls"]["thumb"]+' 160w, '+responseAsJson.results[i]["urls"]["small"]+' 320w, '+responseAsJson.results[i]["urls"]["regular"]+' 300w"'+'sizes="(max-width: 425px) 66vw, (max-width: 700px) 33vw, (max-width: 2000px) 15vw">';
            images+='<div class="overlay">';
            images+='<img src="assets/user-icon.svg" alt="user" id="userIcon">';
            images+='<h2>'+responseAsJson.results[i]['user']['name']+'</h2>';
            images+='<img src="assets/heart.svg" alt="likes" id="heart">';
            images+='<h3>'+responseAsJson.results[i]['likes']+'</h3>';
            images+='</div></div>';

   
        }
      htmlData=document.getElementById('imageContainer');
      if(htmlData)
      {
          document.getElementById('imageContainer').innerHTML=images;
      }
    })
}
window.addEventListener('load', imageGallery, false);

function catClick()
{
    if(animateObj.className.match('clickAnimation'))
    {
        animateObj.className='backwardsRotation';
    }
    else
    {
       animateObj.className='clickAnimation';
    }
    
}

animateObj.addEventListener('click', catClick, false);