function thePianist(inputArray) {
    
    function addPiece(piece, composer, key) {
        if (piece in piecesData) {
            console.log(`${piece} is already in the collection!`);
        } else {
            piecesData[piece] = [composer, key];
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function removePiece(piece) {
        if (!(piece in piecesData)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
            delete piecesData[piece];
            console.log(`Successfully removed ${piece}!`);
        }
    }

    function changePieceKey(piece, key) {
        if (!(piece in piecesData)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
            piecesData[piece][1] = key;
            console.log(`Changed the key of ${piece} to ${key}!`);
        }
    }

    let numberPieces = inputArray.shift();
    let pieces = inputArray;
    let piecesData = {};
    
    for (let i = 0; i < numberPieces; i++) {
        let current = pieces.shift();
        let [piece, composer, key] = current.split('|');
        piecesData[piece] = [composer, key];
    }

    for (const pieceInfo of pieces) {
        if (pieceInfo === 'Stop') {
            break;

        } else if (pieceInfo.includes('Add')) {
            let [_command, piece, composer, key] = pieceInfo.split('|');
            addPiece(piece, composer, key);

        } else if (pieceInfo.includes('Remove')) {
            let [_command, piece] = pieceInfo.split('|');
            removePiece(piece);

        } else if (pieceInfo.includes('ChangeKey')) {
            let [_command, piece, key] = pieceInfo.split('|');
            changePieceKey(piece, key)
        }
    }

    for (key in piecesData) {
        console.log(`${key} -> Composer: ${piecesData[key][0]}, Key: ${piecesData[key][1]}`)
    }
}

thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
);

thePianist(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
);