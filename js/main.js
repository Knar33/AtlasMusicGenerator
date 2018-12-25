//write macro to text function
function writeMacro() {
    var song = $("#song").value;
    var toggleKey = $("#toggleKey").value;
    var delayTime = $("#delayTime").value;
    
    var generatedMacro = "delayTime = " + delayTime + "\n";
    for (int i = 0; i < song.length; i++) {
        
    }
    $("#songToggle").value = generatedMacro;
}