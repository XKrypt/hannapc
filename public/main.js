const { app, BrowserWindow, Tray, Menu, dialog } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')
const { StartServer } = require('../express/server')

require('@electron/remote/main').initialize()

function createWindow() {
  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  let tray = null;
  win.on('minimize', function (event) {
    event.preventDefault();
    win.setSkipTaskbar(true);
    tray = createTray();
  });

  win.on('restore', function (event) {
    win.show();
    win.setSkipTaskbar(false);
    tray.destroy();
  });

  function createTray() {
    let appIcon = new Tray(path.join(__dirname, "logo192.png"));
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Show', click: function () {
          win.show();
        }
      },
      {
        label: 'Exit', click: function () {
          app.isQuiting = true;
          app.quit();
        }
      }
    ]);

    appIcon.on('double-click', function (event) {
      win.show();
    });
    appIcon.setToolTip('Tray Tutorial');
    appIcon.setContextMenu(contextMenu);
    return appIcon;
  }

  StartServer(() => {
    console.log("Server started!!");
  })

}








app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})