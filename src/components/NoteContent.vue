<template>
    <div class="flex-grow bg-white rounded-md">
        <div class="flex flex-col h-full">
          <div id="editable" class="flex-grow overflow-y-auto border-none outline-none p-8 scrollable-container" contenteditable="true">
            Text goes here..
          </div>
          <div class="m-2 flex flex-row justify-between items-stretch">
            <div class="flex flex-row items-center gap-2">
              <button class="bg-[#e1e1e1] rounded-md p-2 py-1 text-[13px]">#</button>
              <div class="w-[1px] h-3/4 bg-[#e1e1e1] rounded-lg"></div>
              <div id="note-tags">
                <button
                  class="bg-[#e1e1e1] rounded-md p-2 py-1 text-[13px] border-2 bg-orange-100 border-amber-600 text-amber-800"># work</button>
              </div>
            </div>
            <div class="flex flex-row-reverse gap-2">
              <button class="w-[27.5px] justify-center rounded-md flex hover:bg-[#e1e1e1] p-1 items-center"><span
                  style="font-size:18px" class="material-symbols-outlined">more_vert</span></button>

            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'NoteContent',
}
</script>