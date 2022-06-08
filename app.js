//unsplash API
const count = 10;
const apiKey = 'mg9OhuTe-MEzbB1nJbtYEFacqS6zznYDDwapow8xEyA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//fetch photos from unsplash

async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('data', data);
  } catch (error) {
    console.log('error', error);
  }
}


//on load

getPhotos();