<template>
  <div id="sidemenuNotes" class="sidemenu-page h-full">
    <div class="flex flex-row justify-between px-4 pt-4 mb-2 items-center">
      <button class="flex flex-row items-center">
        <h1 class="text-xl font-semibold">All Notes</h1>
      </button>
      <!-- Add Note button -->
      <button type="button" data-tooltip="Add Note" class="tooltip-trigger" @click="addNote">
        <span style="font-size: 20px" class="material-symbols-outlined">edit_square</span>
      </button>
    </div>
    <div class="px-4">
      <div class="bg-[#e7e7e7] flex items-center px-2 gap-2 rounded-md h-9">
        <span style="font-size: 18px; color: #5c5c5c" class="material-symbols-outlined">search</span>
        <input
          type="text"
          class="flex-grow bg-[#e7e7e7] outline-none"
          name="search-note"
          id="search-note"
          placeholder="Search note.."
        />
      </div>
    </div>
    <!-- Note List -->
    <div
      id="note-list"
      ref="noteList"
      class="flex flex-col h-[calc(100%-5.5rem)] overflow-y-auto relative"
    >
      <div v-for="(note, index) in notes" :key="note.id" class="flex flex-col">
        <NoteItem
          :id="note.id"
          :title="note.note_title"
          :description="note.note_content"
          :tags="note.note_tags"
          :isPinned="note.note_pinned"
          :isActive="selectedNoteId === note.id"
          @select="selectNote"
        />
        <!-- Divider -->
        <div v-if="index < notes.length - 1" class="border-t border-gray-300 mx-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteItem from "../micro/NoteItem.vue";

export default {
  name: "NotesPage",
  components: {
    NoteItem,
  },
  data() {
    return {
      notes: [],
      selectedNoteId: null,
    };
  },
  methods: {
    async addNote() {
      try {
        const updatedNotes = await window.electron.addNote();
        this.notes = updatedNotes;
      } catch (error) {
        console.error("Failed to add note:", error);
      }
    },
    async loadNotes() {
      try {
        const notes = await window.electron.getNotes();
        this.notes = notes;
      } catch (error) {
        console.error("Failed to load notes:", error);
      }
    },
    selectNote(noteId) {
      this.selectedNoteId = noteId;
      this.$emit("note-selected", noteId); // Emit event ke parent component
    },

  },
  mounted() {
    this.loadNotes();
  },
};
</script>

<style scoped>
.untitled-note {
  color: #ababab;
}
</style>
