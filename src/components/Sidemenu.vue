<template>
    <div class="sidemenu min-w-[4rem] flex flex-col justify-between bg-white p-3 rounded-md">
        <div class="flex flex-col gap-2">
            <button data-tooltip="Notes" data-sidemenu="sidemenuNotes"
                class="sidemenu-item active tooltip-trigger h-[40px] rounded-md w-full grid items-center justify-center">
                <span class="material-symbols-outlined">note_stack</span>
            </button>
            <!-- <button 
                        class="h-[40px] rounded-md w-full grid items-center justify-center hover:text-[#7f2e0a]">
                        <span class="material-symbols-outlined">groups</span>
                    </button> -->
            <!-- <button data-tooltip="Notifications" data-sidemenu="sidemenuNotification"
            class="sidemenu-item tooltip-trigger h-[40px] rounded-md w-full grid items-center justify-center">
            <span class="material-symbols-outlined">notifications</span>
          </button> -->
        </div>
        <div class="flex flex-col gap-2">
            <!-- <button data-tooltip="Premium"
            class="sidemenu-item tooltip-trigger h-[40px] rounded-md w-full grid items-center justify-center">
            <span class="material-symbols-outlined">local_activity</span>
          </button> -->
            <button data-tooltip="Settings" @click="openSettings"
                class="sidemenu-item tooltip-trigger toggle-settings h-[40px] rounded-md w-full grid items-center justify-center">
                <span class="material-symbols-outlined">settings</span>
            </button>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../eventBus';

export default {
  name: 'Sidemenu',
  methods: {
    openSettings() {
      EventBus.emit('open-settings-modal');
    }
  }
};
</script>