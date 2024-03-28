document.getElementById('play-home-video').addEventListener('click', function(event){
  event.preventDefault();
  var videoPlayer = document.getElementById('video-player');
  videoPlayer.style.display = "block";

  // Воспроизведение видео в полноэкранном режиме
  if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) { /* Firefox */
      videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) { /* IE/Edge */
      videoPlayer.msRequestFullscreen();
  }
  videoPlayer.play();
});

// Событие на завершение полноэкранного режима
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      var videoPlayer = document.getElementById('video-player');
      videoPlayer.pause();
      videoPlayer.style.display = "none";
  }
}
