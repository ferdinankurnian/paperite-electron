// electron.js
import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sqlite3 from "sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(path.join(__dirname, "notes.db"), (err) => {
      if (err) {
        console.error("Error opening database:", err);
        reject(err);
      } else {
        console.log("Database opened successfully.");
        db.run(
          `
          CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            note_title TEXT,
            note_content TEXT,
            note_pinned BOOLEAN,
            note_tags TEXT,
            created_at TEXT,
            modified_at TEXT
          );
        `,
          (err) => {
            if (err) {
              console.error("Error creating table:", err);
              reject(err);
            } else {
              console.log("Table created or already exists.");
              resolve(db);
            }
          }
        );
      }
    });
  });
}

async function createNote() {
  return new Promise((resolve, reject) => {
    const now = new Date().toISOString();
    const newNote = {
      user_id: 0, // Ganti sesuai kebutuhan
      note_title: "Untitled..",
      note_content: "",
      note_pinned: false,
      note_tags: "",
      created_at: now,
      modified_at: now,
    };

    const sql = `
      INSERT INTO notes (user_id, note_title, note_content, note_pinned, note_tags, created_at, modified_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(
      sql,
      [
        newNote.user_id,
        newNote.note_title,
        newNote.note_content,
        newNote.note_pinned,
        newNote.note_tags,
        newNote.created_at,
        newNote.modified_at,
      ],
      function (err) {
        if (err) {
          console.error("Error creating note:", err);
          reject(err);
        } else {
          const noteId = this.lastID;
          resolve(noteId);
        }
      }
    );
  });
}

async function getAllNotes() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM notes", (err, rows) => {
      if (err) {
        console.error("Error getting notes:", err);
        reject(err);
      } else {
        const notes = rows.map((row) => ({
          ...row,
          note_pinned: row.note_pinned === 1, // Konversi ke boolean
        }));
        resolve(notes);
      }
    });
  });
}

async function getNoteById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM notes WHERE id = ?", [id], (err, row) => {
      if (err) {
        console.error("Error getting note:", err);
        reject(err);
      } else {
        const note = {
          ...row,
          note_pinned: row.note_pinned === 1, // Konversi ke boolean
        };
        resolve(note);
      }
    });
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    icon: path.join(__dirname, "public", "paperiteicon.png"),
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Buat development: pastikan Vite ga nge-reload karena hot reload (bukan dari note add)
  win.loadURL("http://localhost:5173");
  // Untuk production: win.loadFile(path.join(__dirname, 'dist', 'index.html'));

  // Handler buat maximize/unmaximize dan event window lain (bisa disesuaikan)
  win.on("maximize", () => win.webContents.send("window-maximized"));
  win.on("unmaximize", () => win.webContents.send("window-unmaximized"));

  ipcMain.on("minimize", () => win.minimize());
  ipcMain.on("maximize", () => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  ipcMain.on("close", () => win.close());

  ipcMain.handle("isMaximized", async () => win.isMaximized());

  ipcMain.handle("get-note-by-id", async (event, id) => {
    const note = await getNoteById(id);
    return note;
  });
}

app.whenReady().then(async () => {
  try {
    await initializeDatabase();
    createWindow();

    ipcMain.handle("add-note", async () => {
      await createNote();
      const notes = await getAllNotes();
      return notes;
    });

    ipcMain.handle("get-notes", async () => {
      const notes = await getAllNotes();
      return notes;
    });
  } catch (err) {
    console.error("Failed to initialize database:", err);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
