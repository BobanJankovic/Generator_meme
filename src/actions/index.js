import { username, password } from './secrets';


/*
const http = new XMLHttpRequest();
const url='https://api.imgflip.com/get_memes';
http.open("GET", url);
http.send();
http.onreadystatechange=(e)=>{
console.log(http.responseText)
}
*/

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json) {
    const memes = json.data.memes;

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)))
    }
}

function newMemes(meme) {
    
    return {
        type: NEW_MEME,
        meme
    }
}

function postMemeJson(params){
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params).map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
  }).join("&");
  console.log("body params", bodyParams);

  return fetch('https://api.imgflip.com/caption_image', {
      method: "POST",
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
      
      },
      body: bodyParams
  }).then(response => response.json());
};

export function createMeme(new_object_meme) {
  return function(dispatch) {
    return postMemeJson(new_object_meme)
    .then(new_meme => dispatch(newMemes(new_meme)));
  };
};

