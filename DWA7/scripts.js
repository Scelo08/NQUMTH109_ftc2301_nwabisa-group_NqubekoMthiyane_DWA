// Fully working scripts.js file

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

let page = 1;
let matches = books

const starting = document.createDocumentFragment()

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `

    starting.appendChild(element)
}

document.querySelector('[data-list-items]').appendChild(starting)

const genreHtml = document.createDocumentFragment()
const firstGenreElement = document.createElement('option')
firstGenreElement.value = 'any'
firstGenreElement.innerText = 'All Genres'
genreHtml.appendChild(firstGenreElement)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
}

function createGenreOptions(genres) {
    const genreHtml = document.createDocumentFragment();
    
    const firstGenreElement = document.createElement('option');
    firstGenreElement.value = 'any';
    firstGenreElement.innerText = 'All Genres';
    genreHtml.appendChild(firstGenreElement);
    
    for (const [id, name] of Object.entries(genres)) {
      const element = document.createElement('option');
      element.value = id;
      element.innerText = name;
      genreHtml.appendChild(element);
    }
    
    return genreHtml;
  }
  
  // Append genre options to the container
  const genreOptions = createGenreOptions(genres);
  document.querySelector('[data-search-genres]').appendChild(genreOptions);
  
 
  
document.querySelector('[data-search-genres]').appendChild(genreHtml)

const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}
document.querySelector('[data-search-authors]').appendChild(authorsHtml)

function createAuthorOptions(authors) {
    const authorsHtml = document.createDocumentFragment();
    
    const firstAuthorElement = document.createElement('option');
    firstAuthorElement.value = 'any';
    firstAuthorElement.innerText = 'All Authors';
    authorsHtml.appendChild(firstAuthorElement);
    
    for (const [id, name] of Object.entries(authors)) {
      const element = document.createElement('option');
      element.value = id;
      element.innerText = name;
      authorsHtml.appendChild(element);
    }
    
    return authorsHtml;
  }
  function appendToContainer(containerSelector, element) {
    document.querySelector(containerSelector).appendChild(element);
  }

// Append author options to the container
const authorOptions = createAuthorOptions(authors);
appendToContainer('[data-search-authors]', authorOptions);

  
  



// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.querySelector('[data-settings-theme]').value = 'night'
//     document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//     document.documentElement.style.setProperty('--color-light', '10, 10, 20');
// } else {
//      document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//     document.documentElement.style.setProperty('--color-light', '255, 255, 255');
// }



function setThemeColorScheme(darkColor, lightColor) {
    document.documentElement.style.setProperty('--color-dark', darkColor);
    document.documentElement.style.setProperty('--color-light', lightColor);
  }
  
  function updateShowMoreButton(books, matches, page, booksPerPage) {
    const remainingBooksCount = matches.length - (page * booksPerPage);
    const button = document.querySelector('[data-list-button]');
    button.innerText = `Show more (${books.length - booksPerPage})`;
    button.disabled = remainingBooksCount > 0;
  }
  
  // Set theme based on user preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night';
    setThemeColorScheme('255, 255, 255', '10, 10, 20');
  } else {
    setThemeColorScheme('10, 10, 20', '255, 255, 255');
  }
  
  // Update "Show more" button
  updateShowMoreButton(books, matches, page, BOOKS_PER_PAGE);
  
  // Remaining code follows...
  document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0


document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`

// document.querySelector('[data-search-cancel]').addEventListener('click', () => {
//     document.querySelector('[data-search-overlay]').open = false
// })

// document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
//     document.querySelector('[data-settings-overlay]').open = false
// })

// document.querySelector('[data-header-search]').addEventListener('click', () => {
//     document.querySelector('[data-search-overlay]').open = true 
//     document.querySelector('[data-search-title]').focus()
// })

// document.querySelector('[data-header-settings]').addEventListener('click', () => {
//     document.querySelector('[data-settings-overlay]').open = true 
// })

// document.querySelector('[data-list-close]').addEventListener('click', () => {
//     document.querySelector('[data-list-active]').open = false
// })

// document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     const { theme } = Object.fromEntries(formData)

