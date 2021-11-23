const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const playBtn = document.getElementById('play')

// Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row Remix',
        artist: 'Metric'
    }
]

// check if playing
let isPlaying = false

// Functions
function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play','fa-pause')
    playBtn.setAttribute('title','Pause')
    music.play()    
}

function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause','fa-play')
    playBtn.setAttribute('title','Play')
    music.pause()
    
}

// Update Dom
function loadSong(song) {
    title.textContent = song.displayName
    artist.textContent = song.artist
    music.src = `music/${song.name}.mp3`
    image.src = `img/${song.name}.jpg`
}

// get current song number
let songIndex = 0;

// Play Previous Song
function prevSong() {
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1        
    }
    loadSong(songs[songIndex]) 
    playSong()
}

// Play Next Song
function nextSong() {
    songIndex++
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    loadSong(songs[songIndex]) 
    playSong()
    
}

// On start up load the first song
loadSong(songs[songIndex])


// Event Listners
// play/pause song
playBtn.addEventListener('click', ()=>(isPlaying ? pauseSong() : playSong()))

// previous song
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)