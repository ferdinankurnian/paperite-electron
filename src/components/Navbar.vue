<template>
    <header class="relative flex items-stretch justify-between h-[35px]">
        <div class="h-full flex items-center">
            <button id="toggleSidebarBtn" @click="toggleSidebar" class="bg-white w-[35px] h-full grid items-center p-2 rounded-full">
                <span style="font-size: 20px;" class="material-symbols-outlined">thumbnail_bar</span>
            </button>
        </div>
        <div class="fixed top-[0.5rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-auto gap-2">
            <button class="h-[35px] bg-white px-4 py-1 rounded-full font-['Courgette'] text-[#e94c08] text-[17px]">
                Paperite
            </button>
        </div>

        <div class="h-full flex items-center gap-2">
            <div class="h-full relative">
                <button ref="button" @click="togglePopover" class="bg-white w-[35px] h-full grid items-center p-2 rounded-full">
                    <img src="/assets/viewbars.png" width="18" height="18" alt="Viewbars" draggable="false">
                </button>
                <div v-if="isPopoverOpen" v-motion-pop ref="popover" class="absolute w-[16rem] z-12 bg-white border border-gray-300 p-3 rounded-lg shadow-lg grid gap-2">
                    <div>
                        <h1 class="text-[15px] font-medium">Set View</h1>
                        <p class="text-[11px]">Select these panels to hide or shows</p>
                    </div>
                    <div class="flex gap-1 h-[7.5rem]">
                        <div class="flex gap-1 hover:brightness-90">
                            <div class="w-[1.5rem] h-full bg-green-300 rounded-sm"></div>
                            <div class="w-[3rem] h-full bg-green-300 rounded-sm"></div>
                        </div>
                        <div class="flex-grow h-full bg-gray-300 rounded-sm"></div>
                        <div class="w-[2rem] hover:brightness-90 h-full bg-red-300 rounded-sm"></div>
                    </div>
                </div>
            </div>
            <!-- <button class="flex h-full">
                <img class="h-full w-full rounded-full" src="../../public/assets/pfp.png" alt="Profile">
            </button> -->
            <div class="window-controls flex flex-row h-full">
                <button @click="minimize" class="grid items-center py-1">
                    <span style="font-size:20px" class="material-symbols-outlined">horizontal_rule</span>
                </button>
                <button @click="toggleMaximize" class="grid items-center py-1 rotate-180"
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
import { computePosition, autoUpdate, offset, shift, flip } from '@floating-ui/dom';

export default {
    name: 'Navbar',
    data() {
        return {
            isMaximized: false,
            isPopoverOpen: false,
        };
    },
    mounted() {
        if (window.electron && window.electron.ipcRenderer) {
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
        } else {
            console.error("ipcRenderer tidak tersedia");
        }

        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        // Remove the event listeners when the component is destroyed
        window.electron.ipcRenderer.removeAllListeners('window-maximized');
        window.electron.ipcRenderer.removeAllListeners('window-unmaximized');
        document.removeEventListener('click', this.handleClickOutside);
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
        },
        togglePopover() {
            this.isPopoverOpen = !this.isPopoverOpen;
            if (this.isPopoverOpen) {
                this.$nextTick(() => {
                    this.updatePopoverPosition();
                });
            }
        },
        updatePopoverPosition() {
            const button = this.$refs.button;
            const popover = this.$refs.popover;

            if (!button || !popover) {
                console.error('Button or popover reference is missing');
                return;
            }

            autoUpdate(button, popover, () => {
                computePosition(button, popover, {
                    placement: 'bottom',
                    middleware: [offset(5), shift(), flip()],
                }).then(({ x, y }) => {
                    Object.assign(popover.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });
                }).catch(error => {
                    console.error('Error computing position:', error);
                });
            });
        },
        handleClickOutside(event) {
            const popover = this.$refs.popover;
            const button = this.$refs.button;
            if (popover && !popover.contains(event.target) && !button.contains(event.target)) {
                this.isPopoverOpen = false;
            }
        },
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