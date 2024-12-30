<template>
    <div class="modal fixed inset-0 p-20 overflow-y-auto z-50 bg-black bg-opacity-50 flex justify-center items-center hidden"
        id="settingModal">
        <div class="modal-dialog w-[50rem] h-full max-h-[32rem] bg-white rounded-lg">
            <div class="modal-content flex h-full">
                <div class="modal-sidebar w-[15rem] bg-[#ececec] border-[#bdbdbd] flex flex-col gap-2 border-r rounded-l-lg">
                    <div class="flex flex-col gap-2 px-4 pt-4">
                        <h1 class="text-xl font-semibold">Settings</h1>
                        <a class="settings-menu rounded-md flex items-center p-2 gap-2 active" data-settings-page="profile">
                            <div class="w-[2.8rem] h-[2.8rem]">
                                <img class="h-full w-full rounded-full" src="assets/pfp.png" alt="Profile">
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold">Lucky Ethan</h1>
                                <h2 class="text-xs">@lucky</h2>
                            </div>
                        </a>
                    </div>
                    <hr class="border-[#bdbdbd] mx-8">
                    <div class="flex flex-col gap-1 px-4 overflow-y-auto">
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="appearance">
                            <span style="font-size: 18px" class="material-symbols-outlined">contrast</span>
                            <h1 class="text-sm">Appearance</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="editor">
                            <span style="font-size: 18px" class="material-symbols-outlined">edit_square</span>
                            <h1 class="text-sm">Editor</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="notification">
                            <span style="font-size: 18px" class="material-symbols-outlined">notifications</span>
                            <h1 class="text-sm">Notification</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="addon">
                            <span style="font-size: 18px" class="material-symbols-outlined">extension</span>
                            <h1 class="text-sm">Add-on</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="importexport">
                            <span style="font-size: 18px" class="material-symbols-outlined">export_notes</span>
                            <h1 class="text-sm">Import & Export</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="language">
                            <span style="font-size: 18px" class="material-symbols-outlined">language</span>
                            <h1 class="text-sm">Language</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="privacysecurity">
                            <span style="font-size: 18px" class="material-symbols-outlined">lock</span>
                            <h1 class="text-sm">Privacy & Security</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2" data-settings-page="help">
                            <span style="font-size: 18px" class="material-symbols-outlined">help</span>
                            <h1 class="text-sm">Help</h1>
                        </a>
                        <a class="settings-menu hover:bg-gray-300 rounded-md flex items-center p-2 px-3 gap-2 mb-4" data-settings-page="aboutapp">
                            <span style="font-size: 18px" class="material-symbols-outlined">info</span>
                            <h1 class="text-sm">About App</h1>
                        </a>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="modal-header bg-[#f6f6f6] rounded-tr-lg flex justify-between p-4 py-2 pr-2 border-b border-[#bdbdbd] items-center">
                        <h5 id="settingsTitle" class="text-md select-none"></h5>
                        <button class="text-gray-400 hover:text-gray-500 flex" id="close-modal"><span class="material-symbols-outlined">close</span></button>
                    </div>
                    <div id="settingsContent" class="modal-body flex p-4 h-full">
                        @include('component.settingsview.profile')
                        @include('component.settingsview.appearance')
                        @include('component.settingsview.editor')
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>