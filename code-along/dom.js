let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `movies to watch`

// let moviesElements = document.querySelectorAll(`.movies-to-watch li`)


// for (let i =0; i < moviesElements.length; i++) {

//     let movieElement = moviesElements[i]

//     movieElement.innerHTML = `Spaceballs`


// grabbing a reference to the 'movies to watch'
let moviesList = document.querySelector(`.movies-to-watch`)

//insert a new HTML before teh end of the ul list
moviesList.insertAdjacentHTML(`beforeend`, `<li>Die Hard<li>`)