const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: false,
    }
    // show: false,
  });

  // win.webContents.openDevTools();

  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    const indexPath = path.join(__dirname, '../dist/index.html');
    
    if (!fs.existsSync(indexPath)) {
      console.error('Файл index.html не найден по пути:', indexPath);
      const backupPath = path.join(__dirname, '../build/index.html');
      if (fs.existsSync(backupPath)) {
         win.loadFile(backupPath);
      } else {
         win.loadFile(indexPath);
      }
    } else {
      win.loadFile(indexPath);
    }
  }

  win.once('ready-to-show', () => {
    win.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});