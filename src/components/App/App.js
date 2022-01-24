import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import ContentContainer from '../Content/ContentContainer';
import Player from '../Player/Player';
import Spotify from '../../util/Spotify';
import { addReleases, addPlaylists, addCategories } from '../Content/contentSlice';
import { useDispatch } from 'react-redux';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const token = await Spotify.getAccessToken();
            try {
                dispatch(addReleases(token));
                dispatch(addPlaylists(token));
                dispatch(addCategories(token));
            } catch (error) {
                console.error(error);
            };
        };
        getData();
    });

    return (
        <div id="app-container">
            <Navbar />
            <div id='right-container'>
                <Header />
                <ContentContainer />
                <Player />
            </div>
        </div>
    )
};

export default App;
