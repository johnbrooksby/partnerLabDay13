let addAMovie = document.querySelector("button");
let inputField = document.querySelector("input");
let list = document.querySelector("ul");
let formSubmit = document.querySelector("form");
let message = document.querySelector("#message");

function addMovie(event){
    event.preventDefault()
    if (inputField.value !== ""){
        let movie = document.createElement("li");
        let movieTitle = document.createElement("span");
        movieTitle.textContent = inputField.value;
        movieTitle.addEventListener("click", crossOffMovie);
        movie.appendChild(movieTitle);
        let delBtn = document.createElement("button");
        delBtn.textContent = "x";
        delBtn.addEventListener("click", deleteMovie);
        movie.appendChild(delBtn);
        list.appendChild(movie);
        message.textContent = "Movie Added!"
        inputField.value = "";
    }

}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!";
}

function crossOffMovie (event){
    event.target.classList.toggle("checked")
    event.target.classList.contains("checked") ? message.textContent = "Movie watched!" : message.textContent = "Movie added back!";
    
}

formSubmit.addEventListener("submit", addMovie);