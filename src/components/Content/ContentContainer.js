import React from 'react';
import Content from './ContentComponent/Content';

const ContentContainer = () => {
  return (
    <div id='content-container'>
      <Content title={'Released this week'} type='newReleases' />
      <Content title={'Featured Playlists'} type='featuredPlaylists' />
      <Content title={'Browse genres'} type='categories' />
    </div>
  );
};

export default ContentContainer;
