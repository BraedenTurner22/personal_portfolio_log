import express from 'express';
import path from 'path';
import axios from 'axios';
import cors from 'cors';
import NodeCache from 'node-cache';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const cache = new NodeCache({ stdTTL: 1800}); //Cache data every 30 minutes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

//Dynamically create endpoint, route for YouTube videos
app.get('/api/videos', async (req, res) => {
    const cacheKey = 'youtubeVideos';

    //Check if data is in the cache;
    if (cache.has(cacheKey)) {
        console.log('Serving from cache');
        return res.json(cache.get(cacheKey));
    }

    try {
        console.log('Fetching new data from YouTube API');

        const { API_KEY, CHANNEL_ID } = process.env;
        if (!API_KEY || !CHANNEL_ID) {
            throw new Error('API_KEY and CHANNEL_ID');
        }

        // Fetch playlistID
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
        const channelResponse = await axios.get(channelUrl);
        const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        //Fetch videos from the playlist
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`;
        const playlistResponse = await axios.get(playlistUrl);

        const videos = playlistResponse.data.items.map((video) => {
            const thumbnails = video.snippet.thumbnails;
            const thumbnail = thumbnails.maxres 
                ? thumbnails.maxres.url 
                : (thumbnails.high ? thumbnails.high.url : thumbnails.default.url);
        
            return {
                title: video.snippet.title,
                thumbnail, // Use the selected thumbnail URL
                link: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
            };
        });

        // Cache the data and send it to the client
        cache.set(cacheKey, videos);
        res.json(videos);
    } catch (error) {
        console.error('Error fetching videos:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});