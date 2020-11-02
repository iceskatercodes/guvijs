var now_playing = document.querySelector(".now-playing");
var track_art = document.querySelector(".track-art");
var track_name = document.querySelector(".track-name");
var track_artist = document.querySelector(".track-artist");
var playpause_btn = document.querySelector(".playpause-track");
var next_btn = document.querySelector(".next-track");
var prev_btn = document.querySelector(".prev-track");
var seek_slider = document.querySelector(".seek_slider");
var volume_slider = document.querySelector(".volume_slider");
var curr_time = document.querySelector(".current-time");
var total_duration = document.querySelector(".total-duration");
var track_index = 0;
var isPlaying = false;
var updateTimer;
var curr_track = document.createElement("audio");
var track_list = [
    {
        name: "Photos and Memories",
        artist: "pinkzebra",
        image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://www.wonderplugin.com/wp-content/uploads/2014/03/Photos-and-Memories.mp3"
    },
    {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
    },
    {
        name: "Enthusiast",
        artist: "Tours",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },
    {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
    },
    {
        name: "Peaceful Dawn",
        artist: "pinkzebra",
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://www.wonderplugin.com/wp-content/uploads/2014/03/Peaceful-Dawn.mp3"
    },
    {
        name: "In the Moment of Inspiration",
        artist: "pinkzebra",
        image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        path: "https://www.wonderplugin.com/wp-content/uploads/2014/03/In-the-Moment-of-Inspiration.mp3"
    },
];
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        var track_list = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            track_list[_i] = arguments[_i];
        }
        this.track_list = track_list;
    }
    return MusicPlayer;
}());
var newPlayList = new MusicPlayer(track_list);
var playlistObject = document.getElementById("playlist-id");
var songs_list = [];
var listElements = "<div><label for=\"cars\">Playlist</label>\n<select onchange=\"selectSong()\" name=\"songs\" id=\"songs\" form=\"carform\">\n<option value=\"select\">select</option>";
for (var i = 3; i < 6; i++) {
    listElements =
        listElements +
            ("<option value=\"" + track_list[i].name + "\">" + track_list[i].name + "</option>");
    songs_list.push(track_list[i].name);
}
listElements = listElements + "</select></div>";
playlistObject.innerHTML = listElements;
function selectSong() {
    var select = document.getElementById("songs");
    var song = select.options[select.selectedIndex].value;
    var songIndex = songs_list.indexOf(song);
    loadTrack(songIndex);
    pauseTrack();
    playTrack();
}
function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}
function random_bg_color() {
    var bgColor = "pink";
    document.body.style.background = bgColor;
}
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
loadTrack(track_index);
function playpauseTrack() {
    if (!isPlaying)
        playTrack();
    else
        pauseTrack();
}
function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else
        track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}
function seekTo() {
    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function seekUpdate() {
    var seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
        var currentMinutes = Math.floor(curr_track.currentTime / 60);
        var currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        var durationMinutes = Math.floor(curr_track.duration / 60);
        var durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
        if (currentSeconds < 10) {
            currentMinutes = 0 + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = 0 + durationMinutes;
        }
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else
        track_index = 0;
    loadTrack(track_index);
    playTrack();
}
