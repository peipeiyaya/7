var audioPlayer = document.getElementById("audioPlayer");
        var musicFileInput = document.getElementById("musicFile");

        function loadMusic() {
            var file = musicFileInput.files[0];
            var objectUrl = URL.createObjectURL(file);
            audioPlayer.src = objectUrl;
        }

        function play() {
            audioPlayer.play();
        }

        function pause() {
            audioPlayer.pause();
        }

        function stop() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }