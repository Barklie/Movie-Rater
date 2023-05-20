const movies = []


$(document).ready(function() {
    $('#movie-rating').on('input', function() {
      $('#range-value').text($(this).val());
    });
});
  
const movieTitleInput = document.getElementById('movie-title');

movieTitleInput.addEventListener('input', function() {
  if (movieTitleInput.validity.patternMismatch) {
    movieTitleInput.setCustomValidity('Title must have at least two characters');
  } else {
    movieTitleInput.setCustomValidity('');
  }
});


$('form').on('submit', function(e){
    e.preventDefault()

  const obj = {title: `${$('input').eq(0).val()}` , rating: `${$('input').eq(1).val()}`}
  
  movies.push(obj)

    $('ul').append(`<div> <li>Movie: "${$('input').eq(0).val()}"<br> Rating: ${$('input').eq(1).val()}</li> <button class="rmvBtn">Remove</button> </div>`)

    // $('ul').on('click', 'button.rmvBtn', function(e) {
    //   e.preventDefault();
    //   console.log('Remove Button clicked!');
    //   $(this).parent().remove();
    // });


    console.log(movies)

    // $('ul').on('click', '.rmvBtn', function(e) {
    //   e.preventDefault();
    //   console.log('click');
    //   $(this).parent().remove();
    // });

    $('input').eq(0).val("")
    $('input').eq(1).val(0)
    $('span').text(0)
})

$('#alphabet').on('click', function(e){
  if($(this).prop('checked')){
    $('li').remove()
    $('.rmvBtn').remove()

    // $('ul').on('click', '.rmvBtn', function(e) {
    //   console.log('click');
    //   $(this).parent().remove();
    // });

    movies.sort((a, b) => {
  
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
  
      if(titleA < titleB){
        return -1
      }
      if(titleA > titleB){
        return 1
      }
      return 0
    })
  console.log(movies)
  
  for(let i = 0; i < movies.length; i++){
    $('ul').append(`<div> <li>Movie: "${movies[i].title}" <br> Rating: ${movies[i].rating}</li> <button class="rmvBtn">Remove</button> </div.`)
  }
  }


})
$('#rating').on('change', function(e){
  if($(this).prop('checked')){

    $('li').remove()
    $('.rmvBtn').remove()

    // $('ul').on('click', '.rmvBtn', function(e) {
    //   console.log('click');
    //   $(this).parent().remove();
    // });

    movies.sort((a, b) => b.rating - a.rating);
  
  
    
    console.log(movies)
  
    for(let i = 0; i < movies.length; i++){
      $('ul').append(`<div> <li>Movie: "${movies[i].title}" <br> Rating: ${movies[i].rating}</li> <button class="rmvBtn">Remove</button> </div>`)
    }

  }

})

// document.addEventListener('click', function(event) {
//   // const button = document.getElementById('remove-btn');
//   // Check if the clicked element is the newButton
//   //button.style watches entire document
//   //add event listener to button in form event listener
//   if (event.target.matches('button.rmvBtn')) {
//     console.log('Remove Button clicked!');
//       event.target.parentElement.remove()

//     // Remove the div element from the DOM
//   //   div.remove();
//   }
// });

    $('ul').on('click', '.rmvBtn', function(e) {
      console.log('click');
      $(this).parent().remove();
    });