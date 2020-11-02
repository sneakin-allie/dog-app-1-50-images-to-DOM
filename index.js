'use strict';

function getDogImage(quantity) {

  let url = "https://dog.ceo/api/breeds/image/random/" + quantity;

  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  //console.log(responseJson);
  let results = responseJson.message;

  console.log(results);
  console.log(responseJson.message.length)

  for (let i = 0; i < responseJson.message.length; i++) {

    // Alfredo's example
    // $( '.list' ).append( `<li class="item"> Hello there ${fullName}! </li>` );
    
    console.log(responseJson.message[i]);
    // create a new image tag in results
    
    $('.results').append(`<img class="results-img" src="${responseJson.message[i]}">`);

    // put the string in the new placeholder
  }
    

  //replace the existing image with the new one
    // $('.results-img1').replaceWith(
    //   `<img src="${responseJson.message[0]}" class="results-img1">`
    // )



  

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let quantity = $( "#quantity" ).val();
    console.log(quantity);
    getDogImage(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});