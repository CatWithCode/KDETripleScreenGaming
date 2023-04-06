# LinuxTripleScreenGaming:
Triple Screen Gaming on Linux without Nvidia Surround or similar.

# Dependencies
GamingMode-Kwin-Script (Den PKG-Order in eine .ZIP packen und dann Umbennenen zu "GamingMode.kwinscript". Dieses dann in den KDE-Einstellungen als KWin-Script importieren).

gamescope

# Hotkey's:
SUPER + G = Gameing-Mode (4720x1440 und AlwaysOnTop(Off/On))

STRG + ALT + T = AlwaysOnTop(Off/On)

# Starting Game's:

- Normal
gamescope -h 1440 -w 4720 -b %command%

- MangoHUD:
gamescope -h 1440 -w 4720 -b -- mangohud %command%

- MangoHUD mit Parametern (BROKEN):
gamescope -h 1440 -w 4720 -b -- MANGOHUD_CONFIG=fps_limit=165,fps_only mangohud %command%
