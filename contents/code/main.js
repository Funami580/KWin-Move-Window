// Horizontal position
var POS_HOR = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
}

// Vertical position
var POS_VER = {
    UP: "up",
    CENTER: "center",
    DOWN: "down"
}

function moveWindow(hor, ver) {
    var client = workspace.activeClient;
    
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var x = null;
        var y = null;
        
        if (hor == POS_HOR.LEFT) {
            x = maxArea.x;
        } else if (hor == POS_HOR.CENTER) {
            x = maxArea.x + (maxArea.width - client.width) / 2;
        } else if (hor == POS_HOR.RIGHT) {
            x = maxArea.width - client.width;
        }
        
        if (ver == POS_VER.UP) {
            y = maxArea.y;
        } else if (ver == POS_VER.CENTER) {
            y = maxArea.y + (maxArea.height - client.height) / 2;
        } else if (ver == POS_VER.DOWN) {
            y = maxArea.height - client.height;
        }
        
        if (x != null && y != null) {
            client.geometry = {
                x: x,
                y: y,
                width: client.width,
                height: client.height
            };
        }
    }
}

registerShortcut("MoveWindowToCenter", "Move Window to Center", "Meta+Num+5", function () {
    moveWindow(POS_HOR.CENTER, POS_VER.CENTER);
});

registerShortcut("MoveWindowToUpperLeft", "Move Window to Upper Left", "Meta+Num+7", function () {
    moveWindow(POS_HOR.LEFT, POS_VER.UP);
});

registerShortcut("MoveWindowToUpperMiddle", "Move Window to Upper Middle", "Meta+Num+8", function () {
    moveWindow(POS_HOR.CENTER, POS_VER.UP);
});

registerShortcut("MoveWindowToUpperRight", "Move Window to Upper Right", "Meta+Num+9", function () {
    moveWindow(POS_HOR.RIGHT, POS_VER.UP);
});

registerShortcut("MoveWindowToMiddleLeft", "Move Window to Middle Left", "Meta+Num+4", function () {
    moveWindow(POS_HOR.LEFT, POS_VER.CENTER);
});

registerShortcut("MoveWindowToMiddleRight", "Move Window to Middle Right", "Meta+Num+6", function () {
    moveWindow(POS_HOR.RIGHT, POS_VER.CENTER);
});

registerShortcut("MoveWindowToLowerLeft", "Move Window to Lower Left", "Meta+Num+1", function () {
    moveWindow(POS_HOR.LEFT, POS_VER.DOWN);
});

registerShortcut("MoveWindowToLowerMiddle", "Move Window to Lower Middle", "Meta+Num+2", function () {
    moveWindow(POS_HOR.CENTER, POS_VER.DOWN);
});

registerShortcut("MoveWindowToLowerRight", "Move Window to Lower Right", "Meta+Num+3", function () {
    moveWindow(POS_HOR.RIGHT, POS_VER.DOWN);
});