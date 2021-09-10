const currentSong = document.getElementById('music')
const musicContainer = document.getElementById('music-container')
const music = ['elegantlyDisconnected', 'ready', 'icedTea', 'easy'] 

const changeMusic = (previousSong) => {
    previousSong = previousSong.replace('/music/', '').replace('.mp3','')

    // Loop again if we reached the end
    if (previousSong === 'easy') {
        return
    }
    addNewSong(`/music/${music[music.indexOf(previousSong)+1]}`)
}

const addNewSong = (songSrc) => {
    const song = document.createElement('embed')
    song.src = songSrc 
    song.onended = 'changeMusic(src)'
    song.loop = 'false'
    song.autostart = 'true'
    song.width = song.height = '0'
    musicContainer.appendChild(song)
}

addNewSong('/music/purpleSky.mp3')