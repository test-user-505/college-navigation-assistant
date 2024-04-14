var recognition; 

function startOrStopSpeechRecognition() {
    var microphoneButton = document.getElementById('microphoneButton');
    
    if (!recognition || (recognition && recognition.paused)) {
        startSpeechRecognition();
        microphoneButton.src = "img/microphone_btnOn.png";
    } else {
        recognition.stop();
        recognition = null;
        microphoneButton.src = "img/microphone_btn.png";
    }
}

function startSpeechRecognition() {
    if (recognition && !recognition.paused) {
        return; 
    }

    recognition = new window.webkitSpeechRecognition(); 
    recognition.lang = 'en-US,en-IN';

    recognition.start();

    var timeout = setTimeout(function() {
        recognition.stop();
        recognition = null; 
        var microphoneButton = document.getElementById('microphoneButton');
        microphoneButton.src = "img/microphone_btn.png";
    }, 10000); 

    recognition.onresult = function(event) {
        clearTimeout(timeout);
        var roomNo = event.results[0][0].transcript.trim();
        checkRoom(roomNo);
        var microphoneButton = document.getElementById('microphoneButton');
        microphoneButton.src = "img/microphone_btn.png";
    };
}

function speak(text, speed, volume) {
    var speechSynthesis = window.speechSynthesis;
    var speech = new SpeechSynthesisUtterance(text);
    speech.rate = speed; 
    speech.volume = volume; 
    speechSynthesis.speak(speech);
}

function checkRoom(roomNo) {
    var room = parseInt(roomNo);
    if ((room == 209 && (roomNo == '209A' || roomNo == '209')) || (room == 211 && (roomNo == '211A' || roomNo == '211'))) {
        myfun(roomNo);
    } else if (((room >= 100 && room <= 123) || (room >= 201 && room <= 217 && room != 209 && room != 211) || (room >= 301 && room <= 316) || (room >= 401 && room <= 424)) && roomNo.length == 3) {
        myfun(roomNo);
    } else {
        speak("Please enter a valid room number", 1.0, 1.0);
        document.getElementById('exampleModal').style.display = "block";
    }
}
