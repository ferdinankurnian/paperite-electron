<template>
    <!-- Dark Overlay -->
    <div id="darkOverlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>

    <!-- Floating Sidebar -->
    <div id="sidebar"
        class="fixed top-0 left-0 h-full w-64 bg-white shadow-md border-[#bdbdbd] border-r-2 border-gray-300 transform -translate-x-full transition-transform duration-300 z-50 hidden">
        <div class="p-2 flex gap-2 items-center">
            <button id="closeSidebarBtn" class="bg-white grid p-2 rounded-full">
                <span style="font-size:18px" class="material-symbols-outlined">thumbnail_bar</span>
            </button>
            <h2 class="ms-9 text-xl font-['Courgette'] text-[#e94c08]">Paperite</h2>
        </div>
        <div class="p-4 py-1 flex gap-2">
            <button class="flex-grow bg-gray-200 rounded-md flex items-center justify-center p-2"><span
                    class="material-symbols-outlined">sync</span></button>
            <button onclick="closeSidebar()"
                class="flex-grow toggle-settings bg-gray-200 rounded-md flex items-center justify-center p-2"><span
                    class="material-symbols-outlined">settings</span></button>
            <button class="flex-grow bg-gray-200 rounded-md flex items-center justify-center p-2"><span
                    class="material-symbols-outlined">local_activity</span></button>
        </div>
        <ul class="m-4 space-y-2">
            <!-- <li>
            <button onclick="toggleTheme()"
                class="block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">Dark Mode</button>
        </li> -->
            <li>
                <a href="#"
                    class="block flex items-center gap-2 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900"><span
                        class="material-symbols-outlined">inbox</span> Your PaperSpace</a>
            </li>
            <li>
                <a href="#"
                    class="block flex items-center gap-2 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900"><span
                        class="material-symbols-outlined">tag</span> Your Tags</a>
            </li>
            <li>
                <hr class="mx-4">
            </li>
            <li>
                <a href="#"
                    class="block flex items-center gap-2 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900"><span
                        class="material-symbols-outlined">archive</span> Archived Notes</a>
            </li>
            <li>
                <a href="#"
                    class="block flex items-center gap-2 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900"><span
                        class="material-symbols-outlined">delete</span> Deleted Notes</a>
            </li>
        </ul>
    </div>
</template>

<script>

import { EventBus } from '../eventBus';

export default {
  name: 'Sidebar',
  mounted() {
    EventBus.on('toggle-sidebar', this.openSidebar);

    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const darkOverlay = document.getElementById('darkOverlay');

    closeSidebarBtn.addEventListener('click', this.closeSidebar);
    darkOverlay.addEventListener('click', this.closeSidebar);
  },
  methods: {
    openSidebar() {
      const sidebar = document.getElementById('sidebar');
      const darkOverlay = document.getElementById('darkOverlay');
      sidebar.classList.remove('hidden');
      darkOverlay.classList.remove('hidden');
      setTimeout(() => {
        sidebar.classList.remove('-translate-x-full');
        darkOverlay.classList.add('bg-opacity-50');
      }, 10);
    },
    closeSidebar() {
      const sidebar = document.getElementById('sidebar');
      const darkOverlay = document.getElementById('darkOverlay');
      sidebar.classList.add('-translate-x-full');
      darkOverlay.classList.add('hidden');
      setTimeout(() => {
        darkOverlay.classList.add('hidden');
        sidebar.classList.add('hidden');
      }, 300);
    }
  },
  beforeDestroy() {
    EventBus.off('toggle-sidebar', this.openSidebar);

    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const darkOverlay = document.getElementById('darkOverlay');

    closeSidebarBtn.removeEventListener('click', this.closeSidebar);
    darkOverlay.removeEventListener('click', this.closeSidebar);
  }
}

</script>