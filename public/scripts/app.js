console.log("its working");

//-----------global variables-------------------//
const BASE_URL = '/api/v1/books';
const COMMENTS_URL = '/api/v1/comments';

// -------------------------------- GLOBAL VARIABLES ------------------------------- //
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
            <button class='delete-button'>&times;</button>
            <button class='edit-button'>edit</button>
            <button class='show-button'>show</button>
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
        </div>
    `;
};

$(document).ready(() => {
  $('.books').on('click', '.delete-button', function() {
    var parent = $(this).parent()

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
    var parent = $(this).parent()

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

  $(document).delegate('.new-comment', 'submit', function(event) {
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

    return false;
  })
})





// -------------------------------- STATE VARIABLES ------------------------------- //







// -------------------------------- DOM ELEMENTS ------------------------------- //






// -------------------------------- FUNCTIONS ------------------------------- //





//--------------Event Listeners-----------------------//

// $citiesSection.on('click', deleteComment);
