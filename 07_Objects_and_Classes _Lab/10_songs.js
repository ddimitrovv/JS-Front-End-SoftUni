function songsCreator(inputArray){
    const songsCount = inputArray.shift();
    const typeList = inputArray.pop();
    let songs = [];

    class Song {
        constructor(songType, songName, songTime) {
            this.name = songName;
            this.time = songTime;
            this.type = songType;
        }
    }

    for (const songInfo of inputArray) {
        let currentInfo = songInfo.split('_');
        const currentSong = new Song(currentInfo[0], currentInfo[1], currentInfo[2]);
        songs.push(currentSong);
    }

    if (typeList === 'all') {
        for (const song of songs) {
            console.log(song.name);
        }
    }
    
    for (const song of songs) {
        if (song.type === typeList) {
        console.log(song.name);
        }
    }
}