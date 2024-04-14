var modalTimeout; 

function resetModalTimeout() {
    clearTimeout(modalTimeout); 
    modalTimeout = setTimeout(closefun, 60000); 
}

document.addEventListener("mousemove", function() {
    resetModalTimeout();
});

document.addEventListener("scroll", function() {
    resetModalTimeout();
});

function myfun(str) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var directions = getDirections(str);

    modal.style.display = "block";
    modalImg.src = "photoshop/" + str + ".png";

    var directionsDiv = document.getElementById("directions");
    directionsDiv.textContent = "Directions: " + directions;

    speak(directions, 1.0, 1.0); 

    resetModalTimeout(); 
}



function getDirections(roomNumber) {
    switch (roomNumber) {
        case '100':
            return "From centre, turn left and continue straight ahead. You will reach Room 100, server room.";
        case '101':
            return "From centre, turn left and continue straight ahead. After a short distance, make a left turn. Room 101, Computer Lab 1, is on your left.";
        case '102':
            return "From centre, turn left and continue straight ahead. After a short distance, make a right turn. Room 102, Computer Lab 2, is on your right.";
        case '103':
            return "From centre, turn left and continue straight ahead. After a short distance, make a right turn. Room 103, Computer Lab 3, is on your left.";
        case '104':
            return "From the center, turn left and proceed straight, then take a right turn. Room 104, Placement Room, will be on your left.";
        case '105':
            return "From centre, turn left and continue straight. Make a right turn. Proceed straight and make another right turn. Room 105, Computer Lab 4, is on your right.";
        case '106':
            return "From center, turn left, continue straight, make a right turn, proceed straight, and make another right turn. Room 106, Maintenance Lab, is on your right.";
        case '107':
            return "From centre, turn left and continue straight, then turn right. Room 107, Computer Lab 5, is on your right.";
        case '108':
            return "From centre, turn left and continue straight ahead. After a short distance, make a left turn. Proceed straight. Room 108, E-Classroom, is on your left.";
        case '109':
            return "From center, turn left, continue straight, after a short distance, make a right turn. Room 109, Department of Physical Education and Multi Gym, is on your right.";
        case '110':
            return "From centre, turn left and continue straight ahead. Then proceed straight to Room 110, Staff and Physically Handicapped Washrooms, are on your right.";
        case '111':
            return "From centre, proceed straight ahead. Room 111, Secretary and Correspondent Room, is on your left.";
        case '112':
            return "From centre, proceed straight ahead. You will find Room 112, Chairman's Cabin, is on your left.";
        case '113':
            return "From centre, proceed straight ahead. Room 113, Administrative Officer Cabin, is on your right.";
        case '114':
            return "From centre, proceed straight ahead. Room 114, Examination Cell, is on your left.";
        case '115':
            return "From centre, proceed straight a bit. Room 115, Principal's Cabin, is on your right.";
        case '116':
            return "From centre, proceed straight ahead. Make a slight right turn. Room 116, Reception, is on your right.";
        case '117':
            return "From centre, turn right and proceed straight. You will reach Room 117, Book Centre, is on your right.";
        case '118':
            return "From centre, turn right and proceed straight ahead. Room 118, Staff Washrooms, are on your left.";
        case '119':
            return "From centre, turn right, then make two left turns. Room 119, Fluid Mechanics and Hydraulic Machines Lab, is on your left.";
        case '120':
            return "From centre, turn right and proceed straight ahead, then make a left turn. Room 120, Strength and Materials Lab, is on your left.";
        case '121':
            return "From centre, turn right and proceed straight ahead. Room 121, Electrical Machines Lab 1 and 2 Power Systems Lab, is on your right.";
        case '122':
            return "From centre, turn right twice and proceed straight ahead. Room 122, Machine Tools Lab, will be ahead of you.";
        case '123':
            return "From centre, turn right twice, proceed straight ahead, and then make a left turn. Room 123, Engineering Workshop, is on your left.";
        case '201':
            return "Take left stairs to 1st floor, turn left twice slightly. Room 201, Store Room, is on your right corner.";
        case '202':
            return "Take left stairs to 1st floor, turn left twice. Room 202, 4th CSE Lecture Hall, is on your next right.";
        case '203':
            return "Take left stairs to 1st floor, turn left. Room 203, Seminar Hall, is on your right.";
        case '204':
            return "Take left stairs to 1st floor, turn left twice. Room 204, 3rd CSE Lecture Hall, is on your left.";
        case '205':
            return "Take centre stairs to 1st floor, turn right. Room 205, Ladies Washrooms, are on your left.";
        case '206':
            return "Take centre stairs to 1st floor, turn left, go straight, then turn left. Room 206, Physics Laboratory, is on your left.";
        case '207':
            return "From centre stairs to 1st floor, go straight, then turn left. Room 207, Chemistry Laboratory, is on your left.";
        case '208':
            return "From right stairs to 1st floor, turn left. Room 208, Gents Washrooms, are on your right.";
        case '209':
            return "Take right stairs to 1st floor, go straight. Room 209, Communication/Digital Design Lab, is straight ahead.";
        case '209A':
            return "Take right stairs to 1st floor, turn right, then turn left slightly and turn left again. Room 209A Project Room/Department Library is ahead.";
        case '210':
            return "Take right stairs to 1st floor, turn right, then turn left slightly and turn left again. Room 210, ECA/LICA Laboratory, is on your right.";
        case '211A':
            return "Take right stairs to 1st floor, then turn right and turn left slightly. Room 211A, ECE HoD Cabin, is on your left.";
        case '211':
            return "Take right stairs to 1st floor, turn right. Room 211, Electronics Devices and Circuits Laboratory, is on your left.";
        case '212':
            return "Take right stairs to 1st floor, turn right. Room 212, Electronics Devices and Circuits Laboratory, is on your left.";
        case '213':
            return "Take right stairs to 1st floor, turn right. Room 213, ECE Staff Room, is ahead.";
        case '214':
            return "Take right stairs to 1st floor, turn right, then turn right again and proceed straight. Room 214, Computer Aided Designs Laboratory, is on your left.";
        case '215':
            return "Take right stairs to 1st floor, turn right twice, then go straight. Room 215, Computer Aided Designs Laboratory, is ahead.";
        case '216':
            return "Take right stairs to 1st floor, turn right twice, then go straight. Room 216, 3rd ECE Lecture Hall, is on your right.";
        case '217':
            return "Take centre stairs to 1st floor, turn right. Room 217, CSE Department, is on your right.";
        case '301':
            return "Take left staircase to second floor, turn left twice, and proceed ahead. Room 301, Ladies Waiting Hall, will be in corner to your right.";
        case '302':
            return "Take left staircase to second floor, turn left twice, and proceed ahead. Room 302, 2nd CSE-A Lecture Hall, is on your right.";
        case '303':
            return "Take left staircase to second floor, turn left twice, and proceed ahead. Room 303, 2nd CSE-B Lecture Hall, will be on your right.";
        case '304':
            return "Take left staircase to second floor, turn left, Room 304, Library, is on your right.";
        case '305':
            return "Take left staircase to second floor, turn left twice, and proceed ahead. Room 305, 2nd CSM Lecture Hall, is on your left.";
        case '306':
            return "Take left staircase to second floor, turn right and go ahead. Room 306, Gents Washrooms, are on your left.";
        case '307':
            return "Take centre staircase to second floor, turn left twice. Room 307, Metallurgy Laboratory, will be on your left.";
        case '308':
            return "Take centre staircase to second floor, turn left twice, and proceed ahead. Room 308, NSS Room, will be at corner ahead.";
        case '309':
            return "Take centre staircase to second floor, turn left twice. Room 309, Seminar Hall, will be next to your right.";
        case '310':
            return "Take right staircase to second floor, turn left. Room 310 Ladies Washrooms, are on your left.";
        case '311':
            return "Take right staircase to second floor, turn right. Room 311, Drawing Hall-1, is on your left.";
        case '312':
            return "Take right staircase to second floor, turn right, and proceed. Room 312, Drawing Hall-2, is on your left.";
        case '313':
            return "Take right staircase to second floor, turn right. Room 313, 3rd Year Mechanical Lecture Hall, will be ahead.";
        case '314':
            return "Take right staircase to second floor, turn right twice, and proceed straight. Room 314, 4th Year Mechanical Lecture Hall, is on your left.";
        case '315':
            return "Take right staircase to second floor, turn right twice, and proceed straight. Room 315, 4th Year ECE Lecture Hall, is on your right.";
        case '316':
            return "Take centre staircase to second floor, turn left. Room 316, Mechanical Staff Room, is on your right.";
        case '401':
            return "Take left stairs to third floor, turn left twice, and proceed. Room 401, H and B S Staff Room, is on your right.";
        case '402':
            return "Take left stairs to third floor, turn left twice. Room 402, Meteorology Lab Instrumentation Lab, is on your right.";
        case '403':
            return "Take left stairs to third floor, turn left, then take a right turn. Room 403, Lecture Hall, is on your left.";
        case '404':
            return "Take left stairs to third floor, turn left, then take a right, and proceed straight. Room 404, 1st ECE and 1st Mechanical Lecture Hall, is on your left.";
        case '405':
            return "Take left stairs to third floor, turn left and then right, and continue straight. Room 405, 1st CSE-A Lecture Hall, is on your left.";
        case '406':
            return "Take left stairs to third floor, make a left and then right, and proceed straight. Room 406, Ladies Waiting Hall, is on your right.";
        case '407':
            return "Take left stairs to third floor, take a left, followed by a right, and proceed straight. Room 407, 1st Year CSM Lecture Hall, is on your right.";
        case '408':
            return "Take left stairs to third floor, take a right. Room 408, 1st CSE-B Lecture Hall, is on your right.";
        case '409':
            return "Take left stairs to third floor, turn left twice. Room 409, Lecture Hall, is on your left.";
        case '410':
            return "Take centre stairs to third floor, take a right. Room 410, Gents Washrooms, are on your left.";
        case '411':
            return "Take centre stairs to third floor, turn left twice, and go straight. Room 411, Lecture Hall, is on your left.";
        case '412':
            return "Take centre stairs to third floor, turn left twice, and proceed ahead. Room 412, 2nd Mechanical Lecture Hall, is on your left.";
        case '413':
            return "Take centre stairs to third floor, turn left twice. Room 413, Seminar Hall, is on your right.";
        case '414':
            return "Take right stairs to third floor, take a left. Room 414, Ladies Washrooms, are on your right.";
        case '415':
            return "Take right stairs to third floor, take a right then a left. Room 415, EC Lab/EM Lab, is on your left.";
        case '416':
            return "Take right stairs to third floor, take a right, then a left, and proceed. Room 416, CS Lab/PE Lab, is on your left.";
        case '417':
            return "Take right stairs to third floor, take a right then a left, and proceed ahead. Room 417, EEE HOD Cabin, is on your left.";
        case '418':
            return "Take right stairs to third floor, take a right and a left, and proceed ahead. Room 418, 3rd EEE Lecture Hall, is on right.";
        case '419':
            return "Take right stairs to third floor, take a right and a left, and go straight. Room 419, 4th EEE Lecture Hall, is on right.";
        case '420':
            return "Take right stairs to third floor, take a right, and proceed straight. Room 420, Lecture Hall, is on right.";
        case '421':
            return "Take right stairs to third floor, turn right twice. Room 421, 4th Civil Lecture Hall, is on your left.";
        case '422':
            return "Take right stairs to third floor, turn right twice, and proceed straight. Room 422, 4th Civil Lecture Hall, is on your left.";
        case '423':
            return "Take right stairs to third floor, turn right twice. Room 423, Lecture Hall, is on right.";
        case '424':
            return "Take centre stairs to third floor. Room 424, Civil Staff Room, is in front of you.";
        default:
            return "Directions not available"
    }
}

