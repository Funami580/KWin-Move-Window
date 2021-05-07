# KWin-Script: Move Window

Move the window without resizing.

## Installation
```
git clone https://github.com/Funami580/KWin-Move-Window.git
cd KWin-Move-Window
plasmapkg2 --type=kwinscript -i .
kwin_x11 --replace &
```

### Uninstall
```
# List all your installed KWin-Scripts
kpackagetool5 --type KWin/Script --list

# Uninstall
kpackagetool5 --type KWin/Script --remove MoveWindow
```

## Shortcuts
| Shortcuts                            | Commands                                                 |
| ------------------------------------ | -------------------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad7</kbd> | <kbd>Move Window to upper left</kbd>                     |
| <kbd>Meta</kbd> + <kbd>Numpad8</kbd> | <kbd>Move Window to upper center</kbd>                   |
| <kbd>Meta</kbd> + <kbd>Numpad9</kbd> | <kbd>Move Window to upper right</kbd>                    |
| <kbd>Meta</kbd> + <kbd>Numpad4</kbd> | <kbd>Move Window to middle left</kbd>                    |
| <kbd>Meta</kbd> + <kbd>Numpad5</kbd> | <kbd>Move Window to center</kbd>                         |
| <kbd>Meta</kbd> + <kbd>Numpad6</kbd> | <kbd>Move Window to middle right</kbd>                   |
| <kbd>Meta</kbd> + <kbd>Numpad1</kbd> | <kbd>Move Window to lower left</kbd>                     |
| <kbd>Meta</kbd> + <kbd>Numpad2</kbd> | <kbd>Move Window to lower center</kbd>                   |
| <kbd>Meta</kbd> + <kbd>Numpad3</kbd> | <kbd>Move Window to lower right</kbd>                    |