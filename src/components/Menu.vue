<template>
    <div class="w-[20rem] flex flex-col bg-white rounded-md">
        <NotesPage />
        <div id="sidemenuNotification" class="sidemenu-page hidden">
            <div class="flex flex-row justify-between px-4 pt-4 mb-2 items-center">
                <h1 class="text-xl font-semibold select-none">Notification</h1>
                <!-- <button data-tooltip="Add Note" class="tooltip-trigger">
                            <span style="font-size:20px;" class="material-symbols-outlined">edit_square</span>
                        </button> -->
            </div>
            <!-- Note List -->
            <div id="note-list" class="flex flex-col overflow-y-auto h-[calc(100%-70px)]">
                <button draggable="false" class="select-none py-2 px-4">
                    <div class="hover:bg-[#ededed] hover:dark:bg-[#2a2a2a] p-3 rounded-md w-full">
                        <div class="flex justify-between">
                            <h1 class="font-semibold text-sm truncate">Item 1, ini adalah judul dari item ke satu
                            </h1>
                            <span style="font-size:18px;color:#e76127" class="material-symbols-outlined">keep</span>
                        </div>
                    </div>
                </button>
                <button draggable="false" class="select-none py-2 px-4">
                    <div class="hover:bg-[#ededed] hover:dark:bg-[#2a2a2a] p-3 rounded-md w-full">
                        <div class="flex justify-between">
                            <h1 class="font-semibold text-sm truncate">Item 2, ini adalah judul dari item ke dua
                            </h1>
                            <span style="font-size:18px;color:#e76127" class="material-symbols-outlined">keep</span>
                        </div>
                        <p class="text-xs line-clamp-2 text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </button>
                <button draggable="false" class="select-none py-2 px-4">
                    <div class="hover:bg-[#ededed] hover:dark:bg-[#2a2a2a] p-3 rounded-md w-full">
                        <div class="flex justify-between">
                            <h1 class="font-semibold text-sm truncate">Item 3, ini adalah judul dari item ke tiga
                            </h1>
                            <!-- <span style="font-size:18px;color:#e76127" class="material-symbols-outlined">keep</span> -->
                        </div>
                        <p class="text-xs line-clamp-2 text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div class="flex flex-row gap-1 mt-2">
                            <div
                                class="border-2 bg-orange-100 dark:bg-orange-950 border-amber-600 dark:border-amber-900 text-amber-800 dark:text-amber-200 px-2 py-[2px] text-[10px] rounded-md">
                                # work
                            </div>
                            <div
                                class="border-2 bg-red-100 dark:bg-red-950 border-red-600 dark:border-red-900 text-red-800 dark:text-red-200 px-2 py-[2px] text-[10px] rounded-md">
                                # progress
                            </div>
                            <div
                                class="border-2 bg-blue-100 dark:bg-blue-950 border-blue-600 dark:border-blue-900 text-blue-800 dark:text-blue-200 px-2 py-[2px] text-[10px] rounded-md">
                                # time
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import NotesPage from './menu-page/Notes.vue'

export default {
    name: 'Menu',
    components: {
        NotesPage,
    },
}
</script>