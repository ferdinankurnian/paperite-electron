<template>
    <button draggable="false" class="select-none py-2 px-4">
        <div class="hover:bg-[#ededed] hover:dark:bg-[#2a2a2a] p-3 rounded-md w-full">
            <div class="flex justify-between">
                <h1 v-if="title" class="font-semibold w-full text-left text-sm truncate">{{ title }}</h1>
                <h1 v-else class="font-semibold text-sm text-left w-full text-gray-400 truncate">
                    Untitled..
                </h1>
                <span
                    v-if="isPinned"
                    style="font-size:18px;color:#e76127"
                    class="material-symbols-outlined">
                    keep
                </span>
            </div>
            <p v-if="description" class="text-xs text-left line-clamp-2 text-gray-600">
                {{ description }}
            </p>
            <!-- Tags, only show if tags exist -->
            <div v-if="tags.length > 0" class="flex flex-row gap-1 mt-2">
                <div v-for="(tag, index) in tags" :key="index" class="border-2 bg-orange-100 dark:bg-orange-950 border-amber-600 dark:border-amber-900 text-amber-800 dark:text-amber-200 px-2 py-[2px] text-[10px] rounded-md">
                    {{ tag }}
                </div>
            </div>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false, // Title is now optional
        },
        description: {
            type: String,
            required: false,
        },
        tags: {
            type: Array,
            default: () => [],
        },
        isPinned: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
