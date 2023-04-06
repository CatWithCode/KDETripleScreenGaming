function setX(newX) {
    workspace.activeClient.geometry.x = newX;
}
function setY(newY) {
    workspace.activeClient.geometry.y = newY;
}
function setWidth(newWidth) {
    workspace.activeClient.geometry.width = newWidth;
}
function setHeight(newHeight) {
    workspace.activeClient.geometry.height = newHeight;
}
function setAbove() {
    if (workspace.activeClient.keepAbove) {
        workspace.activeClient.keepAbove = false;
    } else {
        workspace.activeClient.keepAbove = true;
    }
}
// example: add a shortcut Meta+Z to set the window to position top-left screen corner and size 1920x1080
registerShortcut("UltraWideGaming: 0,240 4720x1440",
                 "UltraWideGaming: 0,240 4720x1440",
                 "Meta+G",
                 () => {setX(0); setY(240); setWidth(4720); setHeight(1440); setAbove();});

registerShortcut("ShowVideo",
                 "ShowVideo",
                 "Ctrl+Alt+T",
                 () => {setAbove();});
