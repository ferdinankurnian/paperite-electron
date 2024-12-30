// electron.js
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: false, // Make sure nodeIntegration is false for security
      contextIsolation: true, // Enable contextIsolation for security
      preload: path.join(__dirname, 'preload.js'), // Preload script
    },
  });

  mainWindow.loadURL('http://localhost:5173'); // Adjust the port as needed

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window-maximized');
  });

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window-unmaximized');
  });

  ipcMain.on('minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.on('maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('close', () => {
    mainWindow.close();
  });

  ipcMain.handle('isMaximized', async () => {
    return mainWindow.isMaximized();
  });
});