function updateShowMoreButtonText(matches, page, booksPerPage) {
    const remainingBooksCount = matches.length - (page * booksPerPage);
    const remainingBooksText = remainingBooksCount > 0 ? ` (${remainingBooksCount})` : '';
    const showMoreButton = document.querySelector('[data-list-button]');
    showMoreButton.innerHTML = `
      <span>Show more</span>
      <span class="list__remaining">${remainingBooksText}</span>
    `;
  }
  
  function attachEventListener(selector, event, handler) {
    const element = document.querySelector(selector);
    element.addEventListener(event, handler);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);
  
    if (theme === 'night') {
      setThemeColorScheme('255, 255, 255', '10, 10, 20');
    } else {
      setThemeColorScheme('10, 10, 20', '255, 255, 255');
    }
  
    document.querySelector('[data-settings-overlay]').open = false;
  }
  
  // Update "Show more" button text
  updateShowMoreButtonText(matches, page, BOOKS_PER_PAGE);
  
  // Attach event listeners
  attachEventListener('[data-search-cancel]', 'click', () => {
    document.querySelector('[data-search-overlay]').open = false;
  });
  
  attachEventListener('[data-settings-cancel]', 'click', () => {
    document.querySelector('[data-settings-overlay]').open = false;
  });
  
  attachEventListener('[data-header-search]', 'click', () => {
    const searchOverlay = document.querySelector('[data-search-overlay]');
    searchOverlay.open = true;
    document.querySelector('[data-search-title]').focus();
  });
  
  attachEventListener('[data-header-settings]', 'click', () => {
    document.querySelector('[data-settings-overlay]').open = true;
  });
  
  attachEventListener('[data-list-close]', 'click', () => {
    document.querySelector('[data-list-active]').open = false;
  });
  
  attachEventListener('[data-settings-form]', 'submit', handleSubmit);
  

  


    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    document.querySelector('[data-settings-overlay]').open = false

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }

    page = 1;
    matches = result

    if (result.length > 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show')
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show')
    }

    document.querySelector('[data-list-items]').innerHTML = ''
    const newItems = document.createDocumentFragment()

    // for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
    //     const element = document.createElement('button')
    //     element.classList = 'preview'
    //     element.setAttribute('data-preview', id)
    
    //     element.innerHTML = `
    //         <img
    //             class="preview__image"
    //             src="${image}"
    //         />
            
    //         <div class="preview__info">
    //             <h3 class="preview__title">${title}</h3>
    //             <div class="preview__author">${authors[author]}</div>
    //         </div>
    //     `

    //     newItems.appendChild(element)
    // }


    // document.querySelector('[data-list-items]').appendChild(newItems)
    // document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    function createBookPreview(author, id, image, title, authors) {
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data-preview', id);
    
      element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `;
    
      return element;
    }
    
    function appendBookPreviews(result, authors, booksPerPage) {
      const newItems = document.createDocumentFragment();
    
      for (const { author, id, image, title } of result.slice(0, booksPerPage)) {
        const element = createBookPreview(author, id, image, title, authors);
        newItems.appendChild(element);
      }
    
      document.querySelector('[data-list-items]').appendChild(newItems);
    }
    
    function updateShowMoreButton(matches, page, booksPerPage) {
      const remainingBooksCount = matches.length - (page * booksPerPage);
      const button = document.querySelector('[data-list-button]');
      button.disabled = remainingBooksCount < 1;
    }
    
    // Create and append book preview elements to the container
    appendBookPreviews(result, authors, BOOKS_PER_PAGE);
    
    // Update "Show more" button disabled state
    updateShowMoreButton(matches, page, BOOKS_PER_PAGE);
    
    
    

    document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('[data-search-overlay]').open = false
})

// document.querySelector('[data-list-button]').addEventListener('click', () => {
//     const fragment = document.createDocumentFragment()

//     for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)
    
//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     document.querySelector('[data-list-items]').appendChild(fragment)
//     page += 1
// })
function createAndAppendBookPreviews(matches, authors, page, booksPerPage) {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(page * booksPerPage, (page + 1) * booksPerPage)) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;

    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
}

document.querySelector('[data-list-button]').addEventListener('click', () => {
  createAndAppendBookPreviews(matches, authors, page, BOOKS_PER_PAGE);
  page += 1;
});


document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    
    if (active) {
        document.querySelector('[data-list-active]').open = true
        document.querySelector('[data-list-blur]').src = active.image
        document.querySelector('[data-list-image]').src = active.image
        document.querySelector('[data-list-title]').innerText = active.title
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        document.querySelector('[data-list-description]').innerText = active.description
    }
}) 