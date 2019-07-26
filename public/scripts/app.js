console.log("its working");

//-----------global constiables-------------------//
const BASE_URL = '/api/v1/books';
const COMMENTS_URL = '/api/v1/comments';
//make 

// -------------------------------- GLOBAL constIABLES ------------------------------- //
let books = []
let books_template = null;

// render books
function renderBooks(books) {
  books.forEach((book) => {
    $('.books').append(bookTemplate(book))
  })
 }
 
 // render book
 function renderBook(book) {
  let html = showBookTemplate(book, [{message: "good book", user: {username: 'Zafar'}}])
  $('.book').append(html)
 }
 
 //render comments
 
 function renderComments(comments, book_id) {
  comments.forEach((comment) => {
    $('.comments').append(commentTemplate(comment))
  })
 
  if (book_id) {
    $(".comment-wrapper").append(newCommentTemplateForm(book_id))
    $('.show-book').append($("<a href='/main'>Go back</a>"))
  }
 }
 
 // Book template
 const bookTemplate = (book) => {
    return `
        <div id='${book._id}'>
            <h4>${book.title}</h4>
            <p class='year_published'>${book.year_published}</p>
            <p class='author_name'>${book.author_name}</p>
            <img class='author_photo' src=${book.author_photo} />
            <p class='author_location'>${book.author_location}</p>
            <button class='delete-button'>delete</button>
          
            <button class='show-button'>comment</button>
        </div>
    `;
 };
 
 const showBookTemplate = (book) => {
    return `
        <div id='${book._id}'>
            <h4>${book.title}</h4>
            <p class='year_published'>${book.year_published}</p>
            <p class='author_name'>${book.author_name}</p>
            <img class='author_photo' src=${book.author_photo} />
            <p class='author_location'>${book.author_location}</p>
 
        </div>
    `;
 };
 
 // Comment template
 const newCommentTemplateForm = (book_id) => {
  return `
    <h1>New Comment</h1>
    <form action='/api/v1/comments' method='post' class='new-comment'>
            <p>message</p>
            <input type="text" name="message" placeholder="Enter message"/>
            <input type="hidden" name="book" value='${book_id}'/>
            <button type="submit">Add</button>
    </form>
  `
 }
 
 const commentTemplate = (comment) => {
    return `
        <div id='${comment._id}'>
            <h4>${comment.message}</h4>
            <button class='delete-button'>&times;</button>
            <button class='edit-button'>edit</button>
        </div>
    `;
 };

 


 $(document).ready(() => {
  $('.books').on('click', '.delete-button', function() {
    const parent = $(this).parent()
 
    let book_id = parent.attr('id')
 
    // Delet single book
    $.ajax({
      url: `${BASE_URL}/${book_id}`,
      method: 'DELETE',
      dataType: 'JSON',
      success: function(response) {
        $(`#${book_id}`).remove()
      },
      failure: function() {
 
      }
    })
  })
 
  $('.books').on('click', '.show-button', function() {
    const parent = $(this).parent()
 
    let book_id = parent.attr('id')
 
 
 // get single book
    $.ajax({
      url: `${BASE_URL}/${book_id}`,
      method: 'GET',
      dataType: 'JSON',
      success: function(response) {
        $('.books').hide()
        $('.new-book').hide()
        renderBook(response.data)
        $('.show-book').show()
 
      },
      failure: function() {
 
      }
    })
 
 
 // get comments for book
    $.ajax({
      url: `${COMMENTS_URL}`,
      method: 'GET',
      dataType: 'JSON',
      data: {
        book: book_id
      },
      success: function(response) {
        renderComments(response.data, book_id)
      },
      failure: function() {
 
      }
    })
  })
 
  // fetch all books
 
  $.ajax({
    url: BASE_URL,
    method: 'GET',
    dataType: 'JSON',
    success: function(response) {
      renderBooks(response.data)
    },
    failure: function() {
 
    }
  })
 
 
 // New book create
  $('.new-book').on('submit', function(event) {
    const form = $(this);
 
    $.ajax({
      url: BASE_URL,
      method: 'POST',
      data: form.serialize() ,
      success: function(response) {
        const book = response.data
        renderBooks([book])
      },
      failure: function() {
 
      }
    })
 
    return false;
  })
 
  // New comment create for book
 
  $(document).on('submit', '.new-comment', function(event) {
    const form = $(this);
 
    $.ajax({
      url: COMMENTS_URL,
      method: 'POST',
      data: form.serialize() ,
      success: function(response) {
        const comment = response.data
        renderComments([comment])
      },
      failure: function() {
 
      }
    })
 
    event.preventDefault()
 
    //return false;
  })
 
  $('.comments').on('click', '.delete-button', function() {
    const parent = $(this).parent()
 
    let comment_id = parent.attr('id')
 console.log(`i am a delete`);
    // Delete single comment
    $.ajax({
      url: `${BASE_URL}/${comment_id}`,
      method: 'DELETE',
      dataType: 'JSON',
      success: function(response) {
        $(`#${comment_id}`).remove()
      },
      failure: function() {
 
      }
    })
  });

  $('.comments').on('click', '.edit-button', function() {
    const parent = $(this).parent()
   console.log(`i am a update `);
    let comment_id = parent.attr('id')
 
    // edit single comment

$.ajax(`${BASE_URL}/${comment_id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        const handleClick = (event) => {
          event.preventDefault();
          if (event.target.classList.contains('edit-button')) {
            editComment(event);
          } else if (event.target.classList.contains('submit-edit')) {
            updateComment(event);





  });
});
    // const updateCity = (event) => {
    //   const commentId = event.${BASE_URL}/${comment_id}
    //     console.log(cityId);
    //      const $cityId = $(event.target).parent().attr('id');
    //      const $cityDescription = $('#editCityDescription').val();
      //   const cityName = document.getElementById('editCityName').value;
      //   const cityDescription = document.getElementById('editCityDescription').value;
      //   const newCity = { name: cityName, description: cityDescription };
      //   console.log(newCity);
      //   $.ajax(`${BASE_URL}/${cityId}`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       const handleClick = (event) => {
      //          if (event.target.classList.contains('edit-button')) {
      //     editCity(event);
      //      } else if (event.target.classList.contains('submit-edit')) {
      //     updateCity(event);
      //   }
       //}


    // $.ajax(`${BASE_URL}/${comment_id}`,{
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     const handleClick = (event) => {
    //       event.preventDefault();
    //       if (event.target.classList.contains('edit-button')) {
    //         editComment(event);
    //       } else if (event.target.classList.contains('submit-edit')) {
    //         updateComment(event);
    //       }
    //     } 
 
    //   }
    // })
  


//  success: function(response) {
//   $(`#${comment_id}`)
// },
// failure: function() {