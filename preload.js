// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) =>
      ipcRenderer.on(channel, (event, ...args) => func(...args)),
    invoke: (channel, data) => ipcRenderer.invoke(channel, data),
  },
  addNote: () => ipcRenderer.invoke("add-note"), // Tambahkan ini
  getNotes: () => ipcRenderer.invoke("get-notes"), // Tambahkan ini
});
