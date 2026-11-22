const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookResults = document.getElementById("bookResults");

async function searchBooks() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        bookResults.textContent = "Please enter a search term.";
        return;
    }

    bookResults.textContent = "Searching for books...";

    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=8`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

        const data = await response.json();

        bookResults.innerHTML = "";

        data.docs.forEach(book => {
            const bookItem = document.createElement("p");
            bookItem.textContent = book.title;
            bookResults.appendChild(bookItem);
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
