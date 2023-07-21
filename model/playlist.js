class Playlist {
    // Inisialisasi class dengan constructor berisi array kosong
    constructor() {
        this.playlist = [];
    }

    // Memunculkan semua data pada Playlist
    getAll() {
        return this.playlist;
    }

    sortByMostPlayed() {
        return this.playlist.slice().sort((a, b) => b.playCount - a.playCount);
    }

    addSong(title) {
        if (!title) {
            throw new Error('Title is required.');
        }

        const newSong = {
            id: this.playlist.length + 1,
            title,
            playCount: 0,
        };
        this.playlist.push(newSong);
        return newSong;
    }

    incrementPlayCount(id) {
        const song = this.playlist.find((item) => item.id === parseInt(id));
        if (!song) {
            throw new Error('Song not found.');
        }

        song.playCount++;
        return song;
    }
}

module.exports = Playlist;