// Mobile timeline setup //
var timeline = document.querySelector("#curriculum .timeline");
var tlScrollThumb = document.querySelector("#curriculum .scrollbar .thumb");

timeline.addEventListener("scroll", () => {
    tlScrollThumb.style.left =
        (timeline.scrollLeft / (timeline.scrollWidth / 2)) * 208 + "px";
});
// Mobile timeline setup //

// ----- Video Setup ----- //

// Setup youtube API //
// Create script
var firstScript = document.body.getElementsByTagName("script")[0];
var ytScript = document.createElement("script");
ytScript.src = "https://www.youtube.com/iframe_api";
firstScript.parentNode.insertBefore(ytScript, firstScript);

// Create class
var ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player("videoPlayer", {
        events: {
            onReady: onYTPlayerReady,
        },
    });
}
function onYTPlayerReady(event) {
    event.target.playVideo();
}
// Setup youtube API //

// Create videos profile //
var videos = document.querySelectorAll("#video .obj-video");

videos.forEach((element, index) => {
    var videoId = element.getAttribute("data-id");

    // Image
    var thumbnail = document.createElement("span");
    thumbnail.classList.add("thumbnail");
    thumbnail.style.backgroundImage = `url("https://img.youtube.com/vi/${videoId}/0.jpg")`;
    element.appendChild(thumbnail);

    // Play icon
    var ic_play = document.createElement("img");
    ic_play.classList.add("btn-play");
    ic_play.src = "assets/images/btn-play.svg";
    thumbnail.appendChild(ic_play);

    // Title
    var title = document.createElement("h3");
    title.innerText = element.getAttribute("data-title");
    element.appendChild(title);

    // Click event
    element.addEventListener("click", () => {
        videoViewer.classList.add("show");
        ytPlayer.loadVideoById(videoId);
    });
});
// Create videos profile //

// Setup video viewer //
// Click event
var videoViewer = document.querySelector("#video #viewer");
videoViewer.addEventListener("click", stopVideo);

// Stop video
function stopVideo() {
    ytPlayer.stopVideo();
    videoViewer.classList.remove("show");
}

// Constrol video
document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        stopVideo();
    }
});
// Setup video viewer //
// ----- Video Setup ----- //
