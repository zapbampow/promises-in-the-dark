import "./styles.css";

import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function App() {
  const [src, setSrc] = useState();
  const [title, setTitle] = useState();

  const songs = [
    {
      title: "Now and Then",
      src: "https://www.dropbox.com/s/jrq05ynz1rex115/01%20Now%20and%20Then.mp3?raw=1",
    },
    {
      title: "Laying Stones",
      src: "https://www.dropbox.com/s/yp745tkh7g5ssvm/02%20Laying%20Stones.mp3?raw=1",
    },
    {
      title: "Peace that Passes",
      src: "https://www.dropbox.com/s/zwl79r2cdhlk5fo/03%20Peace%20that%20Passes.mp3?raw=1",
    },
    {
      title: "Man of Dust",
      src: "https://www.dropbox.com/s/dwkn9bgl6fkssc1/05%20Man%20of%20Dust.mp3?raw=1",
    },
    {
      title: "Sacred Head",
      src: "https://www.dropbox.com/s/bxjr8yul46mh3gf/05%20Sacred%20Head.mp3?raw=1",
    },
    {
      title: "We Will Rise",
      src: "https://www.dropbox.com/s/vbb3n7j3lov80mu/09%20We%20Will%20Rise.mp3?raw=1",
    },
    {
      title: "Wisdom",
      src: "https://www.dropbox.com/s/z35fr4s2zg14kq8/10%20Wisdom.mp3?raw=1",
    },
    {
      title: "What I've Been Looking For",
      src: "https://www.dropbox.com/s/cguyfzlvi2z0o7b/11%20What%20I%27ve%20Been%20Looking%20For.mp3?raw=1",
    },
    {
      title: "Lullaby",
      src: "https://www.dropbox.com/s/2wpqkzvbp2k37xa/12%20Lullaby.mp3?raw=1",
    },
    {
      title: "The Final Time",
      src: "https://www.dropbox.com/s/cdxp7q0f5a4slgs/12%20The%20Final%20Time.wav?raw=1",
    },
    {
      title: "For All Our Fears",
      src: "https://www.dropbox.com/s/g5e5687ckf0boq0/For%20all%20our%20Fears.m4a?raw=1",
    },
    {
      title: "Our Eyes are on You",
      src: "https://www.dropbox.com/s/40tj92n3ayhg56l/Our%20Eyes%20Are%20On%20You.wav?raw=1",
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
