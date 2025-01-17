const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Ishq De Fanniyar','O MAAHI','SAJNI  RE','Tum Se','CHALEYA','SARKAR','Tere Sang Ishq Hua (YODHA)','Akhiyaan Gulaab','AAJ KI RAAT','MURLI KI TAANO SI','Chitta (SHIDDAT)','MANWA  LAAGE','Ve Kamleya','Tere Hawaale','Tum Kya Mile','Deva Deva','Dekh Lena','Tainu Khabar Nahi','Hum Toh Deewane','Falak Tu Garaj Tu','Kesariya Tera','Animal Satranga','Dil Jhoom','Tere Vaste Falak Se Main Chand Launga','Jeet Ka Geet','Bharat Ki Beti','Jeetega Jeetega India','Lehra Do 83','Shaabaashiyaan Mission Mangal','Yodha Tiranga','Jhoome Jo Pathaan','Tere Bin','Chogada Tara','Pehle Bhi Main','Jug Jug Jeeve','Sulthana'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `Images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

function playthis(a) {
  let songIndex=a;
  loadSong(songs[songIndex])
  playSong();
  
}


/--------------------responsive navbar-------- */
function shownav(){
  var x=document.getElementById("navbar");
  if (x.className=="navbar") {
      x.className += " responsive";
      
  } else {
      x.className="navbar";
      
  }

}