# KDETripleScreenGaming:
Triple Screen Gaming on KDE without Nvidia Surround or similar.

More information: https://catwithcode.github.io/Blog/2023.04.07_Linux_Force_Triple_Screen_Gaming_without_Eyefinity_or_Surround/Linux_Force_Triple_Screen_Gaming_without_Eyefinity_or_Surround.html

I tryed to create a UI for the Values, but could not find any usable documation about KWin-Scripts. Thats why you need to set the Values inside the ~/pkg/contents/code/main.js file.

# Configurations:

- geometry.x:

Window-Position from the left most Screen.

- geometry.y:

Window position from top - If you have rotated screens or different resolutions (e.g. 1080p, 1440p, 1080p), you can centre it on the other screens. I have the left and right screens rotated left and right. This means I calculate "(1920-1440)/2=240" and with 240 pixels from the top the window is centred on left and right screen and full screen on the middle one.

- geometry.width:

Combine all screen widths.

- geometry.height.

The required maximum height of the window.

# Dependencies

- KDE

- gamescope

# Hotkey's:
SUPER + G = Gameing-Mode (GameWindow over all Screens, AlwaysOnTop(Off/On))

STRG + ALT + T = AlwaysOnTop(Off/On)

# Starting Game's (Only Steam needs (%command%)):

- Normal:

gamescope -h 1440 -w 4720 -b %command%

- MangoHUD:

gamescope -h 1440 -w 4720 -b -- mangohud %command%

- MangoHUD with parameters (DOSE !NOT! WORK! HELP NEEDED!):

gamescope -h 1440 -w 4720 -b -- MANGOHUD_CONFIG=fps_limit=165,fps_only mangohud %command%

# Creating the .kwinscript (You could also just use the file from the Releases on the GitHub-Page):

- Change the values inside the ~/pkg/contents/code/main.js to your Setup.

- Create a .ZIP with only the pkg folder in it.

- Rename it to "GamingMode.kwinscript".

# Installation:

- In the KDE-Settings, go to the KWin-Script-Section and install the .ZIP.

- Enable it.
