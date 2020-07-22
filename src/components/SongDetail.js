import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
   if (!song) {
     return <div>Select a Song</div>;
   }

   return (
     <div>
       <h3>Details for:</h3>
       <p>Title: {song.title}</p>

     </div>
   );
};

const mapStateToProps = (state) => {
  return { song: state.selectSong }
};

export default connect(mapStateToProps) (SongDetail);
