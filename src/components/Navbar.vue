<template>
    <header class="relative flex items-stretch justify-between h-[35px]">
        <div class="h-full flex items-center">
            <button id="toggleSidebarBtn" @click="toggleSidebar" class="bg-white flex items-center justify-center p-2 rounded-full">
                <span class="material-symbols-outlined text-[19px]">thumbnail_bar</span>
            </button>

        </div>
        <div class="fixed top-[0.5rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-auto gap-2">
            <button class="h-[35px] bg-white px-4 py-1 rounded-full font-['Courgette'] text-[#e94c08] text-[17px]">
                Paperite
            </button>
        </div>

        <div class="h-full flex items-center gap-2">
            <!-- <button class="bg-white h-full grid items-center p-2 rounded-full">
                <img src="../../public/assets/viewbars.png" width="18" height="18" alt="Viewbars">
            </button>
            <button class="flex h-full">
                <img class="h-full w-full rounded-full" src="../../public/assets/pfp.png" alt="Profile">
            </button> -->
            <div class="window-controls flex flex-row h-full">
                <button @click="minimize" class="grid items-center pt-1">
                    <span style="font-size:20px" class="material-symbols-outlined">horizontal_rule</span>
                </button>
                <button @click="toggleMaximize" class="grid items-center pt-1 rotate-180"
                    v-html="maximizeIcon"></button>
                <button @click="close" class="grid items-center">
                    <span style="font-size:23px" class="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    </header>

</template>

<script>

import { EventBus } from '../eventBus';

export default {
    name: 'Navbar',
    data() {
        return {
            isMaximized: false,
        };
    },
    mounted() {
        // Check if the window is maximized initially
        window.electron.ipcRenderer.invoke('isMaximized').then((result) => {
            this.isMaximized = result;
        });

        // Listen for maximize and unmaximize events
        window.electron.ipcRenderer.on('window-maximized', () => {
            this.isMaximized = true;
        });

        window.electron.ipcRenderer.on('window-unmaximized', () => {
            this.isMaximized = false;
        });
    },
    beforeUnmount() {
        // Remove the event listeners when the component is destroyed
        window.electron.ipcRenderer.removeAllListeners('window-maximized');
        window.electron.ipcRenderer.removeAllListeners('window-unmaximized');
    },
    computed: {
        maximizeIcon() {
            return this.isMaximized
                ? '<span style="font-size:18px" class="material-symbols-outlined">filter_none</span>'
                : '<span style="font-size:18px" class="material-symbols-outlined">crop_square</span>';
        },
    },
    methods: {
        minimize() {
            window.electron.ipcRenderer.send('minimize');
        },
        toggleMaximize() {
            window.electron.ipcRenderer.send('maximize');
            this.isMaximized = !this.isMaximized;
        },
        close() {
            window.electron.ipcRenderer.send('close');
        },
        toggleSidebar() {
            EventBus.emit('toggle-sidebar');
        }
    },
};
</script>

<style scoped>
header {
    user-select: none;
    app-region: drag
}

button {
    app-region: no-drag;
}


.window-controls button {
    width: 35px;
    color: white;
    background: transparent;
    border: none;
    border-radius: 10px;
    cursor: default;
}

.window-controls button:hover {
    background: #00000030;
}
</style>