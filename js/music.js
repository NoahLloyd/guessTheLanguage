const currentSong = document.getElementById('music')
const musicContainer = document.getElementById('music-container')
const music = ['elegantlyDisconnected', 'ready', 'icedTea', 'easy'] 
let musicOn = true

const changeMusic = (previousSong) => {
    previousSong = previousSong.replace('/music/', '').replace('.mp3','')

    // Loop again if we reached the end
    if (previousSong === 'easy') {
        return
    }
    addNewSong(`${music[music.indexOf(previousSong)+1]}`)
}


//* Previous method using html element. Doesn't work though
// const addNewSong = (songSrc) => {
//     const song = document.createElement('embed')
//     song.src = songSrc 
//     song.onended = 'changeMusic(src)'
//     song.loop = 'false'
//     song.autostart = 'true'
//     song.width = song.height = '0'
//     musicContainer.appendChild(song)
// }

//* Using Javascript Audio object
const addNewSong = previousSong => {
    const nextSong = new Audio(`../music/${previousSong}.mp3`)
    nextSong.volume = '0.5'
    nextSong.play()
    nextSong.addEventListener('ended', () => changeMusic(nextSong.src) )
    console.log(nextSong)
}



const toggleMusic = () => {
    musicOn = !musicOn
    if (!musicOn) {
        changeMusic()
    }
}

addNewSong('purpleSky')
// TODO: Use Javascript audio objects instead of Embed elements