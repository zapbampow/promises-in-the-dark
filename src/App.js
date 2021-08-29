import "./styles.css";

import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function App() {
  const [src, setSrc] = useState();
  const [title, setTitle] = useState();

  const songs = [
    {
      title: "some title 1",
      src: "https://www.dropbox.com/s/i7jc9ojpnsyii2l/Urban%20Sunrise%20.mp3?raw=1&t=.wav&_=1",
    },
    {
      title: "another title",
      src: "https://www.dropbox.com/s/c26fdsksh9q0nzg/Images%20-%20Lost%20European.wav?raw=1&t=.wav&_=2",
    },
    {
      title: "a third title",
      src: "https://www.dropbox.com/s/36gyipvdty81o51/What%20a%20beautiful%20Sunset%21%20%28radio%20mix%29%20-%20Angelwing.wav?raw=1&t=.wav&_=3",
    },
    {
      title: "a fourth title",
      src: "https://www.dropbox.com/s/36gyipvdty81o51/What%20a%20beautiful%20Sunset%21%20%28radio%20mix%29%20-%20Angelwing.wav?raw=1&t=.wav&_=3",
    },
    {
      title: "a fifth title",
      src: "https://www.dropbox.com/s/36gyipvdty81o51/What%20a%20beautiful%20Sunset%21%20%28radio%20mix%29%20-%20Angelwing.wav?raw=1&t=.wav&_=3",
    },
  ];

  return (
    <div className="App">
      <div className="notice">
        <h1>
          <span style={{ fontStyle: "italic" }}>Promises in the Dark</span>{" "}
          Music
        </h1>
        <p>
          Thank you, friends, for taking the time to help me decide which songs
          to include as bonus features for the{" "}
          <span style={{ fontStyle: "italic" }}>Promises in the Dark</span>{" "}
          audiobook.
        </p>
        <p>
          Please listen to each song and then select your top two preferences in
          the form below.
        </p>
      </div>

      <div className="player-container">
        <div className="top-bar" />
        <h2>Select a song to play it</h2>
        <ul className="list" style={{ marginBottom: "2rem" }}>
          {songs.map((song) => {
            return (
              <li>
                <button
                  className="song-btn"
                  onClick={() => {
                    setSrc(song.src);
                    setTitle(song.title);
                  }}
                >
                  {song.title}
                </button>
              </li>
            );
          })}
        </ul>
        <div style={{ width: "100%", marginBottom: "1rem" }}>
          <h2>
            Playing: {title?.length > 0 ? title : "(nothing selected yet)"}
          </h2>
          <ReactAudioPlayer
            src={src}
            controls
            autoPlay
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfN5airlqOllhKNgp2ioxmAVSgS4muucY76IopNwRZGOONthg/viewform?embedded=true"
        width="100%"
        maxWidth="640"
        height="925"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
