<template>
    <div class="min-w-[9.5rem] max-w-[9.5rem] bg-white p-2 rounded-md">
        <div class="flex w-full flex-row flex-wrap gap-2">
            <!-- <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">undo</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">redo</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">search</span></button> -->
            <div class="relative inline-block w-48 dropdown">
                <!-- Dropdown 2 -->
                <button
                    class="dropdown-button flex justify-between items-center hover:bg-gray-300 w-full px-4 py-2 bg-gray-200 text-black rounded-md">
                    Title
                    <!-- Icon -->
                    <span class="material-symbols-outlined">keyboard_arrow_down</span>
                </button>
                <ul
                    class="dropdown-menu z-10 absolute hidden mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Title</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub-heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Body</li>
                </ul>
            </div>
            <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
                    class="material-symbols-outlined">format_bold</span></button>
            <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
                    class="material-symbols-outlined">format_italic</span></button>
            <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
                    class="material-symbols-outlined">format_underlined</span></button>
            <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
                    class="material-symbols-outlined">format_strikethrough</span></button>
            <div class="relative flex w-[5.5rem] items-center rounded-md dropdown">
                <!-- Tombol Utama -->
                <button class="px-3 py-2 grid text-black rounded-l-md hover:bg-[#e1e1e1] focus:outline-none">
                    <!-- Ikon List -->
                    <span class="material-symbols-outlined">format_list_bulleted</span>
                </button>

                <!-- Garis Pemisah -->
                <div class="w-px grid h-6 p-[1px] bg-black"></div>

                <!-- Dropdown Button -->
                <button
                    class="dropdown-button grid px-3 py-2 text-black rounded-r-md h-full items-center hover:bg-[#e1e1e1] focus:outline-none">
                    <!-- Ikon Chevron -->
                    <span style="font-size:15px;" class="material-symbols-outlined">keyboard_arrow_down</span>
                </button>
                <ul id="dropdownMenu"
                    class="dropdown-menu z-10 absolute hidden mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Title</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sub-heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Body</li>
                </ul>
            </div>
            <!-- <div class="relative inline-block w-48 dropdown">
            <-- Dropdown 2 --
            <button
              class="dropdown-button flex justify-between items-center w-full hover:bg-gray-300 px-4 py-2 bg-gray-200 text-black rounded-md">
              Default
              <-- Icon --
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <ul
              class="dropdown-menu z-10 absolute hidden mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <li class="px-4 py-2 bg-[#E94C08] text-white rounded-t-md hover:bg-gray-100 cursor-pointer">Default</li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Serif</li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Monospace</li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Latin</li>
            </ul>
          </div> -->
            <!-- <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">text_format</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">format_ink_highlighter</span></button> -->
            <!-- <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">link</span></button> -->
        </div>
        <!-- <hr class="my-2">
        <div class="flex w-full flex-row flex-wrap gap-2">
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
              class="material-symbols-outlined">check_box</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span
              class="material-symbols-outlined">add_photo_alternate</span></button>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'NoteEditor',
}
</script>