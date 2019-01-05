var SongPaused = false;
var song = " ";
var delayTime = 200;
var currentNote = 0;
PlaySong();

//write macro to text function
function writeMacro() {
    song = $("#song").val() + " ";
    delayTime = $("#delayTime").val();
    var toggleKey = $("#toggleKey").val();
    
    var generatedMacro = "delayTime = " + delayTime + "\nPause\nloop\n{\n";
    var heldNote = "";
    for (i = 0; i < song.length - 1; i++) {
        if (song[i] === " ") {
            generatedMacro += "sleep delayTime\n";
        }
        else if (song[i] === "-") {
            if (song[i + 1] == "-") {
                generatedMacro += "sleep delayTime\n";
            }
            else {
                generatedMacro += "sleep delayTime\nsend {" + heldNote + " up}\n";
            }
        }
        else {
            if (song[i + 1] === "-") {
                generatedMacro += "send {" + song[i] + " down}\nsleep delayTime\n";
                heldNote = song[i];
            }
            else {
                generatedMacro += "send {" + song[i] + " down}\nsleep delayTime\nsend {" + song[i] + " up}\n";
            }
        }
    };
    
    generatedMacro += "}\nReturn\n" + toggleKey + "::Pause Toggle";
    
    $("#macro").val(generatedMacro);
}

function PlaySong() {
    var piano = [];
    piano[0] = new Howl({ src: ['sound/piano/f1.wav'], volume: 1, preload: true });
    piano[1] = new Howl({ src: ['sound/piano/fs1.wav'], volume: 1, preload: true });
    piano[2] = new Howl({ src: ['sound/piano/g1.wav'], volume: 1, preload: true });
    piano[3] = new Howl({ src: ['sound/piano/gs1.wav'], volume: 1, preload: true });
    piano[4] = new Howl({ src: ['sound/piano/a1.wav'], volume: 1, preload: true });
    piano[5] = new Howl({ src: ['sound/piano/as1.wav'], volume: 1, preload: true });
    piano[6] = new Howl({ src: ['sound/piano/b1.wav'], volume: 1, preload: true });
    piano[7] = new Howl({ src: ['sound/piano/c2.wav'], volume: 1, preload: true });
    piano[8] = new Howl({ src: ['sound/piano/cs2.wav'], volume: 1, preload: true });
    piano[9] = new Howl({ src: ['sound/piano/d2.wav'], volume: 1, preload: true });
    piano[10] = new Howl({ src: ['sound/piano/ds2.wav'], volume: 1, preload: true });
    piano[11] = new Howl({ src: ['sound/piano/e2.wav'], volume: 1, preload: true });
    piano[12] = new Howl({ src: ['sound/piano/f2.wav'], volume: 1, preload: true });

    setInterval(function() {
        if (!SongPaused) {
            if (currentNote === song.length - 1) {
                currentNote = 0;
            }
            switch(song[currentNote]) {
                case 'a':
                    piano[0].play();
                    piano[0].fade(1, 0, delayTime);
                    break;
                case 'w':
                    piano[1].play();
                    piano[1].fade(1, 0, delayTime);
                    break;
                case 's':
                    piano[2].play();
                    piano[2].fade(1, 0, delayTime);
                    break;
                case 'e':
                    piano[3].play();
                    piano[3].fade(1, 0, delayTime);
                    break;
                case 'd':
                    piano[4].play();
                    piano[4].fade(1, 0, delayTime);
                    break;
                case 'r':
                    piano[5].play();
                    piano[5].fade(1, 0, delayTime);
                    break;
                case 'f':
                    piano[6].play();
                    piano[6].fade(1, 0, delayTime);
                    break;
                case 'g':
                    piano[7].play();
                    piano[7].fade(1, 0, delayTime);
                    break;
                case 'y':
                    piano[8].play();
                    piano[8].fade(1, 0, delayTime);
                    break;
                case 'h':
                    piano[9].play();
                    piano[9].fade(1, 0, delayTime);
                    break;
                case 'u':
                    piano[10].play();
                    piano[10].fade(1, 0, delayTime);
                    break;
                case 'j':
                    piano[11].play();
                    piano[11].fade(1, 0, delayTime);
                    break;
                case 'i':
                    piano[12].play();
                    piano[12].fade(1, 0, delayTime);
                    break;
                
            }
            currentNote++;
        }
    }, delayTime);
}

function pauseSong() {
    SongPaused = true;
    $("#songToggle").attr("onClick", "ResumeSong()").attr("value", "Play");
}

function ResumeSong() {
    SongPaused = false;
    $("#songToggle").attr("onClick", "pauseSong()").attr("value", "Pause");
}