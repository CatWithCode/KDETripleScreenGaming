//Put Setup-Details here:
function runScript(){
    var client = workspace.activeWindow;

    client.frameGeometry = {
        x: 0, // From left most screen.
        y: 50, // From Top most screen side.
        height: 1440, //Y
        width: 4720, //X
    }

    // Always on top:
    client.keepAbove = true;
}

// Hotkey:
registerShortcut("GamingWindow-Maker", "GamingWindow-Maker", "Meta+G", function () {
    runScript();
});
