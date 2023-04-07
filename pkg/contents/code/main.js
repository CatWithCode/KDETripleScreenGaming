//Put your Setup-Details here:
function setGamingWindow(){
    workspace.activeClient.geometry.x = 0;
    workspace.activeClient.geometry.y = 240;
    workspace.activeClient.geometry.width = 4720;
    workspace.activeClient.geometry.height = 1440;
}

function setAbove() {
    if (workspace.activeClient.keepAbove) {
        workspace.activeClient.keepAbove = false;
    } else {
        workspace.activeClient.keepAbove = true;
    }
}
registerShortcut("Move and Size GamingWindow",
                 "Move and Size GamingWindow",
                 "Meta+G",
                 () => {setGamingWindow(); setAbove();});

registerShortcut("Floating Top Window",
                 "Floating Top Window",
                 "Ctrl+Alt+T",
                 () => {setAbove();});
