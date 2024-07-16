const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songInfo = document.getElementById("songInfo");

const data = [
  {
    id: 1,
    image: "https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/MKPDo0mxKo/size_m.jpg",
    title: "Radha Rani",
    artist: "Artist 1",
    file: "https://rr3---sn-ci5gup-g5we.googlevideo.com/videoplayback?expire=1721111080&ei=yL2VZoKXFdfC6dsP8PamgAM&ip=188.40.52.25&id=o-AJLvmHNLYvffUKvI0LNNKA0pROUMXV0nQkrfVfdkQlvZ&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=6936968&dur=406.081&lmt=1714587094751557&keepalive=yes&c=ANDROID_TESTSUITE&txp=4502434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAKZCM-rOWqDAGut7SSYQD5gE59A2qFEcRlTaNy7pVHgeAiAKwV8Sm6W-r8Hiexb1CrNrcfBphAQ6ul8QDtnabA0ymA%3D%3D&redirect_counter=1&rm=sn-4g5ey77s&rrc=104&fexp=24350516&req_id=f8b2fa2f7c64a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=MU&mip=117.99.49.27&mm=31&mn=sn-ci5gup-g5we&ms=au&mt=1721094393&mv=u&mvi=3&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRgIhAILh5aSb5gM7bWAo1wbL_6qe4UgMxSOST_o0HZdfqgQHAiEAhzQMwlDQoUzPkEmuipSAEoniWH2RrC-wjq1wSkZFDIw%3D"
  },
  {
    id: 2,
    image: "https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/oMWQY1PWqL/size_m.jpg",
    title: "Nach le Nach le",
    artist: "Artist 2",
    file: "https://rr3---sn-npoeenez.googlevideo.com/videoplayback?expire=1721117230&ei=ztWVZryYMYO36dsP6vCa4AQ&ip=162.55.128.6&id=o-AH7k304qYojaGNhm184dgWcN3J4_DIf_pmFYXi2aTWzJ&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=4177281&dur=258.881&lmt=1714458586279063&keepalive=yes&c=ANDROID_TESTSUITE&txp=4402434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgX_p0aNe6J_ezoHG53yJKeVT7Wg82vDtBqB-oWpUQgrQCIDj_1EkUpJwTQB2aoGmZkrdrbGAerR6b3S7OMsOa1tmU&redirect_counter=1&cm2rm=sn-4g5ekk7e&rrc=80&fexp=24350516&req_id=48bf31d0fb3da3ee&cms_redirect=yes&cmsv=e&mh=5e&mip=117.99.49.27&mm=34&mn=sn-npoeenez&ms=ltu&mt=1721094402&mv=u&mvi=3&pl=20&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgE1V3gkyZtw6y3umMFixdjqm_Cy47VhMofdEEtctp6UECIQCV57LVcaUOpEcyuIlKmvINEqLmHDwIMEXDZyezoj4OGQ%3D%3D",
  },  
  {
    id: 3,
    image: "https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/41Wjz1LOWP/size_l_1712905431.webp",
    title: "Maine khud ko",
    artist: "Artist 2",
    file: "https://rr2---sn-ci5gup-g5wl.googlevideo.com/videoplayback?expire=1721117279&ei=_9WVZtD2G4GJ6dsPqYGwyAU&ip=162.55.96.91&id=o-AGKdAB66_Rr-2OzB9UMXJccAXUxGMWYlSj7wzX2nLOF6&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=5829226&dur=329.101&lmt=1716857954381281&keepalive=yes&c=ANDROID_TESTSUITE&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAPUyqVdAxTC3mvrv-v8NSALsMDQDWjpl6Z9hhA3pjM8sAiAG9TLz8TiuChLWNPjE3BJFzbczECc48vDFee3lcfXZuA%3D%3D&redirect_counter=1&rm=sn-4g5ezs7s&rrc=104&fexp=24350516&req_id=56a2b798fa53a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=bW&mip=117.99.49.27&mm=31&mn=sn-ci5gup-g5wl&ms=au&mt=1721094393&mv=u&mvi=2&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRAIgVbLyzn_PSrTSe1U42An3IF_lEi4cCdWOHRHpLnwFSvQCIB2oO46YTWd9rjD1MhFYGnOmqMWcHHlChgidehsSO4ia",
  },
  {
    id: 4,
    image: "https://a10.gaanacdn.com/gn_img/albums/Rz4W8evbxD/4W87xyq93x/size_l.jpg",
    title: "tu hain toh",
    artist: "Artist 2",
    file: "https://rr3---sn-cvh7kn6z.googlevideo.com/videoplayback?expire=1721117353&ei=SdaVZtj1CMeJ9fwP86CEEA&ip=115.98.233.8&id=o-ACxEEsPTf21KCzV4e2wrZX_OLkIUEDWNwaLegRR7Ywiv&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=in&bui=AXc671J6QBVICTP8yAA_Ee7StR0zPbtjcNK2LK4NMtdRsgdKf5LQHf3UJQsYwulIE5dEe8XfhJRprZM4&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=NY9QG-xq9PVh1XnUDTe2ENIQ&rqh=1&gir=yes&clen=4906106&dur=288.021&lmt=1718146286616813&keepalive=yes&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&sefc=1&txp=5532434&n=DuOg27Z1Ir4ieQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAI7DhE7Avjk9c8-RXHDD3a4ehhU9157_2FJDsphJJodXAiAlEX4jOSaw3xU9jFEUkd2lBZpNYMz8eQ8JslKFp5BR5g%3D%3D&rm=sn-i5uif5t-cvhz7e,sn-cvhd77s&rrc=79,104&fexp=24350516&req_id=70af049ed57da3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=qR&mip=117.99.49.27&mm=30&mn=sn-cvh7kn6z&ms=nxu&mt=1721095475&mv=m&mvi=3&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgacmWa2oNfBbtF6VQPEVTTB9q5NwSb0qmv38Fr869LiICIQCoioZE48kL9adXy4SFjZBcAYQqaJlHzkH9sRhCVnRKtw%3D%3D"
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

   document.getElementById("mainImg").src=data[currentSongIndex].image
 
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

const uimaker = (datax) => {
  data.map((ele) => {
    let title = document.createElement("span");
    title.innerHTML = ele.title;
    title.setAttribute("class","title")

    let artist = document.createElement("span");
    artist.innerHTML = ele.artist;
    

    let image = document.createElement("img");
    image.src = ele.image;
    image.setAttribute("class","img")

    let plyBtn = document.createElement("button")
    plyBtn.innerHTML="play"
    plyBtn.addEventListener("click", () => {
      // document.getElementById("mainImg").src=data[index].image
      playCurrentSong()
    })

    let div = document.createElement("div");
    div.append(image,title, artist,plyBtn);
    div.setAttribute("class","alineDiv")

    document.getElementById("songDiv").append(div);
  });
};

uimaker(data);
