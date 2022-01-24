const Spotify = {

    async getAccessToken() {

        const clientId = process.env.REACT_APP_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: new URLSearchParams({
                grant_type: 'client_credentials'
            }),
            headers: {
                Authorization: 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const jsonResponse = await response.json();
        return jsonResponse.access_token;
    },

    async getNewReleases(token) {

        const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.albums.items.map(album => ({
            name: album.name,
            cover: album.images[0].url 
        }));
    },

    async getFeaturedPlaylists(token) {

        const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.playlists.items.map(playlist => ({
            name: playlist.name,
            cover: playlist.images[0].url
        }));
    },

    async getCategories(token) {

        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.categories.items.map(category => ({
            name: category.name,
            cover: category.icons[0].url
        }));
    }
};

export default Spotify;