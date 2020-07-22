import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
   if (!song) {
     return <div>Select a Song</div>;
   }

   return <div>{song.title}</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectSong }
};

export default connect(mapStateToProps) (SongDetail);
