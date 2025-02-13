<template>
    <button draggable="false" @click="selectNote" class="select-none py-2 px-4 cursor-pointer">
        <div class="hover:bg-[#ededed] p-3 rounded-md w-full" :class="{ 'bg-[#ededed]': isActive }">
            <div class="flex justify-between">
                <h1 v-if="title" class="font-semibold w-full text-left text-sm truncate">{{ title }}</h1>
                <h1 v-else class="font-semibold text-sm text-left w-full text-gray-400 truncate">
                    Untitled..
                </h1>
                <span v-if="isPinned" style="font-size:18px;color:#e76127" class="material-symbols-outlined">
                    keep
                </span>
            </div>
            <p v-if="description" class="text-xs text-left line-clamp-2 text-gray-600">
                {{ description }}
            </p>
            <!-- Tags, only show if tags exist -->
            <!-- <div v-if="tags" class="flex flex-row gap-1 mt-2">
                <div class="border-1 bg-orange-100 border-amber-600 text-amber-800 px-2 py-[2px] text-[10px] rounded-md">
                    {{ tags }}
                </div>
            </div> -->
        </div>
    </button>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: false, // Title is now optional
        },
        description: {
            type: String,
            required: false,
        },
        //   tags: {
        //     type: String,
        //     default: "",
        //   },
        isPinned: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        selectNote() {
            this.$emit("select", this.id);
        },
    },
};
</script>