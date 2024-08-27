<template>
  <nav class="bg-white flex justify-between items-center py-2 px-3 shadow-md">
    <div class="flex items-center">
      <Icon @click="openAside()" style="color: #4b5563" size="1.5em" class="cursor-pointer" name="bx:menu"/>
    </div>
    <div id="search-div" class=" flex items-center w-[80%]">
      <Icon style="color: #4b5563" size="1.5em" name="bx:search"/>
      <input class="bg-transparent border-none outline-none ml-1 w-[90%]"
             placeholder="Pesquisar..."
      >
    </div>
    <div id="configurations-div" class="flex items-center w-[7%] justify-end">
      <Icon style="color: #4b5563" size="1.5em" name="bx:bell"/>
      <user-dropw-down class="ml-2"/>
    </div>
  </nav>
</template>

<script setup lang="ts">

import userDropwDown from "~/components/shared/dropdowns/userDropDown.vue";

const emit = defineEmits(['openAside']);

function openAside() {
  emit('openAside');
}

</script>

<style scoped>

</style>