<template>
    <div class="modal-page flex flex-col gap-4">
        <div class="bg-[#ee7421] w-fit rounded-lg flex flex-col p-4 gap-3">
            <div class="flex flex-row gap-3 items-center text-white">
                <div class="">
                    <h1 class="text-xs font-bold">5</h1>
                    <h1 class="text-xs">Note Created</h1>
                </div>
                <div class="w-[1px] h-[25px] my-auto bg-[#fff]"></div>
                <div class="">
                    <h1 class="text-xs font-bold">15</h1>
                    <h1 class="text-xs">Tags Created</h1>
                </div>
            </div>
        </div>
        <!-- <div>
            <h1 class="text-lg font-bold">Storage</h1>
            <h2 class="text-sm text-slate-500">Connected with Google Drive</h2>

        </div> -->
        <div>
            <button class="bg-red-600 rounded-md px-2 pe-3 py-1 font-bold text-[14px] text-red-100 flex items-center gap-1">
                <span style="font-size: 20px;" class="material-symbols-outlined">delete</span> 
                Remove all data
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>