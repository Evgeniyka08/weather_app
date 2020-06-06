'use strict';

const baseUrl = 'https://pixabay.com/api/';
const key = '&key=16237149-31f8128048fb3bf9af47cfac8';
let randomNumber = Math.floor(Math.random() * Math.floor(12));

export function fetchImage(query) {
  return fetch(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${query}&per_page=12${key}`,
  )
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.hits[randomNumber]);
}
