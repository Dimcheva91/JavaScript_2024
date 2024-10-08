function oldBooks(input) {
    let favouriteBooks = input[0];
    let booksChecked = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'No More Books') {
        let bookTitle = command;

        if (bookTitle === favouriteBooks) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        }

        booksChecked++;
        command = input[index];
        index++;
    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
