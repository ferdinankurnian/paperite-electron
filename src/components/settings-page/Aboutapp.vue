<template>
    <div class="modal-page flex flex-col gap-4">
        <!-- <img src="../../../public/paperiteicon.png" alt="Paperite Icon"> -->
        <!-- <div>
            <h1 class="text-lg font-bold">Storage</h1>
            <h2 class="text-sm text-slate-500">Connected with Google Drive</h2>

        </div> -->
        <div>
            <button class="bg-red-600 rounded-md px-2 pe-3 py-1 font-bold text-[14px] text-red-100 flex items-center gap-1">
                <span style="font-size: 20px;" class="material-symbols-outlined">delete</span> 
                Remove all notes
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutApp'
};
</script>