function speak(text, speed, volume) {
    var speechSynthesis = window.speechSynthesis;
    var speech = new SpeechSynthesisUtterance(text);
    speech.rate = speed; 
    speech.volume = volume; 
    speechSynthesis.speak(speech);
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
}

function closefun() {
    stopSpeaking();
    document.getElementById('myModal').style.display = "none";
}

var closeButton = document.getElementById("close");
closeButton.addEventListener("click", closefun);

var closeButtons = document.querySelectorAll('[data-dismiss="modal"]');
closeButtons.forEach(function(button) {
    button.addEventListener("click", closefun);
});

function textFun() {
    var temp = document.getElementById('roomNo').value;
    var room = parseInt(temp);

    if ((room == 209 && (temp == '209A' || temp == '209')) || (room == 211 && (temp == '211A' || temp == '211')) ||
        ((room >= 101 && room <= 123) || (room >= 201 && room <= 217 && room != 209 && room != 211) ||
            (room >= 301 && room <= 316) || (room >= 401 && room <= 424)) && temp.length == 3) {
        myfun(temp);
        document.getElementById('roomNo').value = "";
    } else {
        speak("Please enter a valid room number", 1.0, 1.0);
        document.getElementById('exampleModal').style.display = "block";
        document.getElementById('roomNo').value = "";
    }
}
