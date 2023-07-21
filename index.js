const express = require('express');
const Playlist = require('./model/playlist');

const app = express();
const port = 3000;

app.use(express.json());

const playlistModel = new Playlist();

// Get all songs in Playlist
app.get('/playlist', (req, res) => {
    res.json(playlistModel.getAll());
});

// Get most played song (sorted)
app.get('/playlist/most-played', (req, res) => {
    res.json(playlistModel.sortByMostPlayed());
});

// Add a new song to the playlist
app.post('/playlist', (req, res) => {
    try {
        const { title } = req.body;
        const newSong = playlistModel.addSong(title);
        res.status(201).json(newSong);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Track play count song
app.post('/playlist/play/:id', (req, res) => {
    try {
        const { id } = req.params;
        const song = playlistModel.incrementPlayCount(id);
        res.json(song);
    } catch (error) {
        res.status(404).json({ error: error.message }); 
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

