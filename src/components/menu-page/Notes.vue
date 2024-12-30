<template>
    <div id="sidemenuNotes" class="sidemenu-page">
        <div class="flex flex-row justify-between px-4 pt-4 mb-2 items-center">
            <button class="flex flex-row items-center">
                <h1 class="text-xl font-semibold">All Notes</h1>
            </button>
            <button data-tooltip="Add Note" class="tooltip-trigger">
                <span style="font-size:20px;" class="material-symbols-outlined">edit_square</span>
            </button>
        </div>
        <div class="px-4">
            <div class="bg-[#e7e7e7] dark:bg-[#2a2a2a] flex items-center px-2 gap-2 rounded-md h-9">
                <span style="font-size:18px;color:#5c5c5c" class="material-symbols-outlined">search</span>
                <input type="text" class="flex-grow bg-[#e7e7e7] dark:bg-[#2a2a2a] outline-none" name="search-note"
                    id="search-note" placeholder="Search note..">
            </div>
        </div>
        <!-- Note List -->
        <div id="note-list" class="flex flex-col overflow-y-auto h-[calc(100%-70px)]">
            <div v-for="(note, index) in notes" :key="index" class="flex flex-col">
                <NoteItem
                    :title="note.title"
                    :description="note.description"
                    :tags="note.tags"
                    :isPinned="note.isPinned"
                />
                <!-- Divider -->
                <div
                    v-if="index < notes.length - 1"
                    class="border-t border-gray-300 dark:border-gray-700 mx-8">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NoteItem from '../micro/NoteItem.vue';

export default {
    name: 'NotesPage',
    components: {
        NoteItem,
    },
    data() {
        return {
            notes: [
                {
                    title: 'Item 1, ini adalah judul dari item pertama',
                    description: 'Ini adalah deskripsi dari item pertama.',
                    tags: ['#work', '#urgent'],
                    isPinned: true,
                },
                {
                    title: 'Judul saja la', // Empty title
                    isPinned: false,
                },
                {
                    // No title
                    description: '',
                    isPinned: false,
                },
                {
                    title: 'Judul saja pake tags', // Empty title
                    tags: ['#personal', '#hobby'],
                    isPinned: false,
                },
            ],
        };
    },
};

</script>
