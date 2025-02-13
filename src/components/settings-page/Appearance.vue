<template>
    <div class="modal-page w-full flex flex-col gap-2">
        <div class="w-full h-[17.5rem] bg-[#e76127] rounded-md flex flex-col gap-2 p-2">
            <div class="flex items-stretch justify-between h-[35px]">
                <div class="h-full flex items-center">
                    <span class="w-[15px] h-full bg-white grid p-2 rounded-full"></span>
                </div>
                <div class="h-full flex items-center">
                    <span class="bg-white grid w-[3rem] h-full px-4 py-1 rounded-full"></span>
                </div>
                <div class="h-full flex items-center gap-2">
                    <span class="bg-white w-[15px] h-full grid items-center p-2 rounded-full">
                    </span>
                    <span class="flex w-[15px] h-full rounded-full bg-white"></span>
                </div>
            </div>
            <div class="flex-grow flex gap-2 h-[calc(100vh-100px)]">
                <!-- Sidemenu -->
                <div class="w-[2rem] bg-white rounded-md">
                </div>
                <div class="w-[7rem] bg-white rounded-md">
                </div>
                <!-- Note Content -->
                <div class="flex-grow bg-white rounded-md">
                </div>
                <!-- Content Editor -->
                <div class="w-[4rem] bg-white rounded-md">
                </div>
            </div>
        </div>

        <div class="w-full bg-[#eeeeee] rounded-md flex flex-row gap-4 justify-center p-2">
            <button class="p-3 rounded-full border-4 border-[#e76127] p-1"><span
                    class="rounded-full bg-[#e76127]"></span></button>
            <button class="p-3 rounded-full bg-[#e76127]"></button>
            <button class="p-3 rounded-full bg-[#e76127]"></button>
            <button class="p-3 rounded-full bg-[#e76127]"></button>
            <button class="p-3 rounded-full bg-[#e76127]"></button>
        </div>

        <h3 class="text-lg font-bold">Appearance</h3>
        <p>Ini adalah halaman Appearance di dalam modal.</p>
    </div>
</template>

<script>
export default {
    name: 'Appearance'
};
</script>