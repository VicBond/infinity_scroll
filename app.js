const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//unsplash API
const count = 10;
const apiKey = 'mg9OhuTe-MEzbB1nJbtYEFacqS6zznYDDwapow8xEyA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//create elements for links and photos => add to DOM
function displayPhotos() {

}

//fetch photos from unsplash

async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
   
  } catch (error) {
    console.log('error', error);
  }
}


//on load

getPhotos();