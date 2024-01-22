document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-movie');
    const movieList = document.getElementById('movie-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const input = form.querySelector('input');
        const movieName = input.value.trim();

        if (movieName !== '') {
            addMovie(movieName);
            input.value = '';
        }
    });

    movieList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            const listItem = event.target.closest('li');
            deleteMovie(listItem);
        }
    });

    function addMovie(movieName) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="name">${movieName}</span>
            <button class="delete">Delete</button>
        `;
        movieList.appendChild(li);
    }

    function deleteMovie(listItem) {
        movieList.removeChild(listItem);
    }
});
