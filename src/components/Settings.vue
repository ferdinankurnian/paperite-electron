<template>
    <div class="modal fixed inset-0 p-20 overflow-y-auto z-50 bg-black bg-opacity-50 flex justify-center items-center hidden"
        id="settingModal">
        <div class="modal-dialog w-[50rem] h-full max-h-[32rem] bg-white rounded-lg">
            <div class="modal-content flex h-full">
                <div class="modal-sidebar w-[15rem] bg-[#ececec] border-[#bdbdbd] flex flex-col gap-2 border-r rounded-l-lg">
                    <div class="flex flex-col gap-2 px-4 pt-4">
                        <h1 class="text-xl font-semibold">Settings</h1>
                    </div>
                    <div id="settings-page-list" class="flex flex-col gap-1 px-4 overflow-y-auto">
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2 active"
                            data-settings-page="home">
                            <span style="font-size: 18px" class="material-symbols-outlined">home</span>
                            <h1 class="text-sm">Home</h1>
                        </button>
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2"
                            data-settings-page="appearance">
                            <span style="font-size: 18px" class="material-symbols-outlined">contrast</span>
                            <h1 class="text-sm">Appearance</h1>
                        </button>
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2"
                            data-settings-page="editor">
                            <span style="font-size: 18px" class="material-symbols-outlined">edit_square</span>
                            <h1 class="text-sm">Editor</h1>
                        </button>
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2"
                            data-settings-page="privacysecurity">
                            <span style="font-size: 18px" class="material-symbols-outlined">lock</span>
                            <h1 class="text-sm">Privacy & Security</h1>
                        </button>
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2"
                            data-settings-page="help">
                            <span style="font-size: 18px" class="material-symbols-outlined">help</span>
                            <h1 class="text-sm">Help</h1>
                        </button>
                        <button class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2 mb-4"
                            data-settings-page="aboutapp">
                            <span style="font-size: 18px" class="material-symbols-outlined">info</span>
                            <h1 class="text-sm">About App</h1>
                        </button>
                    </div>
                </div>
                <div class="flex flex-grow flex-col">
                    <div
                        class="modal-header bg-[#f6f6f6] rounded-tr-lg flex justify-between p-4 py-2 pr-2 border-b border-[#bdbdbd] items-center">
                        <h5 id="settingsTitle" class="text-md select-none">{{ settingsTitle }}</h5>
                        <button class="text-gray-400 hover:text-gray-500 flex" id="close-modal"><span
                                class="material-symbols-outlined">close</span></button>
                    </div>
                    <div id="settingsContent" class="modal-body flex p-4 flex-grow overflow-y-auto">
                        <component :is="currentPage"></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../eventBus';
import Home from './settings-page/Home.vue';
import Appearance from './settings-page/Appearance.vue';
import Editor from './settings-page/Editor.vue';
import Privacysecurity from './settings-page/Privacysecurity.vue';
import Help from './settings-page/Help.vue';
import Aboutapp from './settings-page/Aboutapp.vue';

export default {
    name: 'Settings',
    components: {
        Appearance,
        Home,
        Editor,
        Privacysecurity,
        Help,
        Aboutapp
    },
    data() {
        return {
            currentPage: 'home'
        };
    },
    computed: {
        settingsTitle() {
            switch (this.currentPage) {
                case 'home':
                    return 'Home';
                case 'appearance':
                    return 'Appearance';
                case 'editor':
                    return 'Editor';
                case 'privacysecurity':
                    return 'Privacy & Security';
                case 'help':
                    return 'Help';
                case 'aboutapp':
                    return 'About App';
                default:
                    return '';
            }
        }
    },
    methods: {
        openSettingsModal() {
            const modal = document.getElementById('settingModal');
            if (modal) {
                modal.classList.remove('hidden');
            }
        },
        closeSettingsModal() {
            const modal = document.getElementById('settingModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        },
        showPage(page, event) {
            console.log(`Changing page to: ${page}`); // Debugging log
            this.currentPage = page;

            // Remove active class from all buttons
            const buttons = document.querySelectorAll('.settings-menu');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // Add active class to the clicked button
            event.currentTarget.classList.add('active');
        }
    },
    mounted() {
        EventBus.on('open-settings-modal', this.openSettingsModal);

        const closeModalButton = document.getElementById('close-modal');
        if (closeModalButton) {
            closeModalButton.addEventListener('click', this.closeSettingsModal);
        }

        const buttons = document.querySelectorAll('.settings-menu');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const page = event.currentTarget.getAttribute('data-settings-page');
                this.showPage(page, event);
            });
        });
    }
};
</script>

<style scoped>

.settings-menu.active {
    @apply bg-gray-300;
}

</style>