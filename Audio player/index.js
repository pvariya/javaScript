const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songInfo = document.getElementById("songInfo");

const data = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    file: "audio/kedarnath.mp3",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    file: "audio/Tu-Hain-Toh.mp3",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist 2",
    file: "audio/Maine-Khud-Ko.mp3",
  },
  {
    id: 4,
    title: "Song 4",
    artist: "Artist 2",
    file: "audio/Radha-Rani.mp3",
  },
  {
    id: 5,
    title: "Song 5",
    artist: "Artist 2",
    file: "audio/Nach-Le-Nach-Le.mp3",
  },
];

let currentSongIndex = 0;

function updateSongInfo() {
  const song = data[currentSongIndex];
  songInfo.textContent = `Playing: ${song.title} by ${song.artist}`;
}

function playCurrentSong() {
  const song = data[currentSongIndex];
  audioPlayer.src = song.file;
  audioPlayer.play();
  updateSongInfo();
  playBtn.textContent = "Pause";
}

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    playCurrentSong();
  } else {
    audioPlayer.pause();
    playBtn.textContent = `Play ${data[currentSongIndex].title}`;
  }
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + data.length) % data.length;
  playCurrentSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % data.length;
  playCurrentSong();
});

audioPlayer.addEventListener("ended", () => {
  nextSong();
});

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % data.length;
  playCurrentSong();
}

updateSongInfo();




const mapper=(ele)={
    
}