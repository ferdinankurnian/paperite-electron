<template>
  <Settings />
  <div class="flex flex-col p-2 gap-2 flex-grow h-full">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="flex-grow flex gap-2 h-[calc(100vh-100px)]">
      <!-- Sidemenu -->
      <Sidemenu />

      <!-- Menu -->
      <Menu @note-selected="loadNoteContent" />

      <!-- Note Content -->
      <NoteContent :noteContent="selectedNoteContent" />

      <!-- Content Editor -->
      <NoteEditor />
    </main>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Sidemenu from '../components/Sidemenu.vue';
import Menu from '../components/Menu.vue';
import NoteContent from '../components/NoteContent.vue';
import NoteEditor from '../components/NoteEditor.vue';
import Settings from '../components/Settings.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Sidemenu,
    Menu,
    NoteContent,
    NoteEditor,
    Settings
  },
  data() {
    return {
      selectedNoteContent: "",
    };
  },
  methods: {
    async loadNoteContent(noteId) {
      try {
        const note = await window.electron.ipcRenderer.invoke("get-note-by-id", noteId);
        this.selectedNoteContent = note.note_content;
      } catch (error) {
        this.selectedNoteContent = "Failed to load note content.";
      }
    },
  },
};

</script>