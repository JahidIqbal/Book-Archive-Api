const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText.length == '') {
        document.getElementById('text-blank').innerText = "Enter a Book Name";
    }
    else {
        document.getElementById('hide-message').innerText = '';
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
    }



}

const displaySearchResult = books => {
    const first10Book = books.slice(0, 10)
    const searchResult = document.getElementById('search-result');
    first10Book.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col');

        div.innerHTML = `<div class="card h-100 w-50">

        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid" alt="...">
        <div class="card-body">

            <h4 class="card-title fs-4 mb-2 ">${book.title}</h> 

            <p class="card-text fs-6">Author:${book.author_name[0]} </p>

            <p class="card-text fs-6">Publisher:${book.publisher[0]} </p>

            <p class="card-text fs-6">First Published:${book.first_publish_year} </p>
        </div>
        </div>
        `
            ;
        searchResult.appendChild(div);
    })


}


