import { useState, useEffect } from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "Next To You",
      artist: "Flamingosis",
      img_src: "./images/song-1.jpg",
      src: "./playlist/Next-to-You.mp3",
      timer: 180000
    },
    {
      title: "Castlevania II Simon's Quest",
      artist: "The OneUps",
      img_src: "./images/song-2.jpg",
      src: "./playlist/The-OneUps-Castlevania-II-Simon-Quest.mp3",
      timer: 160000
    },
    {
      title: "Street Fighter II Sagat's Theme",
      artist: "The OneUps",
      img_src: "./images/song-3.jpg",
      src: "./playlist/The-OneUps-Street-Fighter-II-Sagat.mp3",
      timer: 140000
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
