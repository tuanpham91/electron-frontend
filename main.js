const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 960,
        height: 640,
        webPreference: {
            nodeIntegration: true
        }
    })
    win.loadFile('start.html')
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (win === null) {
        createWindow()
    }
})