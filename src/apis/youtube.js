import axios from 'axios';

const KEY = 'AIzaSyAnLCPfh9Qf4W82VBmROvneRnTp-mo5aE8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});