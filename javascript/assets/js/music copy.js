const allMusic = [
  {
    name: "half cool",
    artist: "Gemini",
    img: "music__view01",
    audio: "music__audio01",
  },
  {
    name: "I Feel It All So Deeply",
    artist: "Bail Bonds",
    img: "music__view02",
    audio: "music__audio02",
  },
  {
    name: "half cool",
    artist: "Sharp Edges",
    img: "music__view03",
    audio: "music__audio03",
  },
  {
    name: "The Monuments and Tunnels in Goa and Hampi",
    artist: "Bail Bonds",
    img: "music__view04",
    audio: "music__audio04",
  },
  {
    name: "half cool",
    artist: "Will 2 Pwr",
    img: "music__view05",
    audio: "music__audio05",
  },
];

const musicWrap = document.querySelector(".music__wrap");
const musicView = musicWrap.querySelector(".music__view .img img");
const musicName = musicWrap.querySelector(".music__view .title h3");
const musicArtist = musicWrap.querySelector(".music__view .title p");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(
  ".progress .timer .current"
);
const musicProgressDuration = musicWrap.querySelector(
  ".progress .timer .duration"
);

let musicIndex = 1;

// 음악 재생
function loadMusic(num) {
  musicName.innnerText = allMusic[num - 1].name;
  musicArtist.innnerText = allMusic[num - 1].artist;
  musicView.src = `../assets/img/${allMusic[num - 1].img}.png`;
  musicView.alt = allMusic[num - 1].name;
  musicAudio.src = `../assets/audio/${allMusic[num - 1].audio}.mp3`;
}

// 재생 버튼
function palyMusic() {
  musicWrap.classList.add("paused");
  musicPlay.setAttribute("title", "정지");
  musicPlay.setAttribute("class", "stop");
  musicAudio.paly();
}

// 정지 버튼
function pauseMusic() {
  musicWrap.classList.remove("paused");
  musicPlay.setAttribute("title", "재생");
  musicPlay.setAttribute("class", "play");
  musicAudio.pause();
}

// 이전 곡 듣기 버튼
function prevMusic() {
  // musicIndex --
  musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--;
  loadMusic(musicIndex);
  palyMusic();
}

// 다음 곡 듣기 버튼
function nextMusic() {
  // musicIndex ++
  musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++;
  loadMusic(musicIndex);
  palyMusic();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime; // 현재 재생되는 시간
  const duration = e.target.currentTime; // 오디오의 총 길이
  let progressWidth = (currentTime / duration) * 100; // 전체 길이에서 현재 진행되는 시간을 백분위로 나눔

  musicProgressBar.style.width = `${progressWidth}%`;

  // 전체 시간
  musicAudio.addEventListener("loadeddata", () => {
    let audioDuration = musicAudio.duration;
    let totalMin = Math.floor(audioDuration / 60); //전체 시간(초)을 분 단위로 쪼갬
    let totalSec = Math.floor(audioDuration % 60); //남은 초를 저장
    if (totalSec < 10) totalSec = `0${totalSec}`; //초가 한자릿 수일때 앞에 0을 붙임
    musicProgressDuration.innnerText = `${totalMin}:${totalSec}`; //완성된 시간 문자열을 출력
  });
});

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

// 플레이 버튼
musicPlay.addEventListener("click", () => {
  const isMusicPauesd = musicWrap.classList.contains("paused"); //뮤직 워랩에 paused 있는지 확인, 음악이 재생 중
  isMusicPauesd ? pauseMusic() : palyMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
  prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
  nextMusic();
});
