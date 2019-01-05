var SongPaused = true;
var song = $("#song").val() + " ";
var delayTime = $("#delayTime").val();
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
    piano[0] = new Howl({ src: ['sound/f1.wav'], volume: 1, preload: true });
    piano[1] = new Howl({ src: ['sound/fs1.wav'], volume: 1, preload: true });
    piano[2] = new Howl({ src: ['sound/g1.wav'], volume: 1, preload: true });
    piano[3] = new Howl({ src: ['sound/gs1.wav'], volume: 1, preload: true });
    piano[4] = new Howl({ src: ['sound/a1.wav'], volume: 1, preload: true });
    piano[5] = new Howl({ src: ['sound/as1.wav'], volume: 1, preload: true });
    piano[6] = new Howl({ src: ['sound/f1.wav'], volume: 1, preload: true });
    piano[7] = new Howl({ src: ['sound/g1.wav'], volume: 1, preload: true });
    piano[8] = new Howl({ src: ['sound/gs1.wav'], volume: 1, preload: true });
    piano[9] = new Howl({ src: ['sound/d1.wav'], volume: 1, preload: true });
    piano[10] = new Howl({ src: ['sound/ds1.wav'], volume: 1, preload: true });
    piano[11] = new Howl({ src: ['sound/e1.wav'], volume: 1, preload: true });
    piano[12] = new Howl({ src: ['sound/f2.wav'], volume: 1, preload: true });
    
    setInterval(function() {
        if (!SongPaused) {
            if (currentNote === song.length) {
                currentNote = 0;
            }
            switch(song[currentNote]) {
                case 'a':
                    piano[0].play();
                    break;
                case 'w':
                    piano[1].play();
                    break;
                case 's':
                    piano[2].play();
                    break;
                case 'e':
                    piano[3].play();
                    break;
                case 'r':
                    piano[4].play();
                    break;
                case 'd':
                    piano[5].play();
                    break;
                case 'f':
                    piano[6].play();
                    break;
                case 'g':
                    piano[7].play();
                    break;
                case 'y':
                    piano[8].play();
                    break;
                case 'h':
                    piano[9].play();
                    break;
                case 'u':
                    piano[10].play();
                    break;
                case 'j':
                    piano[11].play();
                    break;
                case 'i':
                    piano[12].play();
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