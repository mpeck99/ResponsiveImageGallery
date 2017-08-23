var apiCall=new XMLHttpRequest(); 
var apiUrl='https://api.unsplash.com/search/photos/?client_id=f22bd1da324ce68cb2e00b193d9dc58e0d4ecae16b515259c8d3411301882389&page=1&query=kittens';
var images="";
var htmlData="";
function imageGallery()
{
    fetch(apiUrl)
    .then(response=>response.json())
    .then(responseAsJson=>{
      for(var i=0; i<responseAsJson.results.length; i++)
      {console.log(responseAsJson.results[i]["urls"]["small"])
          images+='<img src="'+responseAsJson.results[i]["urls"]["regular"]+'" alt="kitten" srcset="'+responseAsJson.results[i]["urls"]["thumb"]+' 160w, '+responseAsJson.results[i]["urls"]["small"]+' 320w, '+responseAsJson.results[i]["urls"]["regular"]+' 1200w"'+'sizes="(max-width: 425px) 100vw, (max-width: 900px) 33vw">';
            //images+='<img src="'+responseAsJson.results[i]["urls"]["regular"]+'" alt="kitten">'
        
   
      }
      htmlData=document.getElementById('imageContainer');
      if(htmlData)
      {
          document.getElementById('imageContainer').innerHTML=images;
      }
    })
}
window.addEventListener('load', imageGallery, false);