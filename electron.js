import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load URL aplikasi Vue (Dev Server atau build)
  mainWindow.loadURL('http://localhost:5173'); // Sesuaikan port
});
