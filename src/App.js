import "./styles.css";

import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import songs from "./songs";

export default function App() {
  const [src, setSrc] = useState();
  const [title, setTitle] = useState();

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
        title="form"
        // src="https://docs.google.com/forms/d/e/1FAIpQLSfN5airlqOllhKNgp2ioxmAVSgS4muucY76IopNwRZGOONthg/viewform?embedded=true"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdBFV5HzyD4LYUCTUjdcdbnh1qcDqC4M9j2PYkGh19He5LFkQ/viewform?embedded=true"
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
