<template>
    <div class="min-w-[9.5rem] max-w-[9.5rem] bg-white p-2 rounded-md">
        <div class="flex w-full flex-row flex-wrap gap-2">
            <!-- <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">undo</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">redo</span></button>
          <button class="hover:bg-[#e1e1e1] flex rounded-md items-center p-2"><span class="material-symbols-outlined">search</span></button> -->
            <div ref="dropdown1" class="relative w-48">
                <!-- Dropdown 2 -->
                <button @click="toggleDropdown('dropdown1')"
                    class="dropdown-button flex justify-between items-center hover:bg-gray-300 w-full px-4 py-2 bg-gray-200 text-black font-semibold rounded-md">
                    Title
                    <!-- Icon -->
                    <span class="material-symbols-outlined">keyboard_arrow_down</span>
                </button>
                <ul v-show="isDropdownOpen.dropdown1" ref="menu1"
                    class="dropdown-menu z-10 absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <li class="px-4 py-2 active cursor-pointer rounded-t-md text-xl font-bold">Title</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg font-semibold">Heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-md font-semibold">Sub-heading</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-b-md">Body</li>
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
            <div class="flex w-[5.5rem] items-center rounded-md dropdown">
                <!-- Tombol Utama -->
                <button class="px-3 py-2 grid text-black rounded-l-md hover:bg-[#e1e1e1] focus:outline-none">
                    <!-- Ikon List -->
                    <span class="material-symbols-outlined">format_list_bulleted</span>
                </button>

                <!-- Garis Pemisah -->
                <div class="w-px grid h-6 p-[1px] bg-black"></div>

                <div ref="dropdown2" class="relative grid h-full">
                    <!-- Dropdown Button -->
                    <button @click="toggleDropdown('dropdown2')"
                        class="dropdown-button grid px-3 py-2 text-black rounded-r-md h-full items-center hover:bg-[#e1e1e1] focus:outline-none">
                        <!-- Ikon Chevron -->
                        <span style="font-size:15px;" class="material-symbols-outlined">keyboard_arrow_down</span>
                    </button>
                    <ul id="dropdownMenu" v-show="isDropdownOpen.dropdown2" ref="menu2"
                        class="dropdown-menu z-10 absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        <li class="px-2 py-1 pt-2 active cursor-pointer rounded-t-md"><span class="material-symbols-outlined text-[20px]">format_list_bulleted</span></li>
                        <li class="px-2 py-1 pt-2 hover:bg-gray-100 cursor-pointer rounded-b-md"><span class="material-symbols-outlined text-[20px]">format_list_numbered</span></li>
                    </ul>
                </div>
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

import { computePosition, autoUpdate } from '@floating-ui/dom';

export default {
    name: 'NoteEditor',
    data() {
        return {
            isDropdownOpen: {
                dropdown1: false,
                dropdown2: false,
            },
        };
    },
    methods: {
        toggleDropdown(dropdown) {
            this.isDropdownOpen[dropdown] = !this.isDropdownOpen[dropdown];
            if (this.isDropdownOpen[dropdown]) {
                this.updateDropdownPosition(dropdown);
            }
        },
        updateDropdownPosition(dropdown) {
            this.$nextTick(() => {
                const dropdownRef = this.$refs[dropdown];
                const menuRef = this.$refs[`menu${dropdown.charAt(dropdown.length - 1)}`];

                if (dropdownRef && menuRef) {
                    autoUpdate(dropdownRef, menuRef, () => {
                        computePosition(dropdownRef, menuRef, {
                            placement: 'bottom-start',
                        }).then(({ x, y }) => {
                            Object.assign(menuRef.style, {
                                left: `${x}px`,
                                top: `${y}px`,
                            });
                        });
                    });
                }
            });
        },
        handleClickOutside(event) {
            const dropdown1 = this.$refs.dropdown1;
            const menu1 = this.$refs.menu1;
            const dropdown2 = this.$refs.dropdown2;
            const menu2 = this.$refs.menu2;

            if (
                (this.isDropdownOpen.dropdown1 && !dropdown1.contains(event.target) && !menu1.contains(event.target)) ||
                (this.isDropdownOpen.dropdown2 && !dropdown2.contains(event.target) && !menu2.contains(event.target))
            ) {
                this.isDropdownOpen.dropdown1 = false;
                this.isDropdownOpen.dropdown2 = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};

</script>

<style scoped>
    .active {
        @apply hover:bg-[#d55923] bg-[#e76127] text-white;
    }
</style>