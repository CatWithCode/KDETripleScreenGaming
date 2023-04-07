# LinuxTripleScreenGaming:
Triple Screen Gaming on Linux without Nvidia Surround or similar.

I tryed to create a UI for the Values, but could not find any usable documation about KWin-Scripts. Thats why you need to set the Values inside the ~/pkg/contents/code/main.js file.

# Configurations:

- geometry.x:

Window-Position from the left most Screen.

- geometry.y:

Window position from top - If you have rotating screens or different resolutions (e.g. 1080p, 1440p, 1080p), you can centre it on the other screens. I have the left and right screens rotated left and right. This means I calculate "(1920-1440)/2=240" and with 240 pixels from the top the window is centred on left and right screen and full screen on the middle one.

-geometry.width:

Combine all screen widths.

-geometry.height.

The required maximum height of the window.

# Dependencies
- GamingMode-Kwin-Script (Den PKG-Order in eine .ZIP packen und dann Umbennenen zu "GamingMode.kwinscript". Dieses dann in den KDE-Einstellungen als KWin-Script importieren. EVTL. In den KDE-Einstellungen unter Kurzbefehle die Hotkey hinterlegen falls er sie nicht automatisch nimmt).

- gamescope

# Hotkey's:
SUPER + G = Gameing-Mode (4720x1440 und AlwaysOnTop(Off/On))

STRG + ALT + T = AlwaysOnTop(Off/On)

# Starting Game's:

- Normal:

gamescope -h 1440 -w 4720 -b %command%

- MangoHUD:

gamescope -h 1440 -w 4720 -b -- mangohud %command%

- MangoHUD mit Parametern (BROKEN):

gamescope -h 1440 -w 4720 -b -- MANGOHUD_CONFIG=fps_limit=165,fps_only mangohud %command%
