function bookShelf(inputArray) {
    let bookShelves = {};

    for (const info of inputArray) {
        if (info.includes('->')) {
            let [shelfId, shelfGenre] = info.split(' -> ')
            if (!bookShelves.hasOwnProperty(shelfId)) {
                bookShelves[shelfId] = {[`${shelfGenre}`]: []};
            }
        } else {
            let bookTitle = info.split(': ')[0];
            let bookAuthor = info.split(': ')[1].split(', ')[0];
            let bookGenre = info.split(': ')[1].split(', ')[1];

            let ids = Object.keys(bookShelves)
            for (const id of ids) {
            if (bookShelves[Number(id)].hasOwnProperty(bookGenre)) {
                bookShelves[Number(id)][bookGenre].push({bookTitle, bookAuthor});
                }
            }
        }
    }
    let sortedBookShelves = Object.entries(bookShelves)
    .sort((a, b) => {        
        return Object.values(Object.values(b)[1])[0].length - Object.values(Object.values(a)[1])[0].length
    });

    for (const [key, _value] of sortedBookShelves) {
        let entries = Object.entries(bookShelves[key]);
        for (const [genre, books] of entries) {
            console.log(`${key} ${genre}: ${books.length}`);
            let booksList = Object.values(books);
            let sortedBooksList = booksList.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle))
            for (bookInfo of sortedBooksList) {
                console.log(`--> ${bookInfo.bookTitle}: ${bookInfo.bookAuthor}`);
            }
        }
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])