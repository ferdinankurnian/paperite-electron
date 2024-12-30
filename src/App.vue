<template>
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
      <Menu />

      <!-- Note Content -->
      <NoteContent />

      <!-- Content Editor -->
      <NoteEditor />
    </main>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Sidemenu from './components/Sidemenu.vue';
import Menu from './components/Menu.vue';
import NoteContent from './components/NoteContent.vue';
import NoteEditor from './components/NoteEditor.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Sidemenu,
    Menu,
    NoteContent,
    NoteEditor,
  },
};

</script>