const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookResults = document.getElementById("bookResults");
const resultLimit = document.getElementById("resultLimit");

async function searchBooks() {
    const searchTerm = searchInput.value.trim();
    const limit = resultLimit.value;

    if (searchTerm === "") {
        bookResults.textContent = "Please enter a search term.";
        return;
    }

    bookResults.textContent = "Searching for books...";

    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=${limit}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

        const data = await response.json();

        
    bookResults.innerHTML = "";

    if (data.docs.length === 0) {
        bookResults.textContent = "No books found.";
        return;
    }

    const resultCount = document.createElement("p");
    resultCount.textContent = `${data.numFound} books found`;

    const displayedCount = document.createElement("p");
    displayedCount.textContent = `Showing ${data.docs.length} books`;

    const resultInfo = document.createElement("div");
    resultInfo.className = "result-info";

    resultInfo.appendChild(resultCount);
    resultInfo.appendChild(displayedCount);

    bookResults.appendChild(resultInfo);

    data.docs.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        if (book.cover_i) {
            const cover = document.createElement("img");
            cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            cover.alt = `Cover of ${book.title}`;
            bookCard.appendChild(cover);
        }

        const title = document.createElement("h3");
        title.textContent = book.title || "Unknown title";
        bookCard.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author_name?.join(", ") || "Unknown author"}`;
        bookCard.appendChild(author);

        const year = document.createElement("p");
        year.textContent = `First published: ${book.first_publish_year || "Unknown"}`;
        bookCard.appendChild(year);

        const editions = document.createElement("p");
        editions.textContent = `Editions: ${book.edition_count ?? "Unknown"}`;
        bookCard.appendChild(editions);

        bookResults.appendChild(bookCard);
    });


        if (data.docs.length === 0) {
            bookResults.textContent = "No books found.";
        }

    } catch (error) {
        bookResults.textContent = "Something went wrong. Please try again.";
        console.error(error);
    }
}

searchButton.addEventListener("click", searchBooks);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchBooks();
    }
});
