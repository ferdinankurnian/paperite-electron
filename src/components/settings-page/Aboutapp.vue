<template>
    <div class="modal-page flex flex-col gap-4">
        <img src="../../../public/paperiteicon.png" width="100" alt="Paperite Icon">
        <div>
            <h1 class="text-lg font-bold">Paperite (alpha-v0.1)</h1>
            <h2 class="text-sm text-slate-500">electron</h2>
        </div>
        <button class="w-fit h-[7.5rem] bg-[#D72828] rounded-md p-3 flex flex-col justify-between hover:transform hover:scale-102 transition-transform">
            <h1 class="text-[13px] text-white">Made with hard work by</h1>
            <div class="flex flex-row gap-5">
                <div>
                    <h2 class="text-[20px] text-white font-bold">Ferdinan Iydheko</h2>
                    <h2 class="text-[11px] text-white font-semibold text-left">Ferdinan Kurnia Nugroho</h2>
                </div>
                <div class="flex items-end">
                    <h2 class="text-[12px] text-white font-semibold">&copy; 2024</h2>
                </div>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AboutApp'
};
</script>