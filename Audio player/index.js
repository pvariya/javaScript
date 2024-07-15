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
    file: "https://rr4---sn-cvh76nez.googlevideo.com/videoplayback?expire=1721044779&ei=y7qUZt_RLbDh6dsPwuKRiAY&ip=188.40.52.26&id=o-AD6bix799bDaOqKX7EUpjqc3s95dVoUmcillaWgfJ9v2&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=4177281&dur=258.881&lmt=1714458586279063&keepalive=yes&c=ANDROID_TESTSUITE&txp=4402434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPrR9MbRFtWPC80F-fJuZHRDEV1EkyUZHUuD9xpCCYStAiEA5RFyzvGEtRSMbUXqlPT6ix0EhuLsYi3iioyOpnd0qsc%3D&rm=sn-4g5eke7s&fexp=24350516,24350518&req_id=a2c6ead1c04a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-bu2a-nu8s7e&cms_redirect=yes&cmsv=e&mh=5e&mip=27.116.48.74&mm=29&mn=sn-cvh76nez&ms=rdu&mt=1721022799&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgAR1GqyqN2JTaxabise4zK13g2ey4WgJiq7mT6HAwf3MCIQCk_CcplMy_CoJ14hhrZqMXa3m0OV8dukG8rUbb8TjoDw%3D%3D",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    file: "https://rr3---sn-bu2a-nu86.googlevideo.com/videoplayback?expire=1721044900&ei=RLuUZvGzL9Tj6dsPxr61mA8&ip=188.40.52.24&id=o-AMWmfK2IuH-4VP9p-IdGKtyy5uYpT68fifHMdJv7w4U-&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=6936968&dur=406.081&lmt=1714587094751557&keepalive=yes&c=ANDROID_TESTSUITE&txp=4502434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgLaalT2IjZBISavAsu4q--Mi5KibCjJdLwGCeq1oagTgCIQCkWe-B1h4HdAVH5OVIVvLRgpu5QMoBJak9fOmmjStyfw%3D%3D&redirect_counter=1&rm=sn-4g5eky7l&fexp=24350516,24350518&req_id=4fdcb68c18cda3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=MU&mip=27.116.48.74&mm=31&mn=sn-bu2a-nu86&ms=au&mt=1721022200&mv=u&mvi=3&pcm2cms=yes&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AHlkHjAwRQIgII0k0ptQn-hC8zXZ-jpbCumyzmYepE8qCU6BlkXSUGQCIQCF7OvEm-QfBsutTaCksL5M_aXW9iey37Hx6YFn471Y1w%3D%3D",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist 2",
    file: "https://rr2---sn-bu2a-nu8s.googlevideo.com/videoplayback?expire=1721044948&ei=dLuUZsGHJdjXi9oP9ImTwAk&ip=46.4.48.22&id=o-AK8Cp1UYdIIrrPLrDtxkvFsHcOOmS1ZzOXoJ7q1hxARX&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=5829226&dur=329.101&lmt=1716857954381281&keepalive=yes&c=ANDROID_TESTSUITE&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAOvK6yUiEEYPPjlqQUO7TvfxupTy_J9T1lcWgzCUZ7x4AiEAiXjzgklRqBK-JwsZ16nfPamRlvifIjVrR7VVEPESnKA%3D&redirect_counter=1&rm=sn-4g5eyl7z&fexp=24350516,24350518&req_id=dfb52c26c4ada3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=bW&mip=27.116.48.74&mm=31&mn=sn-bu2a-nu8s&ms=au&mt=1721022200&mv=u&mvi=2&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhANZaNJUktz2DpV54V0htshtNglGkvoe_EAqmStXsu5weAiEA33XUNf72-frT4GQRgnytksh--zS6mr18zSzh6uybEj4%3D",
  },
  {
    id: 4,
    title: "Song 4",
    artist: "Artist 2",
    file: "https://rr1---sn-cvh76nle.googlevideo.com/videoplayback?expire=1721027447&ei=F3eUZqPxKbKB3LUPiMu30A0&ip=103.154.37.16&id=o-AJ7SHJSWWee3CY3kyY5Yiq-TjOgn5J2uabsRN3yTMVgD&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=in&bui=AXc671L_mH-jsZZCzCfaOb9EizIsBpCmWHewYyGErJ5fzJa8lqpTig89ywnjCQ6RCoeXTTcN7PEgoO6S&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=lIr_tdDtGykjcbSnrtmUz4YQ&rqh=1&gir=yes&clen=4906106&dur=288.021&lmt=1718146286616813&keepalive=yes&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&sefc=1&txp=5532434&n=fGA-LUA0m9JZwA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPdUKP8135asVPOS0C6EPj97yZvXNsVxZQV0veH9XKNtAiEAlh3JzxRrzSxG8PO1lZBolnB8TnoLuvsi06mqULkxgpg%3D&rm=sn-3jja-jv3s7e,sn-h55l77s&fexp=24350515,24350517&req_id=3a816e5ac9c3a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=qR&mip=27.116.48.74&mm=29&mn=sn-cvh76nle&ms=rdu&mt=1721023016&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgb7HTrXwh4gGFVgERHW_0dpKdgYvx9W-kfT1yyOconK8CIQCFZByNNe-ToUrDHl8hx5Bxvly0jDya68tSibhJWkWFRA%3D%3D",
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

// const mapper=(data)=>{
//       data.map((ele)=>{
//         let title = document.createElement("p");
//         title.innerHTML = ele.
//       })
// }
