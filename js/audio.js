// const currentSong = document.getElementById("music");
// const musicContainer = document.getElementById("music-container");
// const music = ["elegantlyDisconnected", "ready", "icedTea", "easy"];
// let musicOn = true;


// //TODO: Just make one audio file with all the songs and set it to loop,
// //TODO: Find out how to import it at very last and without causing disturbance

// const changeMusic = (previousSong) => {
//   if (musicOn) {
//     previousSong = previousSong.replace("/audio/", "").replace(".mp3", "");

//     // Loop again if we reached the end
//     if (previousSong === "easy") {
//       return;
//     }
//     addNewSong(`${music[music.indexOf(previousSong) + 1]}`);
//   }
// };

// //* Previous method using html element. Doesn't work though
// // const addNewSong = (songSrc) => {
// //     const song = document.createElement('embed')
// //     song.src = songSrc
// //     song.onended = 'changeMusic(src)'
// //     song.loop = 'false'
// //     song.autostart = 'true'
// //     song.width = song.height = '0'
// //     musicContainer.appendChild(song)
// // }

// //* Using Javascript Audio object
// const addNewSong = (previousSong) => {
//   const nextSong = new Audio(`../audio/${previousSong}.mp3`);
//   nextSong.volume = "0.5";
//   nextSong.play();
//   console.log(nextSong);
// };

// const toggleMusic = () => {
//   musicOn = !musicOn;
//   if (!musicOn) {
//     changeMusic();
//   }
// };

// addNewSong("purpleSky");
// // TODO: Use Javascript audio objects instead of Embed elements

const music =  document.getElementById('music')
let musicOn = true

const toggleMusic = () => {
  musicOn ? music.src = '#' : music.src = 'https://www.youtube.com/embed/5qap5aO4i9A/?autoplay=1'
};