//write macro to text function
function writeMacro() {
    var song = $("#song").value;
    var toggleKey = $("#toggleKey").value;
    var delayTime = $("#delayTime").value;
    
    var generatedMacro = "delayTime = " + delayTime + "\n";
    for (i = 0; i < song.length; i++) {
        if (song[i] === " ") {
            generatedMacro += "sleep delayTime\n";
        }
        else if (song[i] === "-") {
            
        }
        else {
            
        }
    };
    
    generatedMacro += "}\nReturn\nF12::Pause Toggle";
    
    $("#macro").value = generatedMacro;
}